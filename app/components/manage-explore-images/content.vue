<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { toast as useSonner } from "vue-sonner";

import { useExploreImages } from "../../composables/useExploreImages";
import { exploreImagesFetcher } from "../../repository/modules/explore-images";
import { createObjectURL, destroyObjectURL } from "../../utils/file-upload";

const { images, addImages, deleteImage, refresh, loading } = useExploreImages();
const { $confirmDelete } = useNuxtApp();

// --- Upload state ---
const thumbnail = ref<File[]>([]);
const thumbnailUrl = ref<string>("");
const isUploading = ref(false);

// --- Edit title state ---
const editingTitle = ref<Record<string, string>>({});
const savingTitle = ref<Record<string, boolean>>({});

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
  if (thumbnail.value.length === 0) return;
  isUploading.value = true;
  try {
    await addImages(thumbnail.value);
    useSonner.success("Images uploaded successfully");
    thumbnail.value.forEach((file) => {
      const url = createObjectURL(file);
      if (url && typeof url === "string") destroyObjectURL(url);
    });
    thumbnail.value = [];
    thumbnailUrl.value = "";
  } catch (err) {
    useSonner.error((err as any).message);
    console.error(err);
  } finally {
    isUploading.value = false;
  }
}

async function handleDelete(imageId: string, imageName?: string) {
  const isDeleted = await $confirmDelete(imageName || "this image", async () => {
    await deleteImage(imageId);
  });
}

async function handleSaveTitle(imageId: string) {
  const title = editingTitle.value[imageId]?.trim();
  if (!title) {
    useSonner.error("Title cannot be empty");
    return;
  }
  savingTitle.value[imageId] = true;
  try {
    await exploreImagesFetcher().updateTitleById(imageId, { title });
    useSonner.success("Title updated successfully");
    // Update local image title
    const img = images.value.find(i => i.id === imageId);
    if (img) img.title = title;
  } catch (err: any) {
    useSonner.error(err?.response?._data?.message || "Failed to update title");
  } finally {
    savingTitle.value[imageId] = false;
  }
}

function initEditTitle(imageId: string, currentTitle: string) {
  editingTitle.value[imageId] = currentTitle || "";
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
                <img :src="createObjectURL(file) || ''"
                  class="w-full h-60 object-cover border transition duration-500 group-hover:scale-105"
                  :alt="`Uploaded image ${Number(index) + 1}`" />
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button type="button"
                    class="text-white rounded-full w-16 h-16 flex items-center justify-center transform scale-75 group-hover:scale-100 transition"
                    @click="removeImage(Number(index))">
                    <!-- Trash SVG icon -->
                    <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
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
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="image in images" :key="image.id" class="border border-dashboard-neutral-100/50 rounded-lg overflow-hidden bg-white">
              <!-- IMAGE -->
              <div class="relative group overflow-hidden">
                <img :src="image.url" :alt="image.name"
                  class="w-full h-48 object-cover transition duration-500 group-hover:scale-105" />
                <!-- Overlay with delete button -->
                <div
                  class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button type="button"
                    class="text-white bg-white/30 hover:bg-white/50 rounded-full w-12 h-12 flex items-center justify-center transition transform scale-75 group-hover:scale-100"
                    @click="handleDelete(image.id, image.name)">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- FORM TITLE CARD -->
              <div class="p-3 space-y-2">
                <div>
                  <label class="text-xs font-medium text-dashboard-accent-50 block mb-1">Title</label>
                  <input
                    type="text"
                    class="form-input h-10 w-full ring-dashboard-neutral-100 ring-1 pl-4 pr-4 py-2 rounded-md focus:ring-2 focus:ring-dashboard-warning-50 outline-none focus:border-0 transition-all text-app-secondary focus:shadow-dashboard-warning-50 focus-visible:ring-dashboard-warning-50 text-sm"
                    placeholder="Enter title"
                    :value="editingTitle[image.id] ?? image.title ?? ''"
                    @input="editingTitle[image.id] = ($event.target as HTMLInputElement).value"
                    @focus="initEditTitle(image.id, image.title ?? '')"
                  />
                </div>
                <button
                  class="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-dashboard-primary-50 bg-dashboard-accent-50 hover:bg-dashboard-accent-50/90 h-9 px-3 gap-2 w-full"
                  type="button"
                  :disabled="savingTitle[image.id]"
                  @click="handleSaveTitle(image.id)"
                >
                  {{ savingTitle[image.id] ? 'Saving...' : 'Save' }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </UiCardContent>
  </UiCard>
</template>