<script setup lang="ts">
import { journeyFetcher } from "~/repository/modules/journey";

import type { JourneySchemaFormType } from "./schema";

import { JourneySchema } from "./schema";

const props = defineProps<{
  defaultValue?: JourneyResponse;
  mode: "create" | "update";
}>();

const isSubmitting = ref(false);
const router = useRouter();
const { handleSubmit, resetForm, setFieldValue, values, setValues } = useForm({
  validationSchema: toTypedSchema(JourneySchema),
  initialValues: {
    title: props?.defaultValue?.title ?? "",
    description: props?.defaultValue?.description ?? "",
    tag: props?.defaultValue?.tag ?? "",
    gallery_category_id: props?.defaultValue?.gallery_category_id ?? "",
    gallery_category_name: props?.defaultValue?.gallery_category_name ?? "",
    image: undefined,
    imageUrl: props?.defaultValue?.thumbnail ?? "",
    mode: props?.mode || "create",
  },
});

watch(props, () => {
  if (props?.defaultValue) {
    setValues({
      title: props?.defaultValue?.title ?? "",
      description: props?.defaultValue?.description ?? "",
      tag: props?.defaultValue?.tag ?? "",
      imageUrl: props?.defaultValue?.thumbnail ?? "",
      gallery_category_id: props?.defaultValue?.gallery_category_id ?? "",
      gallery_category_name: props?.defaultValue?.gallery_category_name ?? "",
      image: undefined,
      mode: props?.mode || "create",
    });
  }
});

const thumbnailUrl = computed(() => {
  if (!values?.imageUrl?.length)
    return "";
  if (values?.imageUrl?.startsWith("blob")) {
    return values?.imageUrl;
  }
  return useRuntimeConfig().public.apiBase + values?.imageUrl;
});

function resetImage() {
  setFieldValue("image", undefined);
  setFieldValue("imageUrl", "");
}

function createNewExplore(values: JourneySchemaFormType) {
  journeyFetcher()
    .create({
      title: values?.title,
      description: values?.description,
      tag: values?.tag,
      gallery_category_id: values?.gallery_category_id,
      thumbnail: values?.image,
    })
    .then(() => {
      useSonner.success("Success to create new explore");
      resetForm();
      router.push("/dashboard/explore/");
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || "Fail to save data.",
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

function updateExplore(id: string, values: JourneySchemaFormType) {
  journeyFetcher()
    .updateById(id, {
      title: values?.title,
      description: values?.description,
      tag: values?.tag,
      gallery_category_id: values?.gallery_category_id,
      thumbnail: values?.image,
    })
    .then(() => {
      useSonner.success("Success to update explore");
      router.push("/dashboard/explore/");
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || (err as any)?.response?._data?.error || "Fail to save data.",
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

const onSaveExplore = handleSubmit((values) => {
  isSubmitting.value = true;
  props?.defaultValue?.id?.length
    ? updateExplore(props.defaultValue.id, values)
    : createNewExplore(values as any);
});

function createImageUrl(file: any) {
  return createObjectURL(file);
}
</script>

<template>
  <form @submit.prevent="onSaveExplore">
    <UiCardContent class="!py-4 border-b border-dashboard-neutral-100/50">
      <div class="w-full mx-auto">
        <Field v-slot="{ handleChange, errors }" name="image">
          <UiFormItem label="Image" class="mb-6">
            <template v-if="!values?.imageUrl?.length">
              <UiDropfile
                :aria-invalid="!!errors?.length"
                @dropped="
                  (value) => {
                    const file = value?.[0];
                    handleChange(value?.[0]);
                    setFieldValue('imageUrl', createImageUrl(file) as any);
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
        <Field v-slot="{ errorMessage }" name="gallery_category_id">
          <UiFormItem label="Category" class="mb-6">
            <UiCategorySelect
            :default-value="{
              value: values.gallery_category_id ?? '',
              label: values.gallery_category_name ?? '',
            }"
              :is-error="!!errorMessage"
              @on-select-option="(value) => {
                setFieldValue('gallery_category_id', value?.value);
                setFieldValue('gallery_category_name', value?.label);
              }"
            />
          </UiFormItem>
        </Field>
        <Field v-slot="{ componentField }" name="title">
          <UiFormItem label="Title" class="mb-6">
            <UiInput v-bind="componentField" placeholder="Enter title" />
          </UiFormItem>
        </Field>
        <Field v-slot="{ componentField }" name="tag">
          <UiFormItem label="Subtitle" class="mb-6">
            <UiInput v-bind="componentField" placeholder="Enter Subtitle" />
          </UiFormItem>
        </Field>
        <Field
          v-slot="{ value, handleChange, errors, validate }"
          name="description"
        >
          <UiFormItem label="Content" class="mb-6">
            <UiTiptap
              :value="value"
              :aria-invalid="!!errors?.length ? true : undefined"
              @update:value="(value) => handleChange(value)"
              @on-blur="validate()"
            />
          </UiFormItem>
        </Field>
      </div>
    </UiCardContent>
    <UiCardFooter class="!py-4 flex justify-end gap-4">
      <UiButton
        class="text-lg h-auto !px-5 py-3"
        type="button"
        variant="outline"
        @click="() => $router.back()"
      >
        <Icon name="heroicons:x-mark-20-solid" />
        Cancel
      </UiButton>
      <UiButton
        type="submit"
        class="text-lg h-auto !px-5 py-3"
        :disabled="isSubmitting"
      >
        <Icon name="heroicons:archive-box" />
        {{ isSubmitting ? "Saving..." : "Save" }}
      </UiButton>
    </UiCardFooter>
  </form>
</template>