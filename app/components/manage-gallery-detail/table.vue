<script lang="ts" setup>
import { journeyDetailFetcher } from "~/repository/modules/journey-detail";

defineProps<{
  isLoading?: boolean;
  isError?: boolean;
  items?: JourneyDetailsResponse[];
}>();
const emits = defineEmits<{
  (e: "onRefreshData"): void;
}>();

const { $confirmDelete } = useNuxtApp();
const { handleShowModal, handleCloseModal, showModal, selectedItem } = useModalForm<JourneyDetailsResponse>();

async function handleDeleteDetailJourney(title: string, id: string) {
  if (!id?.length)
    return;
  const isDeleted = await $confirmDelete(title, async () => {
    return journeyDetailFetcher().deleteById(id);
  });
  if (isDeleted) {
    emits("onRefreshData");
  }
}

function getEmbedUrl(url: string): string {
  const idMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/,
  );
  const id = idMatch ? idMatch[1] : "";
  return id
    ? `https://www.youtube.com/embed/${id}?autoplay=0&mute=1&playsinline=1&loop=1&playlist=${id}`
    : url;
}
</script>

<template>
  <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
    <h3 class="font-semibold text-lg text-dashboard-accent-50">
      Portfolio Detail Item
    </h3>
    <div class="flex flex-col md:flex-row justify-end gap-4 items-center">
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
    <UiTable
      :data="$props.items ?? []"
      :is-error="$props?.isError"
      :is-loading="$props?.isLoading"
      :header-count="4"
    >
      <template #head>
        <UiTableRow>
          <UiTableHead>No.</UiTableHead>
          <UiTableHead>Image</UiTableHead>
          <UiTableHead>Action</UiTableHead>
          <UiTableHead />
        </UiTableRow>
      </template>
      <template #body>
        <template v-for="(item, index) in $props?.items" :key="item?.id">
          <UiTableRow class="last:[&>td]:!border-0">
            <UiTableData>{{ index + 1 }}</UiTableData>
            <UiTableData>
              <div class="w-24 h-24 flex items-center justify-center">
                <template v-if="item.is_video && item.video_url">
                  <!-- 🎬 YouTube -->
                  <iframe
                    v-if="/youtu\.be|youtube\.com/.test(item.video_url)"
                    :src="getEmbedUrl(item.video_url)"
                    frameborder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    class="w-full h-full rounded-md"
                  />

                  <!-- 📹 MP4 / WEBM / OGG -->
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

                <!-- 🖼️ Thumbnail fallback -->
                <template v-else-if="item.thumbnail_url">
                  <img
                    :src="`${useRuntimeConfig().public.apiBase}${item.thumbnail_url}`"
                    alt="Thumbnail"
                    class="w-full h-full object-cover rounded-md"
                  >
                </template>

                <!-- ❌ Fallback jika kosong -->
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
                <button type="button" class="group table-action-button">
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
