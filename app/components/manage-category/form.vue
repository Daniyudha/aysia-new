<script setup lang="ts">
import { categoryFetcher } from "~/repository/modules/category";

import { CategorySchema } from "./schema";

const props = defineProps<{ defaultValue?: GalleryCategoryResponse }>();
const emits = defineEmits<{
  (e: "onHideModal"): void;
  (e: "onRefresh"): void;
}>();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(CategorySchema),
  initialValues: {
    name: props?.defaultValue?.name ?? "",
  },
});
const isSubmitting = ref(false);

function createNewCategory(name: string) {
  categoryFetcher()
    .create({ name })
    .then(() => {
      emits("onHideModal");
      emits("onRefresh");
      useSonner.success("Success to create new category.");
      resetForm();
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message
        || "Fail to create new category.",
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

function updateCategoryById(id: string, name: string) {
  categoryFetcher()
    .updateById(id, { name })
    .then(() => {
      emits("onHideModal");
      emits("onRefresh");
      useSonner.success("Success to update category.");
      resetForm();
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || "Fail to update category.",
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

const onSaveCategory = handleSubmit((values) => {
  const isUpdateMode = !!props?.defaultValue?.id?.length;
  isSubmitting.value = true;
  isUpdateMode
    ? updateCategoryById(props?.defaultValue?.id, values?.name)
    : createNewCategory(values?.name);
});
</script>

<template>
  <UiCard
    as="form"
    class="shadow-none"
    @submit.prevent="onSaveCategory"
  >
    <UiCardContent class="!py-4 bg-transparent p-0">
      <div class="w-full mx-auto">
        <Field v-slot="{ componentField }" name="name">
          <UiFormItem label="Category Name" class="mb-6">
            <UiInput
              v-bind="componentField"
              placeholder="Enter category name"
            />
          </UiFormItem>
        </Field>
      </div>
    </UiCardContent>
    <UiCardFooter class="!p-0 flex justify-end gap-4">
      <UiButton
        class="text-lg h-auto !px-5 py-3"
        type="button"
        variant="outline"
        @click="$emit('onHideModal')"
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
  </UiCard>
</template>
