<script setup lang="ts">
import { computed } from "vue";
import { useRuntimeConfig } from "#app";

interface Props {
  image?: string;
  title: string;
  content: string;
  isVideo?: boolean;
  videoUrl?: string;
  modelValue?: boolean;
  chunckSize?: number;
  collections: JourneyResponse[];
  pending?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  chunckSize: 2,
});


const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const open = computed({
  get: () => props.modelValue ?? false,
  set: (value) => emit("update:modelValue", value),
});

/** 🔍 Detect YouTube URLs */
function isYouTubeUrl(url: string) {
  return /youtu\.be|youtube\.com/.test(url);
}

/** 🎬 Extract YouTube Video ID (supports watch, embed, shorts, youtu.be) */
function getYouTubeId(url: string): string {
  if (!url) return "";
  const match =
    url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/) ||
    url.match(/shorts\/([\w-]{11})/);
  return match ? match[1] ?? "" : "";
}

/** 🎬 Detect YouTube video type */
function getYouTubeType(url: string): 'short' | 'video' {
  if (!url) return 'video';
  return url.includes('/shorts/') ? 'short' : 'video';
}

/** 🎞 Get aspect ratio style for YouTube videos */
function getAspectRatioStyle(url: string): string {
  if (!isYouTubeUrl(url)) return 'aspect-ratio: 16/9;';

  const type = getYouTubeType(url);
  return type === 'short'
    ? 'aspect-ratio: 9/16; max-width: 400px;'
    : 'aspect-ratio: 16/9;';
}

/** 🧠 Build a clean YouTube embed URL */
function getEmbedUrl(url: string): string {
  if (!isYouTubeUrl(url)) return "";
  const videoId = getYouTubeId(url);
  if (!videoId) return "";

  const base = `https://www.youtube.com/embed/${videoId}`;
  const params = [
    "autoplay=1",
    "mute=1",
    "playsinline=1",
    "rel=0",
    "showinfo=0",
    "enablejsapi=1",
    "loop=1",
    "fs=1",
  ];

  // Shorts optimization: loop + hide controls
  if (getYouTubeType(url) === 'short') {
    params.push("controls=0", `playlist=${videoId}`);
  }

  return `${base}?${params.join("&")}`;
}

</script>

<template>
  <UiDialog v-model:open="open">

    <!-- FLOATING TITLE (OUTSIDE DIALOG) -->
    <div v-if="collections && collections.length > 0" class="fixed top-6 left-6 z-[9999] text-white drop-shadow-lg">
      <h1 class="text-3xl font-semibold">
        {{ collections[0]?.title }}
      </h1>
    </div>

    <!-- FLOATING CLOSE BUTTON (OUTSIDE DIALOG) -->
    <!-- <UiDialogClose class="fixed top-6 right-6 z-[9999] text-white">
      <Icon name="heroicons:x-mark-16-solid" class="w-10 h-10" />
    </UiDialogClose> -->

    <!-- DIALOG CONTENT -->
    <UiDialogContent class="!p-0 bg-transparent border-none shadow-none 
         max-w-none w-screen h-screen flex items-center justify-center">
      <template #overlay>
        <UiDialogOverlay class="bg-black/10 backdrop-blur-sm fixed inset-0" />
      </template>

      <!-- WRAPPER UTAMA -->
      <div class="relative w-full h-full flex items-center justify-center">

        <!-- WRAPPER -->
        <div class="w-full px-4 xl:px-0">

          <!-- MEDIA WRAPPER -->
          <div class="w-full h-screen flex items-center justify-center">

            <template v-if="isVideo && videoUrl">
              <iframe v-if="isYouTubeUrl(videoUrl)" :src="getEmbedUrl(videoUrl)"
                class="w-full h-full rounded-xl object-contain"></iframe>

              <video v-else :src="videoUrl" autoplay muted loop playsinline
                class="w-full h-full rounded-xl object-contain"></video>
            </template>

            <template v-else>
              <img :src="`${useRuntimeConfig().public.apiBase}${image}`" :alt="title"
                class="w-full h-full rounded-xl object-contain" />
            </template>

          </div>

          <!-- CONTROL AS LIGHTBOX SIDE BUTTONS -->
          <div class="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">

            <!-- LEFT CONTROL -->
            <div class="pointer-events-auto text-white py-6 hover:background-blur-sm hover:bg-white/30 rounded-lg">
              <slot name="control-left" />
            </div>

            <!-- RIGHT CONTROL -->
            <div class="pointer-events-auto text-white py-6 hover:background-blur-sm hover:bg-white/30 rounded-lg">
              <slot name="control-right" />
            </div>

          </div>


        </div>

      </div>

    </UiDialogContent>
  </UiDialog>
</template>



<style scoped>
@reference "../../assets/css/main.css";
</style>
