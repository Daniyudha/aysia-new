<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { toast as useSonner } from "vue-sonner";

import { useExploreImages } from "../../composables/useExploreImages";
import { createObjectURL, destroyObjectURL } from "../../utils/file-upload";

const { images, addImages, deleteImage, refresh, loading } = useExploreImages();
const { $confirmDelete } = useNuxtApp();

// --- Upload state ---
const thumbnail = ref<File[]>([]);
const thumbnailUrl = ref<string>("");
const isUploading = ref(false);

onMounted(() => {
  refresh();
});

function handleDrop(files: File[]) {
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const validFiles: File[] = [];
  files.forEach(file => {
    if (file.size > MAX_SIZE) {
      useSonner.error(`File "${file.name}" exceeds size limit (10MB)`);
    } else {
      validFiles.push(file);
    }
  });
  if (validFiles.length) {
    thumbnail.value.push(...validFiles);
    thumbnailUrl.value = "multiple";
  }
}

function removeImage(index: number) {
  const file = thumbnail.value[index];
  if (file) {
    const url = createObjectURL(file);
    if (url && typeof url === "string")
      destroyObjectURL(url);
  }
  thumbnail.value.splice(index, 1);
  if (thumbnail.value.length === 0) {
    thumbnailUrl.value = "";
  }
}

async function uploadFiles() {
  if (thumbnail.value.length === 0)
    return;
  isUploading.value = true;
  try {
    await addImages(thumbnail.value);
    useSonner.success("Images uploaded successfully");
    // Cleanup object URLs
    thumbnail.value.forEach((file) => {
      const url = createObjectURL(file);
      if (url && typeof url === "string")
        destroyObjectURL(url);
    });
    thumbnail.value = [];
    thumbnailUrl.value = "";
  }
  catch (err) {
    useSonner.error((err as any).message);
    console.error(err);
  }
  finally {
    isUploading.value = false;
  }
}

async function handleDelete(imageId: string, imageName?: string) {
  const isDeleted = await $confirmDelete(imageName || "this image", async () => {
    await deleteImage(imageId);
  });
  if (isDeleted) {
    // Optional: we could trigger a refresh but deleteImage already updates the list
  }
}
</script>

<template>
  <UiCard class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50">
    <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
      <h3 class="font-semibold text-lg text-dashboard-accent-50">
        Manage Gallery Images
      </h3>
    </UiCardHeader>
    <UiCardContent class="!py-4 border-b border-dashboard-neutral-100/50">
      <!-- Upload section -->
      <div class="mb-8">
        <h4 class="font-medium text-dashboard-accent-50 mb-4">
          Upload New Images
        </h4>
        <div class="mb-6">
          <label class="text-sm font-medium text-dashboard-accent-50 block mb-2">Thumbnails</label>
          <template v-if="!thumbnailUrl?.length">
            <UiDropfile multiple accept="image/*" @dropped="handleDrop" />
            <p class="text-sm text-gray-500 mt-2">
              You can upload multiple images at once
            </p>
            <p class="text-sm text-gray-500 mt-1">
              Maximum file size: 10MB
            </p>
          </template>
          <template v-else-if="thumbnailUrl === 'multiple'">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="(file, index) in thumbnail" :key="index" class="relative group overflow-hidden rounded-md">
                <!-- IMAGE -->
                <img :src="createObjectURL(file) || ''"
                  class="w-full h-60 object-cover border transition duration-500 group-hover:scale-105"
                  :alt="`Uploaded image ${Number(index) + 1}`" />

                <!-- OVERLAY -->
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <!-- REMOVE BUTTON -->
                  <button type="button"
                    class="text-white rounded-full w-16 h-16 flex items-center justify-center transform scale-75 group-hover:scale-100 transition"
                    @click="removeImage(Number(index))">
                    <span class="iconify i-lucide:trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-2">
              {{ thumbnail?.length || 0 }} images selected
            </p>
          </template>
        </div>
        <UiButton :disabled="thumbnail.length === 0 || isUploading" class="self-start" @click="uploadFiles">
          {{ isUploading ? 'Uploading...' : 'Upload Images' }}
        </UiButton>
      </div>

      <!-- Existing images -->
      <div>
        <h4 class="font-medium text-dashboard-accent-50 mb-4">
          Existing Images ({{ images.length }})
        </h4>
        <div v-if="loading" class="text-center py-8">
          <p class="text-muted-foreground">Loading images...</p>
        </div>
        <template v-else>
          <div v-if="images.length === 0">
            <p class="text-muted-foreground">
              No images uploaded yet.
            </p>
          </div>
          <div v-else class="grid grid-cols-4 gap-4">
            <div v-for="image in images" :key="image.id" class="relative group overflow-hidden rounded-lg">
              <!-- IMAGE -->
              <img :src="image.url" :alt="image.name"
                class="w-full h-60 object-cover transition duration-500 group-hover:scale-105" />

              <!-- OVERLAY -->
              <div
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <!-- DELETE BUTTON -->
                <button type="button"
                  class="text-white rounded-full w-16 h-16 flex items-center justify-center text-xl transform scale-75 group-hover:scale-100 transition"
                  @click="handleDelete(image.id, image.name)">
                  <span class="iconify i-lucide:trash"></span>
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </UiCardContent>
  </UiCard>
</template>
