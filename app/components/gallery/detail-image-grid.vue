<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useRuntimeConfig } from "#app";
import { useI18n } from "#imports";
import { computed, ref, onMounted, onUnmounted } from "vue";

/** ----- props ----- */
const props = defineProps<{
  journeyDetailItems: JourneyDetailsResponse[];
  pending?: boolean;
  musicUrl?: string;
  musicName?: string;
}>();

const { t } = useI18n();

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

/** ----- FANCYBOX ----- */
function isYouTubeUrl(url: string) {
  return /youtu\.be|youtube\.com/.test(url);
}

function buildFancyboxItems() {
  return props.journeyDetailItems.map((item) => {
    if (item.is_video && item.video_url) {
      // YouTube video
      if (isYouTubeUrl(item.video_url)) {
        return {
          src: item.video_url,
          type: "video" as const,
          thumb: item.thumbnail_url ? `${apiBase}${item.thumbnail_url}` : undefined,
        };
      }
      // Direct video file
      return {
        src: item.video_url,
        type: "video" as const,
        thumb: item.thumbnail_url ? `${apiBase}${item.thumbnail_url}` : undefined,
      };
    }
    // Image
    return {
      src: `${apiBase}${item.thumbnail_url}`,
      type: "image" as const,
    };
  });
}

function openLightbox(index: number) {
  const items = buildFancyboxItems();

  Fancybox.show(items, {
    startIndex: index,
    groupAll: true,
    animated: true,
    showClass: "fancybox-fadeIn",
    hideClass: "fancybox-fadeOut",
    backdrop: {
      background: "rgba(0,0,0,0.8)",
      backdropFilter: "blur(12px)",
    },
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
    Carousel: {
      infinite: true,
      transition: "classic",
      padding: 0,
      Navigation: {
        PrevButton: {
          render: false,
        },
        NextButton: {
          render: false,
        },
      },
    },
    Images: {
      zoom: true,
      zoomMax: 5,
      fit: "cover",
    },
    Video: {
      autoplay: true,
      preload: true,
    },
  } as any);
}

/** ----- IMAGE HANDLING ----- */
function handleImageError(event: Event) {
  console.error('[detail-image-grid] image failed to load', event);
}

/** ----- MUSIC ----- */
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const autoplayBlocked = ref(false);

// Compute music source - use from props or fallback to default
const musicSource = computed(() => {
  if (props.musicUrl) {
    // If musicUrl is a full URL, use it directly; otherwise prepend apiBase
    if (props.musicUrl.startsWith("http")) {
      return props.musicUrl;
    }
    return apiBase + props.musicUrl;
  }
  // Fallback to default music
  return "/audio/Javanese Vibes Gamelan.mp3";
});

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
    <div class="lg:app-container max-w-4xl mx-auto px-8 lg:px-0">

      <!-- LOADING -->
      <template v-if="props.pending">
        <div class="flex justify-center my-10 animate-spin">
          <Icon name="gg:spinner" style="width: 4rem; height: 4rem" />
        </div>
      </template>

      <!-- SLIDER -->
      <template v-else-if="props.journeyDetailItems?.length">
        <div class="relative w-full aspect-[3/2] overflow-hidden rounded-xl">

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

            <button class="absolute inset-0 cursor-pointer" @click="openLightbox(index)" />
          </div>

          <button class="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl hover:text-gray-300 transition-colors" @click="prevSlide">
            ‹
          </button>

          <button class="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl hover:text-gray-300 transition-colors" @click="nextSlide">
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

  <!-- MUSIC -->
  <audio
    ref="audioRef"
    :src="musicSource"
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
            {{ props.musicName ? `${props.musicName} • Now Playing •` : 'Javanese Vibes Gamelan • Now Playing • Journey Music • Now Playing •' }}
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

<style>
/* Fancybox custom styling - global to override defaults */
.fancybox__button--arrow {
  width: 48px;
  height: 48px;
  border: none !important;
  border-radius: 0 !important;
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.2s ease;
}

.fancybox__button--arrow:hover {
  background: rgba(255, 255, 255, 0.3) !important;
}

.fancybox__button--arrow svg {
  width: 24px;
  height: 24px;
}

/* Backdrop blur */
.fancybox__backdrop {
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

/* Maximize image - fill entire viewport */
.fancybox__container {
  padding: 0 !important;
}

.fancybox__slide {
  padding: 0 !important;
  margin: 0 !important;
}

.fancybox__content {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  max-width: 100vw !important;
  max-height: 100vh !important;
}

.fancybox__image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

/* Hide infobar counter */
.fancybox__infobar {
  display: none !important;
}

/* Hide caption */
.fancybox__caption {
  display: none !important;
}

/* Make toolbar float on top - no space taken */
.fancybox__toolbar {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  background: transparent !important;
  pointer-events: none;
  padding: 0 !important;
}

.fancybox__toolbar button {
  pointer-events: auto;
}
</style>

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