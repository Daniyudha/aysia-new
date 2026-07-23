<script lang="ts" setup>
import { journeyDetailFetcher } from "~/repository/modules/journey-detail";

const props = defineProps<{
  isLoading?: boolean;
  isError?: boolean;
  items?: JourneyDetailsResponse[];
}>();
const emits = defineEmits<{
  (e: "onRefreshData"): void;
}>();

const { $confirmDelete } = useNuxtApp();
const { handleShowModal, handleCloseModal, showModal, selectedItem } = useModalForm<JourneyDetailsResponse>();

// --- Drag state ---
const localItems = ref<JourneyDetailsResponse[]>([]);
const draggedIndex = ref<number | null>(null);
const dragOverIndex = ref<number | null>(null);
const isSorting = ref(false);

watch(() => props.items, (val) => {
  localItems.value = val ? [...val] : [];
}, { immediate: true });

function onDragStart(index: number, e: DragEvent) {
  draggedIndex.value = index;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(index));
  }
}

function onDragOver(index: number, e: DragEvent) {
  e.preventDefault();
  if (draggedIndex.value === null) return;
  dragOverIndex.value = index;
}

function onDragLeave() {
  dragOverIndex.value = null;
}

function onDrop(index: number, e: DragEvent) {
  e.preventDefault();
  if (draggedIndex.value === null || draggedIndex.value === index) {
    draggedIndex.value = null;
    dragOverIndex.value = null;
    return;
  }

  // Reorder using drag-and-drop positions
  const idxFrom = draggedIndex.value;
  const idxTo = index;
  const items = [...localItems.value];
  const [moved] = items.splice(idxFrom, 1);
  if (!moved) return;
  items.splice(idxTo, 0, moved);
  localItems.value = items;

  saveSortOrder(items);
  draggedIndex.value = null;
  dragOverIndex.value = null;
}

function onDragEnd() {
  draggedIndex.value = null;
  dragOverIndex.value = null;
}

const route = useRoute();

async function saveSortOrder(items: JourneyDetailsResponse[]) {
  isSorting.value = true;
  try {
    const sortedIds = items.map(item => item.id);
    const journeyId = route.params?.galleryId as string || items[0]?.journey_id || "";
    console.debug('[save sort] sending ids:', sortedIds, 'journey_id:', journeyId);
    // API requires journey_id along with sorted ids
    const result = await journeyDetailFetcher().sort({ ids: sortedIds, journey_id: journeyId });
    console.debug('[save sort] success:', result);
  } catch (err: any) {
    console.error("Failed to save sort order:", err);
  } finally {
    isSorting.value = false;
  }
}

function getRowClass(index: number) {
  if (dragOverIndex.value === index && draggedIndex.value !== null && draggedIndex.value !== dragOverIndex.value) {
    return 'border-t-2 border-dashboard-warning-50 bg-dashboard-warning-50/5';
  }
  if (draggedIndex.value === index) {
    return 'opacity-40';
  }
  return '';
}

async function handleDeleteDetailJourney(title: string, id: string) {
  if (!id?.length) return;
  const isDeleted = await $confirmDelete(title, async () => {
    return journeyDetailFetcher().deleteById(id);
  });
  if (isDeleted) {
    emits("onRefreshData");
  }
}

function getEmbedUrl(url: string): string {
  const idMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
  const id = idMatch ? idMatch[1] : "";
  return id ? `https://www.youtube.com/embed/${id}?autoplay=0&mute=1&playsinline=1&loop=1&playlist=${id}` : url;
}
</script>

