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
    <div
      v-if="collections && collections.length > 0"
      class="fixed top-6 left-6 z-[9999] text-white drop-shadow-lg"
    >
      <h1 class="text-3xl font-semibold">
        {{ collections[0]?.title }}
      </h1>
    </div>

    <!-- FLOATING CLOSE BUTTON (OUTSIDE DIALOG) -->
    <UiDialogClose
      class="fixed top-6 right-6 z-[9999] text-white"
    >
      <Icon name="heroicons:x-mark-16-solid" class="w-10 h-10" />
    </UiDialogClose>

    <!-- DIALOG CONTENT -->
    <UiDialogContent
      class="!p-0 !m-0 bg-transparent border-none overflow-visible 
             flex items-center justify-center [&>button]:hidden"
    >
      <template #overlay>
        <UiDialogOverlay class="bg-black/80" />
      </template>

      <!-- WRAPPER UTAMA -->
      <div class="relative inline-block px-4 md:px-0">

        <!-- MEDIA -->
        <div class="max-h-[90vh]">
          <template v-if="isVideo && videoUrl">

            <!-- YOUTUBE -->
            <iframe
              v-if="isYouTubeUrl(videoUrl)"
              :src="getEmbedUrl(videoUrl)"
              class="max-h-[90vh] w-full aspect-9/16 rounded-lg object-contain"
              allowfullscreen
            ></iframe>

            <!-- DIRECT MP4 -->
            <video
              v-else
              :src="videoUrl"
              autoplay muted loop playsinline
              class="max-h-[90vh] w-full aspect-16/9 rounded-lg object-contain"
            ></video>

          </template>

          <!-- IMAGE -->
          <template v-else>
            <img
              :src="`${useRuntimeConfig().public.apiBase}${image}`"
              :alt="title"
              class="max-h-[90vh] rounded-lg object-contain"
            />
          </template>
        </div>

        <!-- CONTROL BAR -->
        <div class="w-full flex justify-center mt-3">
          <slot name="control" />
        </div>

      </div>
    </UiDialogContent>

  </UiDialog>
</template>



<style scoped>
@reference "../../assets/css/main.css";
</style>


<!-- <div
  class="md:w-1/2 flex flex-col justify-center p-6 pr-10 py-10 md:overflow-y-auto relative bg-app-primary"
>
  <UiDialogClose
    class="absolute top-4 right-4 text-app-secondary outline-none"
  >
    <Icon
      name="heroicons:x-mark-16-solid"
      class="!w-8 !h-8 inline-block"
    />
  </UiDialogClose>

  <UiDialogHeader class="contents space-y-0 text-left">
    <UiDialogTitle
      class="font-medium mb-2 !text-[4rem] leading-[100%] tracking-[0%]"
    >
      {{ $props.title }}
    </UiDialogTitle>
    <UiDialogDescription class="hidden">
      {{ $props.title }}
    </UiDialogDescription>
  </UiDialogHeader>

  <div class="space-y-6" v-html="$props?.content" />
</div> -->
