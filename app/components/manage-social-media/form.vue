<script setup lang="ts">
import { socialMediaFetchData } from "~/repository/modules/social-media";

import { SocialMediaSchema } from "./schema";

const props = defineProps<{
  isLoading?: boolean;
  isError?: boolean;
  defaultValue?: SocialMediaResponse;
}>();

const { handleSubmit, setValues } = useForm({
  validationSchema: toTypedSchema(SocialMediaSchema),
  initialValues: {
    facebook: props?.defaultValue?.facebook?.link ?? "",
    instagram: props?.defaultValue?.instagram?.link ?? "",
    tiktok: props?.defaultValue?.tiktok?.link ?? "",
    twitter: props?.defaultValue?.twitter?.link ?? "",
    youtube: props?.defaultValue?.youtube?.link ?? "",
    whatsapp: props?.defaultValue?.whatsapp?.link ?? "",
  },
});
const isSubmitting = ref(false);
const isViewMode = ref(true);

watch(props, () => {
  setValues({
    facebook: props?.defaultValue?.facebook?.link ?? "",
    instagram: props?.defaultValue?.instagram?.link ?? "",
    tiktok: props?.defaultValue?.tiktok?.link ?? "",
    twitter: props?.defaultValue?.twitter?.link ?? "",
    youtube: props?.defaultValue?.youtube?.link ?? "",
    whatsapp: props?.defaultValue?.whatsapp?.link ?? "",
  });
});

const onSaveCategory = handleSubmit((values) => {
  isSubmitting.value = true;
  const payload = {
    facebook: {
      title: "facebook",
      link: values?.facebook,
    },
    instagram: {
      title: "instagram",
      link: values?.instagram,
    },
    tiktok: {
      title: "tiktok",
      link: values?.tiktok,
    },
    youtube: {
      title: "youtube",
      link: values?.youtube,
    },
    whatsapp: {
      title: "whatsapp",
      link: values?.whatsapp,
    },
  } as SocialMediaPayload;
  socialMediaFetchData()
    .update(payload)
    .then(() => {
      useSonner.success("Succes save data.");
      isViewMode.value = true;
    })
    .catch((err) => {
      useSonner.error((err as any)?.response?._data?.message || "Error.");
    })
    .finally(() => {
      isSubmitting.value = false;
    });
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
          <Field
            v-slot="{ componentField }"
            name="facebook"
            class="hidden"
          >
            <UiFormItem label="Facebook URL" class="mb-6 hidden">
              <UiInput
                v-bind="componentField"
                placeholder="Enter facebook URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
          <Field v-slot="{ componentField }" name="instagram">
            <UiFormItem label="Instagram URL 1" class="mb-6">
              <UiInput
                v-bind="componentField"
                placeholder="Enter instagram URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
          <Field v-slot="{ componentField }" name="instagram">
            <UiFormItem label="Instagram URL 2" class="mb-6">
              <UiInput
                v-bind="componentField"
                placeholder="Enter instagram URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
          <Field v-slot="{ componentField }" name="instagram">
            <UiFormItem label="Instagram URL 3" class="mb-6">
              <UiInput
                v-bind="componentField"
                placeholder="Enter instagram URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
          <Field v-slot="{ componentField }" name="tiktok">
            <UiFormItem label="Tiktok URL" class="mb-6">
              <UiInput
                v-bind="componentField"
                placeholder="Enter tiktok URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
          <Field
            v-slot="{ componentField }"
            name="youtube"
            class="hidden"
          >
            <UiFormItem label="Youtube URL" class="mb-6 hidden">
              <UiInput
                v-bind="componentField"
                placeholder="Enter youtube URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
          <Field v-slot="{ componentField }" name="whatsapp">
            <UiFormItem label="Whatsapp URL" class="mb-6">
              <UiInput
                v-bind="componentField"
                placeholder="Enter whatsapp URL"
                class="disabled:bg-black/10 disabled:cursor-not-allowed"
                :disabled="isViewMode"
              />
            </UiFormItem>
          </Field>
        </div>
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