<template>
  <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
    <h3 class="font-semibold text-lg text-dashboard-accent-50">
      Portfolio Detail Item
    </h3>
    <div class="flex flex-col md:flex-row justify-end gap-4 items-center">
      <span v-if="isSorting" class="text-xs text-dashboard-warning-50 animate-pulse">Saving order...</span>
      <button
        type="button"
        class="text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center"
        @click="() => handleShowModal({ type: 'ADD' })"
      >
        + Add
      </button>
    </div>
  </UiCardHeader>
  <UiCardContent class="!px-0 !pb-0">
    <div class="p-3 text-xs text-dashboard-neutral-200 italic flex items-center gap-2 border-b border-dashboard-neutral-100/50">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 9l7-4 7 4M5 15l7 4 7-4"/>
      </svg>
      Drag the grip handle (&#x2630;) to reorder
    </div>
    <UiTable
      :data="localItems"
      :is-error="props?.isError"
      :is-loading="props?.isLoading"
      :header-count="5"
    >
      <template #head>
        <UiTableRow>
          <UiTableHead class="w-10"></UiTableHead>
          <UiTableHead>No.</UiTableHead>
          <UiTableHead>Image</UiTableHead>
          <UiTableHead>Action</UiTableHead>
          <UiTableHead />
        </UiTableRow>
      </template>
      <template #body>
        <template v-for="(item, index) in localItems" :key="item.id">
          <UiTableRow
            class="last:[&>td]:!border-0 transition-all duration-200"
            :class="getRowClass(index)"
            :draggable="true"
            @dragstart="onDragStart(index, $event)"
            @dragover="onDragOver(index, $event)"
            @dragleave="onDragLeave"
            @drop="onDrop(index, $event)"
            @dragend="onDragEnd"
          >
            <UiTableData class="w-10 cursor-grab active:cursor-grabbing">
              <span class="text-dashboard-neutral-300 text-lg select-none">☰</span>
            </UiTableData>
            <UiTableData>{{ index + 1 }}</UiTableData>
            <UiTableData>
              <div class="w-24 h-24 flex items-center justify-center">
                <template v-if="item.is_video && item.video_url">
                  <iframe
                    v-if="/youtu\.be|youtube\.com/.test(item.video_url)"
                    :src="getEmbedUrl(item.video_url)"
                    frameborder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    class="w-full h-full rounded-md"
                  />
                  <video
                    v-else-if="/\.(mp4|webm|ogg)$/i.test(item.video_url)"
                    :src="item.video_url"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="metadata"
                    class="w-full h-full object-cover rounded-md"
                  />
                </template>
                <template v-else-if="item.thumbnail_url">
                  <img
                    :src="`${useRuntimeConfig().public.apiBase}${item.thumbnail_url}`"
                    alt="Thumbnail"
                    class="w-full h-full object-cover rounded-md"
                  >
                </template>
                <template v-else>
                  <span class="text-gray-400 italic">No media</span>
                </template>
              </div>
            </UiTableData>
            <UiTableData>
              <div class="flex gap-2">
                <button
                  type="button"
                  class="table-action-button group"
                  @click="handleShowModal({ type: 'UPDATE', selectedItem: item })"
                >
                  <Icon name="lucide:pencil" class="opacity-70 group-hover:text-dashboard-info-50" />
                </button>
                <button type="button" class="group table-action-button" @click.stop>
                  <Icon
                    name="lucide:trash-2"
                    class="opacity-70 group-hover:text-dashboard-danger-50"
                    @click="() => handleDeleteDetailJourney(item?.title, item?.id)"
                  />
                </button>
              </div>
            </UiTableData>
          </UiTableRow>
        </template>
      </template>
    </UiTable>
  </UiCardContent>
  <ClientOnly>
    <UiDialog v-model:open="showModal">
      <UiDialogContent
        class="max-w-[600px] border-dashboard-neutral-100/60 shadow-none bg-dashboard-neutral-50 max-h-[80vh]"
        :title="selectedItem ? 'Update Journey Detail' : 'Create New Journey Detail'"
        description="Fill the form below to create or update a journey detail."
      >
        <template #content>
          <ManageGalleryDetailForm
            :mode="selectedItem ? 'update' : 'create'"
            :default-value="selectedItem"
            @on-refresh-data="$emit('onRefreshData')"
            @on-close-modal="() => handleCloseModal()"
          />
        </template>
      </UiDialogContent>
    </UiDialog>
  </ClientOnly>
</template>