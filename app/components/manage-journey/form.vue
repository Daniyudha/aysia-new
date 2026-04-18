<script setup lang="ts">
import type { BlogPayload } from "~/utils/data-type";

import { blogFetcher } from "~/repository/modules/blog";

import type { JourneySchemaFormType } from "./schema";

import { JourneySchema } from "./schema";

const props = defineProps<{
  defaultValue?: any;
  mode: "create" | "update";
}>();

const isSubmitting = ref(false);
const router = useRouter();
const config = useRuntimeConfig();

// Inisialisasi Form
const { handleSubmit, resetForm, setFieldValue, values, setValues } = useForm({
  validationSchema: toTypedSchema(JourneySchema),
  initialValues: {
    title: props.defaultValue?.title ?? "",
    tag: props.defaultValue?.tag ?? "",
    description: props.defaultValue?.description ?? "",
    imageUrl: props.defaultValue?.thumbnail ?? "",
    image: undefined,
    mode: props.mode || "create",
  },
});

// Sinkronisasi saat props berubah (misal data baru datang dari API)
watch(() => props.defaultValue, (newVal) => {
  if (newVal) {
    setValues({
      title: newVal.title ?? "",
      tag: newVal.tag ?? "",
      description: newVal.description ?? "",
      imageUrl: newVal.thumbnail ?? "",
      image: undefined,
      mode: props.mode || "create",
    });
  }
}, { deep: true });

watch(() => props.defaultValue, (newVal) => {
  if (newVal) {
    console.log("Blog description:", newVal.description);
  }
}, { deep: true });

const thumbnailUrl = computed(() => {
  if (!values?.imageUrl?.length)
    return "";
  if (values?.imageUrl?.startsWith("blob")) {
    return values?.imageUrl;
  }
  return config.public.apiBase + values?.imageUrl;
});

function resetImage() {
  setFieldValue("image", undefined);
  setFieldValue("imageUrl", "");
}

function createImageUrl(file: any) {
  return URL.createObjectURL(file);
}

async function compressImage(file: File, maxWidth: number = 800, quality: number = 0.7): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        blob => blob ? resolve(blob) : reject(new Error("Canvas toBlob failed")),
        file.type,
        quality,
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
  });
}

const onSaveJourney = handleSubmit(async (formValues) => {
  isSubmitting.value = true;
  try {
    const payload: BlogPayload = {
      title: formValues.title,
      description: formValues.description,
      tag: formValues.tag || "",
    };
    if (formValues.image) {
      payload.thumbnail = formValues.image;
    }

    if (props.defaultValue?.id) {
      await blogFetcher().updateById(props.defaultValue.id, payload);
      useSonner.success("Journey updated successfully");
    }
    else {
      await blogFetcher().create(payload);
      useSonner.success("Journey created successfully");
    }

    router.push("/dashboard/journey/");
  }
  catch (error) {
    useSonner.error("Failed to save journey");
  }
  finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <form @submit.prevent="onSaveJourney">
    <UiCardContent class="!py-4 border-b border-dashboard-neutral-100/50">
      <div class="w-full mx-auto">
        <Field v-slot="{ handleChange, errors }" name="image">
          <UiFormItem label="Hero Image" class="mb-6">
            <template v-if="!values?.imageUrl?.length">
              <UiDropfile
                :aria-invalid="!!errors?.length"
                @dropped="
                  async (files) => {
                    const file = files?.[0];
                    if (!file) return;
                    try {
                      const compressedBlob = await compressImage(file);
                      const compressedFile = new File([compressedBlob], file.name, {
                        type: file.type,
                        lastModified: Date.now(),
                      });
                      handleChange(compressedFile);
                      setFieldValue('imageUrl', createImageUrl(compressedFile) as any);
                    }
                    catch (error) {
                      console.error('Image compression failed, using original', error);
                      handleChange(file);
                      setFieldValue('imageUrl', createImageUrl(file) as any);
                    }
                  }
                "
              />
            </template>
            <template v-else>
              <LazyUiImagePreview
                :image-url="thumbnailUrl"
                @on-delete-image="resetImage"
              />
            </template>
          </UiFormItem>
        </Field>

        <Field v-slot="{ componentField }" name="title">
          <UiFormItem label="Title" class="mb-6">
            <UiInput v-bind="componentField" placeholder="Enter title" />
          </UiFormItem>
        </Field>

        <Field v-slot="{ componentField }" name="tag">
          <UiFormItem label="Caption" class="mb-6">
            <UiInput v-bind="componentField" placeholder="Enter caption" />
          </UiFormItem>
        </Field>

        <Field v-slot="{ value, handleChange, errors, validate }" name="description">
          <UiFormItem label="Description" class="mb-6">
            <ClientOnly>
              <UiTiptap
                :value="value"
                :aria-invalid="!!errors?.length"
                @update:value="handleChange"
                @on-blur="validate()"
              />
              <template #fallback>
                <div class="h-40 w-full bg-gray-100 animate-pulse rounded-md" />
              </template>
            </ClientOnly>
          </UiFormItem>
        </Field>
      </div>
    </UiCardContent>

    <UiCardFooter class="!py-4 flex justify-end gap-4">
      <UiButton
        type="button"
        variant="outline"
        @click="() => router.back()"
      >
        <Icon name="heroicons:x-mark-20-solid" class="mr-2" />
        Cancel
      </UiButton>
      <UiButton
        type="submit"
        :disabled="isSubmitting"
      >
        <Icon
          v-if="!isSubmitting"
          name="heroicons:archive-box"
          class="mr-2"
        />
        <Icon
          v-else
          name="lucide:loader-2"
          class="mr-2 animate-spin"
        />
        {{ isSubmitting ? "Saving..." : "Save Journey" }}
      </UiButton>
    </UiCardFooter>
  </form>
</template>
