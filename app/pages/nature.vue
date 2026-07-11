<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { natureImagesFetcher } from "~/repository/modules/nature-images";

const config = useRuntimeConfig();

useHead({
  title: "Aysia LinggarWati - Nature",
  meta: [
    {
      name: "description",
      content: "Explore nature through the lens of Aysia LinggarWati.",
    },
    { name: "keywords", content: "nature, photography, landscape, travel" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});

// state
const images = ref<{ url: string; title: string; aspect: string }[]>([]);
const loading = ref(true);
const page = ref(1);
const limit = 10;
const hasMore = ref(true);

const activeIndex = ref(0);
const isOpen = ref(false);

const scrollContainer = ref<HTMLElement | null>(null);
const progress = ref(0);

// drag state
const isDragging = ref(false);
const startX = ref(0);
const scrollLeftStart = ref(0);
const dragMoved = ref(false);

function onMouseDown(e: MouseEvent) {
  if (!scrollContainer.value) return;
  isDragging.value = true;
  dragMoved.value = false;
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeftStart.value = scrollContainer.value.scrollLeft;
  scrollContainer.value.style.cursor = 'grabbing';
  scrollContainer.value.style.userSelect = 'none';
}

function onMouseMove(e: MouseEvent) {
  if (!isDragging.value || !scrollContainer.value) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = (x - startX.value) * 1.2;
  scrollContainer.value.scrollLeft = scrollLeftStart.value - walk;
  if (Math.abs(x - startX.value) > 5) {
    dragMoved.value = true;
  }
}

function onMouseUp() {
  if (!scrollContainer.value) return;
  isDragging.value = false;
  scrollContainer.value.style.cursor = '';
  scrollContainer.value.style.userSelect = '';
}

function onMouseLeave() {
  if (isDragging.value) onMouseUp();
}

function onCardClick(index: number) {
  if (dragMoved.value) return;
  open(index);
}

// helper url
const getUrl = (item: any) => {
  let url = item.thumbnail_path || "";
  if (!url && item.filename) {
    url = `/uploads/nature-images/${item.filename}`;
  }
  if (url && url.startsWith("/") && !url.startsWith("//")) {
    const baseUrl = config.public.apiBase;
    if (baseUrl) url = baseUrl + url;
  }
  return url;
};

// random aspect ratio for variety
const randomAspect = (): string => {
  const aspects = ["landscape", "portrait", "panorama", "square"];
  return aspects[Math.floor(Math.random() * aspects.length)] ?? "landscape";
};

// fetch
const fetchImages = async () => {
  try {
    const response = await natureImagesFetcher().getAll({
      page: page.value,
      limit,
    });

    const mapped = response.data.map((item: any) => ({
      url: getUrl(item),
      title: item.title || "Untitled",
      aspect: randomAspect(),
    }));

    images.value.push(...mapped);

    if (mapped.length < limit) {
      hasMore.value = false;
    }
  } catch (error) {
    console.error("Failed to load nature images:", error);
  } finally {
    loading.value = false;
  }
};

// scroll progress
function onScroll() {
  if (!scrollContainer.value) return;
  const el = scrollContainer.value;
  const scrollLeft = el.scrollLeft;
  const scrollWidth = el.scrollWidth - el.clientWidth;
  progress.value = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;

  // Load more when near the end
  if (scrollWidth - scrollLeft < 600 && hasMore.value) {
    page.value++;
    fetchImages();
  }
}

// lightbox
function open(index: number) {
  activeIndex.value = index;
  isOpen.value = true;
  document.body.style.overflow = "hidden";
}

function close() {
  isOpen.value = false;
  document.body.style.overflow = "";
}

function handleKey(e: KeyboardEvent) {
  if (!isOpen.value) return;
  if (e.key === "Escape") close();
}

// lifecycle
onMounted(async () => {
  await fetchImages();
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <!-- ===== PROGRESS BAR ===== -->
  <div class="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#2A2A25]/5">
    <div
      class="h-full bg-[#5A5A40] transition-all duration-150 ease-out"
      :style="{ width: progress + '%' }"
    ></div>
  </div>

  <!-- ===== HORIZONTAL GALLERY (with skeleton) ===== -->
  <div
    ref="scrollContainer"
    @scroll="onScroll"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseLeave"
    class="h-[90vh] overflow-x-auto overflow-y-hidden flex bg-[#F5F2E9] scroll-smooth cursor-grab select-none z-10"
    style="scrollbar-width: none; -ms-overflow-style: none;"
  >
    <!-- Left Intro Column -->
    <div class="flex-shrink-0 w-[40vw] sm:w-[40vw] md:w-[40vw] lg:w-[25vw] h-full flex flex-col justify-center px-5 md:px-8 xl:px-12 border-r border-black/5">
      <p class="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] mb-4 font-bold">Earth's Canvas</p>
      <h1 class="font-serif italic text-6xl sm:text-7xl lg:text-8xl font-light text-[#2A2A25] leading-[0.85] mb-8">
        Na<br/>ture
      </h1>
      <div class="h-[1px] w-12 bg-black/20 mb-8"></div>
      <p class="text-sm text-[#7A7A70] leading-relaxed font-light max-w-sm">
        A curated study of light, organic textures, and the silent rhythm of the wild. Captured across serene landscapes with pure photographic purity.
      </p>
      <div class="mt-12 flex items-center gap-4 group cursor-pointer">
        <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A2A25]">Scroll Experience</span>
        <div class="w-8 h-[1px] bg-black/20 group-hover:w-16 transition-all duration-300"></div>
      </div>
    </div>

    <!-- Skeleton Cards -->
    <template v-if="loading">
      <div
        v-for="i in 5"
        :key="'skeleton-' + i"
        class="flex-shrink-0 h-full flex items-center px-5 md:px-8"
      >
        <div class="relative group">
          <div class="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] aspect-[3/2] bg-[#E5E2D9] overflow-hidden">
            <div class="w-full h-full skeleton-shimmer"></div>
          </div>
          <div class="mt-4 flex items-baseline justify-between px-0.5">
            <div class="flex flex-col gap-2">
              <div class="w-16 h-3 rounded skeleton-shimmer"></div>
              <div class="w-24 h-3 rounded skeleton-shimmer"></div>
            </div>
            <div class="w-12 h-3 rounded skeleton-shimmer"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- Real Image Cards -->
    <template v-else>
      <div
        v-for="(img, index) in images"
        :key="index"
        class="flex-shrink-0 h-full flex items-center px-5 md:px-8 cursor-pointer"
        @click="onCardClick(index)"
      >
        <div class="relative group">
          <div class="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] aspect-[3/2] bg-[#E5E2D9] overflow-hidden shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
            <img
              :src="img.url"
              :alt="img.title"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              loading="lazy"
              draggable="false"
            />
          </div>

          <div class="mt-4 flex items-baseline justify-between px-0.5">
            <div class="flex flex-col">
              <span class="text-[9px] uppercase tracking-[0.2em] text-[#7A7A70] font-bold">Plate {{ String(index + 1).padStart(2, '0') }}</span>
              <p class="text-xs font-serif italic text-[#2A2A25] mt-0.5">{{ img.title }}</p>
            </div>
            <span class="text-[9px] font-mono text-[#7A7A70] uppercase tracking-widest">{{ img.aspect }}</span>
          </div>
        </div>
      </div>
    </template>

    <!-- Right Column with Load More Action -->
    <div class="flex-shrink-0 w-[50vw] sm:w-[35vw] md:w-[28vw] lg:w-[24vw] h-full flex flex-col items-center justify-center px-12 text-center">
      <div class="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center mb-4 text-[#5A5A40]">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>

      <p class="text-[10px] text-[#5A5A40] tracking-widest uppercase mb-4 font-bold">
        {{ loading ? '...' : images.length + ' Plates Loaded' }}
      </p>

      <button
        v-if="hasMore && !loading"
        @click="page++; fetchImages()"
        class="group flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white bg-[#2A2A25] hover:bg-[#5A5A40] rounded-full px-6 py-3.5 transition-all duration-300 shadow-sm cursor-pointer"
      >
        <span>Load More</span>
        <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
      <p v-else-if="!hasMore && !loading" class="text-[10px] text-[#7A7A70] tracking-[0.25em] uppercase font-mono mt-2">
        End of Exhibition
      </p>
    </div>
  </div>

  <!-- ===== LIGHTBOX ===== -->
  <teleport to="body">
    <transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center"
        @keydown.escape="close"
        tabindex="0"
      >
        <div class="absolute inset-0 bg-[#1E1E1A]/98 backdrop-blur-md" @click="close"></div>

        <button
          class="absolute top-8 right-8 z-10 text-white/50 hover:text-white transition-colors text-[10px] tracking-[0.3em] uppercase font-bold cursor-pointer"
          @click="close"
        >
          Close ✕
        </button>

        <button
          class="absolute left-8 z-10 text-white/30 hover:text-white transition-colors text-4xl font-light h-12 w-12 flex items-center justify-center rounded-full border border-white/5 hover:bg-white/5 cursor-pointer"
          @click="activeIndex = (activeIndex - 1 + images.length) % images.length"
        >
          ‹
        </button>
        <button
          class="absolute right-8 z-10 text-white/30 hover:text-white transition-colors text-4xl font-light h-12 w-12 flex items-center justify-center rounded-full border border-white/5 hover:bg-white/5 cursor-pointer"
          @click="activeIndex = (activeIndex + 1) % images.length"
        >
          ›
        </button>

        <div class="relative z-[1] text-center max-w-[85vw] max-h-[80vh] flex flex-col justify-center items-center">
          <div class="overflow-hidden border border-white/5 bg-[#2A2A25] shadow-2xl">
            <img
              :src="images[activeIndex]?.url"
              class="max-h-[70vh] max-w-full object-contain mx-auto"
            />
          </div>
          <div class="flex flex-col items-center gap-2 mt-6">
            <span class="text-[#7A7A70] text-[9px] tracking-[0.25em] uppercase font-bold">
              Plate {{ String(activeIndex + 1).padStart(2, '0') }} of {{ images.length }}
            </span>
            <h3 class="text-white font-serif italic text-lg tracking-wide">
              {{ images[activeIndex]?.title }}
            </h3>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

* {
  scrollbar-width: none;
}

.lightbox-enter-active { transition: opacity 0.3s ease; }
.lightbox-leave-active { transition: opacity 0.2s ease; }
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }

.skeleton-shimmer {
  background: linear-gradient(90deg, #e0e0e0 25%, #d0d0d0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
