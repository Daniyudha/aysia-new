<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRuntimeConfig } from '#app'

/** ----- props ----- */
const props = defineProps<{
  journeyDetailItems: JourneyDetailsResponse[]
  pending?: boolean
}>()

/** ----- dialog state (sama seperti milikmu) ----- */
const showDialogState = reactive({
  openDialog: false,
  selectedJourneyIndex: -1,
})

function closeDialog() {
  showDialogState.openDialog = false
  showDialogState.selectedJourneyIndex = -1
}

function handleChangeImage(index: number) {
  if (index < 0 || index >= props.journeyDetailItems.length) return
  showDialogState.selectedJourneyIndex = index
}

/** ----- selectedItem computed ----- */
const selectedJourney = computed(() => {
  if (showDialogState.selectedJourneyIndex === undefined || showDialogState.selectedJourneyIndex < 0) return null
  return props.journeyDetailItems[showDialogState.selectedJourneyIndex] ?? null
})

/** ----- runtime config ----- */
const apiBase = useRuntimeConfig().public?.apiBase ?? ''

/** ----- YouTube helpers (robust) ----- */
function isYouTubeUrl(url?: string | null) {
  return !!url && /youtu\.be|youtube\.com/.test(url)
}

function getYouTubeId(url?: string | null): string | null {
  if (!url) return null
  // pola umum (shorts, watch?v=, youtu.be/, embed/)
  const patterns = [
    /(?:youtube\.com\/shorts\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m && m[1]) return m[1]
  }
  // fallback cari 11-char id
  const fallback = url.match(/([a-zA-Z0-9_-]{11})/)
  return fallback ? fallback[1] : null
}

function getYouTubeType(url?: string | null): 'short' | 'video' {
  if (!url) return 'video'
  return url.includes('/shorts/') ? 'short' : 'video'
}

/** Build embed URL (dipakai di grid iframe & di modal) */
function getEmbedUrl(url?: string | null, autoplay = 1, mute = 1) {
  const id = getYouTubeId(url)
  if (!id) return ''
  const params = [
    `autoplay=${autoplay ? 1 : 0}`,
    `mute=${mute ? 1 : 0}`,
    'playsinline=1',
    'loop=1',
    `playlist=${id}`,
    'controls=1',
    'rel=0',
    'modestbranding=1'
  ]
  return `https://www.youtube.com/embed/${id}?${params.join('&')}`
}

