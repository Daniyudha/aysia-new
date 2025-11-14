<script setup lang="ts">
import { journeyDetailFetcher } from '~/repository/modules/journey-detail';
import { journeyFetcher } from '~/repository/modules/journey';
import { categoryFetcher } from '~/repository/modules/category';
import { createObjectURL } from '~/utils/file-upload';

import { JourneyGalleryDetailSchema } from './schema';

const props = defineProps<{
  mode: 'create' | 'update';
  defaultValue?: JourneyDetailsResponse | any;
  isHeader?: boolean | undefined;
}>();

const emits = defineEmits<{
  (e: 'onRefreshData'): void;
  (e: 'onCloseModal'): void;
}>();

const isSubmitting = ref(false);
const route = useRoute();

// Fetch categories for dropdown
const { data: categories } = await useAsyncData(
  'categories',
  async () => {
    const response = await categoryFetcher().get({ page: 1, limit: 100 });
    return response?.data || [];
  },
  { server: false }
);

const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: toTypedSchema(JourneyGalleryDetailSchema),
  initialValues: {
    mode: props?.mode || 'create',
    type: props?.defaultValue?.is_video === true ? 'video' : 'image',
    title: props?.defaultValue?.title || '-',
    description: props?.defaultValue?.description || '-',
    gallery_category_id: props?.defaultValue?.gallery_category_id || '',
    thumbnail: props?.isHeader === true ? props?.defaultValue?.thumbnail || '' : props?.defaultValue?.thumbnail_url || '',
    thumbnailUrl: props?.isHeader === true ? props?.defaultValue?.thumbnail || '' : props?.defaultValue?.thumbnail_url || '',
    videoUrl: props?.defaultValue?.video_url || '',
  },
});

const thumbnailUrl = computed(() => {
  try {
    // Handle thumbnail URL based on isHeader condition and mode
    let url = '';
    
    if (props?.isHeader === true) {
      // For header images, use thumbnail value
      url = values?.thumbnailUrl || props?.defaultValue?.thumbnail || '';
    } else {
      // For journey details, use thumbnailUrl or thumbnail_url
      url = values?.thumbnailUrl || props?.defaultValue?.thumbnail_url || '';
    }
    
    if (!url) {
      return '';
    }
    
    // If it's a blob URL (new upload preview) or 'multiple' for multiple files, return as-is
    if (url.startsWith('blob:') || url === 'multiple') {
      return url;
    }
    
    // For server URLs, prepend the API base URL
    return useRuntimeConfig().public.apiBase + url;
  } catch {
    return '';
  }
});

