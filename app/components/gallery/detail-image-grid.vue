<script setup lang="ts">
import { useRuntimeConfig } from "#app";
import { useI18n } from "#imports";
import { computed, reactive, ref, onMounted, onUnmounted, watch } from "vue";

/** ----- props ----- */
const props = defineProps<{
  journeyDetailItems: JourneyDetailsResponse[];
  pending?: boolean;
}>();

const { t } = useI18n();

console.debug('[detail-image-grid] props:', props.journeyDetailItems?.length, props.pending);

onMounted(() => {
  console.debug('[detail-image-grid] mounted, props:', props.journeyDetailItems?.length, props.pending);
});

/** ----- dialog ----- */
const showDialogState = reactive({
  openDialog: false,
  selectedJourneyIndex: -1,
});

function closeDialog() {
  showDialogState.openDialog = false;
  showDialogState.selectedJourneyIndex = -1;
}

function openDialogAt(index: number) {
  showDialogState.selectedJourneyIndex = index;
  showDialogState.openDialog = true;
}

/** ----- selected item ----- */
const selectedJourney = computed(() => {
  if (showDialogState.selectedJourneyIndex < 0) return null;
  return props.journeyDetailItems[showDialogState.selectedJourneyIndex] ?? null;
});

/** ----- runtime ----- */
const apiBase = useRuntimeConfig().public?.apiBase ?? "";

/** ----- SLIDER ----- */
const currentIndex = ref(0);
let interval: any = null;

function nextSlide() {
  if (!props.journeyDetailItems.length) return;
  currentIndex.value =
    (currentIndex.value + 1) % props.journeyDetailItems.length;
}

function prevSlide() {
  if (!props.journeyDetailItems.length) return;
  currentIndex.value =
    (currentIndex.value - 1 + props.journeyDetailItems.length) %
    props.journeyDetailItems.length;
}

onMounted(() => {
  interval = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
});

/** ----- IMAGE HANDLING ----- */
function handleImageError(event: Event) {
  console.error('[detail-image-grid] image failed to load', event);
}

function handleImageLoad(event: Event) {
  console.debug('[detail-image-grid] image loaded', event);
}

/** ----- MUSIC ----- */
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const autoplayBlocked = ref(false);

/** toggle manual */
function toggleMusic() {
  const audio = audioRef.value;
  if (!audio) return;

  audio.muted = false;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

onMounted(() => {
  const audio = audioRef.value;
  if (!audio) return;

  const handlePlay = () => {
    isPlaying.value = true;
  };

  const handlePause = () => {
    isPlaying.value = false;
  };

  const handleCanPlay = () => {
    // Autoplay muted (PASTI jalan)
    audio.muted = true;

    audio.play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch(() => {
        autoplayBlocked.value = true;
      });
  };

  audio.addEventListener("play", handlePlay);
  audio.addEventListener("pause", handlePause);
  audio.addEventListener("canplaythrough", handleCanPlay);

  /** UNMUTE saat user interaksi */
  const handleUserInteraction = () => {
    if (!audio) return;

    audio.muted = false;

    if (audio.paused) {
      audio.play().catch(() => {});
    }

    document.removeEventListener("click", handleUserInteraction);
    document.removeEventListener("touchstart", handleUserInteraction);
  };

  document.addEventListener("click", handleUserInteraction);
  document.addEventListener("touchstart", handleUserInteraction);

  onUnmounted(() => {
    audio.removeEventListener("play", handlePlay);
    audio.removeEventListener("pause", handlePause);
    audio.removeEventListener("canplaythrough", handleCanPlay);
    document.removeEventListener("click", handleUserInteraction);
    document.removeEventListener("touchstart", handleUserInteraction);
  });
});
</script>

<template>
  <section class="pt-0 pb-16">
    <div class="lg:app-container max-w-5xl mx-auto px-8 lg:px-0">

      <!-- LOADING -->
      <template v-if="props.pending">
        <div class="flex justify-center my-10 animate-spin">
          <Icon name="gg:spinner" style="width: 4rem; height: 4rem" />
        </div>
      </template>

      <!-- SLIDER -->
      <template v-else-if="props.journeyDetailItems?.length">
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-xl">

          <div
            v-for="(item, index) in props.journeyDetailItems"
            :key="item.id"
            class="absolute inset-0 transition-opacity duration-700"
            :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
          >
            <img
              v-if="!item.is_video"
              :src="`${apiBase}${item.thumbnail_url}`"
              class="w-full h-full object-cover"
              @error="handleImageError"
              @load="handleImageLoad"
            >

            <video
              v-else-if="item.video_url"
              :src="item.video_url"
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover"
            />

            <button class="absolute inset-0" @click="openDialogAt(index)" />
          </div>

          <button class="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl" @click="prevSlide">
            ‹
          </button>

          <button class="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl" @click="nextSlide">
            ›
          </button>
        </div>
      </template>

      <!-- EMPTY -->
      <template v-else>
        <p class="text-center text-xl">
          {{ t('gallery.collection_not_found') }}
        </p>
      </template>
    </div>
  </section>

  <!-- DIALOG -->
  <GalleryDetailDialog
    v-if="showDialogState.selectedJourneyIndex > -1"
    :image="selectedJourney?.thumbnail_url ?? ''"
    :title="selectedJourney?.title ?? ''"
    :content="selectedJourney?.description ?? ''"
    :is-video="selectedJourney?.is_video ?? false"
    :video-url="selectedJourney?.video_url ?? ''"
    :collections="[]"
    :model-value="showDialogState.openDialog"
    @update:model-value="(v) => { if (!v) closeDialog(); }"
  />

  <!-- AUDIO -->
  <audio
    ref="audioRef"
    src="/audio/Wonderland-Indonesia.mp3"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
  />

  <!-- FLOATING MUSIC -->
  <div class="music-player" @click="toggleMusic">
    <div class="wrapper" :class="{ spinning: isPlaying }">

      <!-- TEXT MELINGKAR -->
      <svg viewBox="0 0 120 120" class="circular-text">
        <defs>
          <path
            id="circlePath"
            d="
              M 60,60
              m -50,0
              a 50,50 0 1,1 100,0
              a 50,50 0 1,1 -100,0
            "
          />
        </defs>

        <text font-size="10">
          <textPath href="#circlePath">
            Now Playing • Journey Music • Now Playing •
          </textPath>
        </text>
      </svg>

      <!-- DISC -->
      <div class="disc">
        <Icon
          :name="isPlaying ? 'mdi:music' : 'mdi:music-off'"
          class="icon"
        />
      </div>

    </div>

    <!-- TOOLTIP -->
    <div v-if="autoplayBlocked && !isPlaying" class="autoplay-tooltip">
      Click to play music
    </div>
  </div>
</template>

<style scoped>
.music-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  cursor: pointer;
}

.wrapper {
  position: relative;
  width: 100px;
  height: 100px;
}

.circular-text {
  position: absolute;
  width: 100%;
  height: 100%;
  fill: oklch(35.165% 0.06358 89.614);
  letter-spacing: 1.5px;
}

.disc {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: oklch(35.165% 0.06358 89.614);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 26px;
  color: oklch(96.1% 0.012 91.52);
}

.spinning .circular-text {
  animation: rotateText 10s linear infinite;
}

.spinning .disc {
  animation: spinDisc 4s linear infinite;
}

@keyframes rotateText {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spinDisc {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.autoplay-tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
</style>