/** YouTube thumbnail fallback */
function getYouTubeThumbnail(url?: string | null) {
  const id = getYouTubeId(url)
  if (!id) return ''
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

/** helper untuk membuka dialog (dipanggil oleh overlay) */
function openDialogAt(index: number) {
  showDialogState.selectedJourneyIndex = index
  showDialogState.openDialog = true
}

/** computed embed url of selected item (for passing to GalleryDetailDialog) */
const selectedEmbedUrl = computed(() => {
  if (!selectedJourney.value) return ''
  // kirim embed URL (menghindari masalah shorts raw url)
  return getEmbedUrl(selectedJourney.value.video_url ?? null, 1, 0) // autoplay di modal, mute=0 agar user bisa dengar (sesuaikan)
})
</script>

<template>
  <section class="pt-6 pb-9">
    <div class="app-container">
      <!-- Loading Spinner -->
      <template v-if="props?.pending">
        <div class="flex justify-center my-10 animate-spin">
          <Icon name="gg:spinner" style="width: 4rem; height: 4rem" />
        </div>
      </template>

      <!-- Grid -->
      <template v-else-if="!props?.pending && !!props?.journeyDetailItems?.length">
        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <div v-for="(item, index) in props.journeyDetailItems" :key="item.id" class="break-inside-avoid">
            <!-- ===== VIDEO (YouTube or MP4) ===== -->
            <template v-if="item.is_video">
              <div class="relative block w-full rounded-lg overflow-hidden">
                <!-- container dengan aspect ratio dinamis (short vs video) -->
                <div
                  :style="{ aspectRatio: isYouTubeUrl(item.video_url) ? (getYouTubeType(item.video_url) === 'short' ? '9/16' : '16/9') : '16/9' }"
                  class="w-full bg-black relative rounded-lg overflow-hidden"
                >
                  <!-- If YouTube: render iframe (autoplay in-grid) but disable pointer events so click passes to overlay -->
                  <iframe
                    v-if="isYouTubeUrl(item.video_url)"
                    :src="getEmbedUrl(item.video_url, 1, 1)" 
                    frameborder="0"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowfullscreen
                    class="absolute inset-0 w-full h-full pointer-events-none"
                  ></iframe>

                  <!-- Direct MP4 video: autoplay but pointer-events-none -->
                  <video
                    v-else-if="item.video_url"
                    :src="item.video_url"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="metadata"
                    class="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  <!-- If thumbnail exists or fallback (kept for cases where iframe not desired) -->
                  <img
                    v-if="!isYouTubeUrl(item.video_url) && item.thumbnail_url"
                    :src="`${apiBase}${item.thumbnail_url}`"
                    alt=""
                    class="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  <!-- Overlay clickable: menangkap klik dan membuka dialog -->
                  <button
                    type="button"
                    class="absolute inset-0 z-20 flex items-center justify-center bg-transparent"
                    @click="openDialogAt(index)"
                    aria-label="Open gallery item"
                  >                    
                  </button>
                </div>
              </div>
            </template>

            <!-- ===== IMAGE (non-video) ===== -->
            <template v-else>
              <div class="relative">
                <img
                  :src="`${apiBase}${item.thumbnail_url}`"
                  alt=""
                  class="w-full h-[30vh] object-cover rounded-lg shadow cursor-pointer"
                />
                <!-- overlay clickable -->
                <button
                  type="button"
                  class="absolute inset-0 z-10"
                  @click="openDialogAt(index)"
                  aria-label="Open image"
                />
              </div>
            </template>
          </div>
        </div>
      </template>

      <!-- No data -->
      <template v-else>
        <p class="text-center text-xl">Collection not found.</p>
      </template>
    </div>
  </section>

  <!-- ===== GalleryDetailDialog (pakai component milikmu) =====
       Penting: kita kirim :video-url sebagai embed URL (bukan raw shorts url)
       agar dialog dapat menampilkan YouTube Shorts & regular video tanpa error.
  -->
  <template
    v-if="showDialogState.selectedJourneyIndex > -1 && props?.journeyDetailItems?.length"
  >
    <GalleryDetailDialog
      :image="selectedJourney?.thumbnail_url ?? ''"
      :title="selectedJourney?.title ?? ''"
      :content="selectedJourney?.description ?? ''"
      :is-video="selectedJourney?.is_video ?? false"
      :video-url=" selectedJourney && isYouTubeUrl(selectedJourney.video_url) ? getEmbedUrl(selectedJourney.video_url, 1, 0) : (selectedJourney?.video_url ?? '')"
      :model-value=" showDialogState.openDialog && showDialogState.selectedJourneyIndex > -1 "
      @update:model-value="(isOpen) => { if (!isOpen) closeDialog(); }"
    >
      <template #control>
<div class="flex items-center gap-6 bg-black text-app-primary px-6 py-3 rounded-lg w-full justify-between">

          <button
            type="button"
            class="control-button"
            :disabled="showDialogState.selectedJourneyIndex === 0"
            @click="handleChangeImage(showDialogState.selectedJourneyIndex - 1)"
          >
            <Icon name="heroicons:arrow-long-left" />
            <span class="inline-block">Previous</span>
          </button>
          <button
            type="button"
            class="control-button"
            :disabled=" showDialogState.selectedJourneyIndex === props.journeyDetailItems.length - 1 "
            @click="handleChangeImage(showDialogState.selectedJourneyIndex + 1)"
          >
            <span class="inline-block">Next</span>
            <Icon name="heroicons:arrow-long-left" class="rotate-180" />
          </button>
        </div>
      </template>
    </GalleryDetailDialog>
  </template>
</template>

<style scoped>
@reference "../../assets/css/main.css";

/* overlay button default tanpa visual, hanya agar clickable area penuh */
button[aria-label="Open gallery item"],
button[aria-label="Open image"] {
  background: transparent;
  border: none;
  padding: 0;
}

/* control-button styling (sama seperti milikmu) */
.control-button {
  @apply inline-flex items-center text-2xl font-light gap-4 cursor-pointer;
}
.control-button:disabled {
  @apply opacity-50;
}
</style>