function updateJourneyDetail(id: string, payload: JourneyDetailsPayload) {
  journeyDetailFetcher()
    .updateById(id, payload)
    .then(() => {
      useSonner.success('Success to update journey detail');
      // Force refresh data to update preview
      emits('onRefreshData');
      // Close modal after a brief delay to ensure refresh happens
      setTimeout(() => {
        emits('onCloseModal');
      }, 500);
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || 'Fail to save data.'
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

function updateJourney(id: string, payload: any) {
  journeyFetcher()
    .updateById(id, payload)
    .then(() => {
      useSonner.success('Success to update journey');
      emits('onRefreshData');
      emits('onCloseModal');
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || 'Fail to save data.'
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

function createJourneyDetail(payload: JourneyDetailsPayload) {
  journeyDetailFetcher()
    .create(payload)
    .then(() => {
      useSonner.success('Success to create journey detail');
      emits('onRefreshData');
      emits('onCloseModal');
    })
    .catch((err) => {
      useSonner.error(
        (err as any)?.response?._data?.message || 'Fail to save data.'
      );
    })
    .finally(() => {
      isSubmitting.value = false;
    });
}

function createJourneyDetailNoEmit(payload: JourneyDetailsPayload): Promise<void> {
  return journeyDetailFetcher()
    .create(payload)
    .then(() => {
      // No emits here - we'll handle them in the parent function
    })
    .catch((err) => {
      throw err; // Re-throw to handle in Promise.all
    });
}

const handleSaveDetailJourney = handleSubmit((values) => {
  const galleryId = route.params?.galleryId as string;
  if (!galleryId?.length) {
    return;
  }
  isSubmitting.value = true;
  
  if (props?.isHeader) {
    // Handle journey (gallery) update with category
    const payload: any = {
      title: values?.title,
      description: values?.description,
      gallery_category_id: values?.gallery_category_id,
    };

    // Include thumbnail if a new file is provided (File instance) or if it's different from original
    const hasNewThumbnail = values?.thumbnail &&
                           (values.thumbnail instanceof File ||
                            values.thumbnail !== props?.defaultValue?.thumbnail);
    
    if (hasNewThumbnail) {
      payload.thumbnail = values?.thumbnail;
    }

    // For header updates, we use the journeyFetcher
    if (props?.defaultValue?.id) {
      updateJourney(props?.defaultValue?.id, payload);
    } else {
      // This shouldn't happen for header updates, but handle gracefully
      useSonner.error('Cannot create gallery from this form');
      isSubmitting.value = false;
    }
  } else {
    // Handle journey detail update (multiple files)
    const thumbnailFiles = Array.isArray(values?.thumbnail) ? values.thumbnail : [values?.thumbnail].filter(Boolean);
    
    // Create multiple journey details for each file
    if (Array.isArray(values?.thumbnail) && values.thumbnail.length > 0) {
      // Create a journey detail for each file using the no-emit version
      const createPromises = thumbnailFiles.map(file => {
        const payload = {
          journey_id: galleryId,
          is_video: values?.type === 'video',
          title: values?.title,
          description: values?.description,
          content: values?.description,
          thumbnail: file,
          video_url: values?.videoUrl,
        } as JourneyDetailsPayload;
        
        return createJourneyDetailNoEmit(payload);
      });
      
      // Wait for all uploads to complete
      Promise.all(createPromises)
        .then(() => {
          useSonner.success(`Successfully uploaded ${thumbnailFiles.length} files`);
          emits('onRefreshData');
          emits('onCloseModal');
        })
        .catch((err) => {
          useSonner.error(
            (err as any)?.response?._data?.message || 'Fail to save some files.'
          );
        })
        .finally(() => {
          isSubmitting.value = false;
        });
    } else {
      // Handle single file upload (backward compatibility)
      const payload: any = {
        journey_id: galleryId,
        is_video: values?.type === 'video',
        title: values?.title,
        description: values?.description,
        content: values?.description,
        video_url: values?.videoUrl,
      };

      // Include thumbnail if a new file is provided (File instance) or if it's different from original
      const hasNewThumbnail = thumbnailFiles[0] &&
                             (thumbnailFiles[0] instanceof File ||
                              thumbnailFiles[0] !== props?.defaultValue?.thumbnail);
      
      if (hasNewThumbnail) {
        payload.thumbnail = thumbnailFiles[0];
      }

      props?.defaultValue?.id
        ? updateJourneyDetail(props?.defaultValue?.id, payload)
        : createJourneyDetail(payload);
    }
  }
});

function resetImage() {
  if (!setFieldValue) {
    return;
  }
  try {
    setFieldValue('thumbnail', undefined);
    // Handle thumbnail URL based on isHeader condition
    if (props?.isHeader === true) {
      setFieldValue('thumbnailUrl', '');
    } else if (props?.isHeader === false || props?.isHeader === undefined) {
      setFieldValue('thumbnailUrl', '');
    }
  } catch (err) {
    console.warn('resetImage skipped:', err);
  }
}

const removeImage = (index: number) => {
  if (values?.thumbnail && Array.isArray(values.thumbnail)) {
    const updatedThumbnails = [...values.thumbnail];
    updatedThumbnails.splice(index, 1);
    setFieldValue('thumbnail', updatedThumbnails);
    
    if (updatedThumbnails.length === 0) {
      setFieldValue('thumbnailUrl', '');
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleSaveDetailJourney">
    <UiCardContent class="!p-0 border-b border-dashboard-neutral-100/50">
      <div class="w-full mx-auto">
        <template v-if="isHeader === false">
          <Field v-slot="{ componentField }" name="type">
            <UiFormItem label="Type" class="mb-6">
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-bind="componentField"
                    value="image"
                    class="w-4 h-4 text-primary-600"
                    :checked="values?.type === 'image'"
                  />
                  <span>Image</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-bind="componentField"
                    value="video"
                    class="w-4 h-4 text-primary-600"
                    :checked="values?.type === 'video'"
                  />
                  <span>Video</span>
                </label>
              </div>
            </UiFormItem>
          </Field>
        </template>
        <template v-if="values?.type === 'image' || isHeader === true">
          <Field v-slot="{ errors }" name="thumbnail">
            <UiFormItem :label="isHeader ? 'Thumbnail' : 'Thumbnails'" class="mb-6">
              <template v-if="!values?.thumbnailUrl?.length">
                <UiDropfile
                  :aria-invalid="!!errors?.length"
                  :multiple="!isHeader"
                  @dropped="
                    (files) => {
                      if (isHeader) {
                        // Single file for header
                        const file = files?.[0];
                        setFieldValue('thumbnail', file);
                        setFieldValue('thumbnailUrl', createObjectURL(file) || '');
                      } else {
                        // Multiple files for journey details
                        setFieldValue('thumbnail', files);
                        setFieldValue('thumbnailUrl', 'multiple');
                      }
                    }
                  "
                />
                <!-- Display only the error message text -->
                <div v-if="errors?.length" class="text-red-500 text-sm mt-2">
                  {{ errors[0] }}
                </div>
                <p v-if="!isHeader && !errors?.length" class="text-sm text-gray-500 mt-2">
                  You can upload multiple images at once
                </p>
              </template>
              <template v-else-if="values?.thumbnailUrl === 'multiple'">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div
                    v-for="(file, index) in values?.thumbnail"
                    :key="index"
                    class="relative group"
                  >
                    <img
                      :src="createObjectURL(file) || ''"
                      class="w-full h-32 object-cover rounded-md border"
                      :alt="`Uploaded image ${index + 1}`"
                    />
                    <button
                      type="button"
                      @click="removeImage(index)"
                      class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="heroicons:x-mark" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-2">
                  {{ values?.thumbnail?.length || 0 }} images selected
                </p>
              </template>
              <template v-else>
                <LazyUiImagePreview
                  :image-url="thumbnailUrl"
                  @on-delete-image="resetImage"
                />
              </template>
            </UiFormItem>
          </Field>
        </template>

        <template v-else-if="values?.type === 'video'">
          <Field v-slot="{ componentField }" name="videoUrl">
            <UiFormItem label="Video URL" class="mb-6">
              <UiInput
                v-bind="componentField"
                placeholder="www.youtube.com/examples"
              />
            </UiFormItem>
          </Field>
        </template>

        <template v-if="isHeader">
          <Field v-slot="{ componentField }" name="gallery_category_id">
            <UiFormItem label="Category" class="mb-6">
              <UiSelect v-bind="componentField">
                <UiSelectTrigger class="w-full">
                  <UiSelectValue placeholder="Select a category" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </UiFormItem>
          </Field>
          <Field v-slot="{ componentField }" name="title">
            <UiFormItem label="Title" class="mb-6">
              <UiInput v-bind="componentField" placeholder="Enter title" />
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
                @update:value="(value) => handleChange(value)"
                @on-blur="validate()"
              />
            </UiFormItem>
          </Field>
        </template>
      </div>
    </UiCardContent>
    <UiCardFooter class="!py-4 flex justify-end gap-4">
      <UiButton
        class="text-lg h-auto !px-5 py-3"
        type="button"
        variant="outline"
        @click="$emit('onCloseModal')"
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
        {{ isSubmitting ? 'Saving...' : 'Save' }}
      </UiButton>
    </UiCardFooter>
  </form>
</template>
