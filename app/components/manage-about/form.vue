<script setup lang="ts">
import { pagesAboutFetchData } from "~/repository/modules/pages-about";

import { ManageAboutSchema } from "./schema";

const props = defineProps<{ defaultValue?: PageAboutResponse }>();

const { handleSubmit, setValues, values, setFieldValue } = useForm({
  validationSchema: toTypedSchema(ManageAboutSchema),
  initialValues: {
    title: props?.defaultValue?.title ?? "",
    description: props?.defaultValue?.description ?? "",
    thumbnailUrl: props?.defaultValue?.thumbnail ?? "",
    thumbnail: null,
  },
});
const isSubmitting = ref(false);
const isViewMode = ref(true);

watch(props, () => {
  setValues({
    title: props?.defaultValue?.title ?? "",
    description: props?.defaultValue?.description ?? "",
    thumbnailUrl: props?.defaultValue?.thumbnail ?? "",
    thumbnail: null,
  });
});

const thumbnailUrl = computed(() => {
  if (!values?.thumbnailUrl?.length)
    return "";
  if (values?.thumbnailUrl?.startsWith("blob")) {
    return values?.thumbnailUrl;
  }
  return useRuntimeConfig().public.apiBase + values?.thumbnailUrl;
});

function resetImage() {
  setFieldValue("thumbnail", undefined);
  setFieldValue("thumbnailUrl", "");
}

const onSaveManageAbout = handleSubmit((values) => {
  isSubmitting.value = true;
  pagesAboutFetchData()
    .create(values)
    .then(() => {
      useSonner.success("Success to save data.");
      isViewMode.value = true;
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || "Fail to save data.",
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
});

function createImageUrl(file: any) {
  return createObjectURL(file);
}
</script>

<template>
  <UiCard
    as="form"
    class="shadow-none w-full"
    @submit.prevent="onSaveManageAbout"
  >
    <UiCardContent class="!py-4 bg-transparent p-0">
      <div class="w-full mx-auto">
        <Field v-slot="{ handleChange, errors }" name="thumbnail">
          <UiFormItem label="Image" class="mb-6">
            <template v-if="!values?.thumbnailUrl?.length">
              <UiDropfile
                :aria-invalid="!!errors?.length"
                :disabled="isViewMode"
                @dropped="
                  (value) => {
                    const file = value?.[0];
                    handleChange(value?.[0]);
                    setFieldValue('thumbnailUrl', createImageUrl(file) as any);
                  }
                "
              />
            </template>
            <template v-else>
              <LazyUiImagePreview
                :image-url="thumbnailUrl"
                :disabled="isViewMode"
                @on-delete-image="resetImage"
              />
            </template>
          </UiFormItem>
        </Field>
        <Field v-slot="{ componentField }" name="title">
          <UiFormItem label="Title" class="mb-6">
            <UiInput
              v-bind="componentField"
              placeholder="Enter title"
              class="disabled:bg-black/10 disabled:cursor-not-allowed"
              :disabled="isViewMode"
            />
          </UiFormItem>
        </Field>
        <Field
          v-slot="{ value, handleChange, errors, validate }"
          name="description"
        >
          <UiFormItem label="Description" class="mb-6">
            <UiTiptap
              :value="value"
              :aria-invalid="!!errors?.length ? true : undefined"
              :disabled="isViewMode"
              @update:value="(value) => handleChange(value)"
              @on-blur="validate()"
            />
          </UiFormItem>
        </Field>
      </div>
    </UiCardContent>
    <UiCardFooter class="!p-0 flex justify-end gap-4">
      <UiButton
        v-if="isViewMode"
        type="button"
        class="text-lg h-auto !px-5 py-3"
        @click="isViewMode = false"
      >
        Update
      </UiButton>
      <template v-else>
        <UiButton
          type="button"
          variant="destructive"
          class="text-lg h-auto !px-5 py-3"
          @click="isViewMode = true"
        >
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
      </template>
    </UiCardFooter>
  </UiCard>
</template>
