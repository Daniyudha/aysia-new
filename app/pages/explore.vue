<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { exploreImagesFetcher } from "~/repository/modules/explore-images";

const config = useRuntimeConfig();

useHead({
  title: "Aysia LinggarWati - Gallery",
  meta: [
    {
      name: "description",
      content: "Explore the world through the lens of Aysia LinggarWati.",
    },
    { name: "keywords", content: "explore, photography, travel, culture" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});

// state
const images = ref<{ url: string; title: string }[]>([]);
const loading = ref(true);
const loadingMore = ref(false);
const page = ref(1);
const limit = 12;
const hasMore = ref(true);

const activeIndex = ref(0);
const isOpen = ref(false);

// helper url
const getUrl = (item: any) => {
  let url = item.thumbnail_path || "";

  if (!url && item.filename) {
    url = `/uploads/explore-images/${item.filename}`;
  }

  if (url && url.startsWith("/") && !url.startsWith("//")) {
    const baseUrl = config.public.apiBase;
    if (baseUrl) url = baseUrl + url;
  }

  return url;
};

// fetch
const fetchImages = async (isLoadMore = false) => {
  try {
    if (isLoadMore) loadingMore.value = true;

    const response = await exploreImagesFetcher().getAll({
      page: page.value,
      limit,
    });

    const mapped = response.data.map((item: any) => ({
      url: getUrl(item),
      title: item.title || "Untitled",
    }));

    images.value.push(...mapped);

    if (mapped.length < limit) {
      hasMore.value = false;
    }
  } catch (error) {
    console.error("Failed to load explore images:", error);
  } finally {
    loading.value = false;
    loadingMore.value = false;
  }
};

function loadMore() {
  page.value++;
  fetchImages(true);
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

function next() {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
}

function prev() {
  activeIndex.value =
    (activeIndex.value - 1 + images.value.length) % images.value.length;
}

function handleKey(e: KeyboardEvent) {
  if (!isOpen.value) return;

  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
}

// lifecycle
onMounted(async () => {
  window.addEventListener("keydown", handleKey);
  await fetchImages();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKey);
});
</script>

<template>
  <section class="py-10">
    <div class="app-container">
      <h1 class="font-fraunces text-5xl font-normal text-app-secondary mb-8">
        My Gallery
      </h1>

      <!-- SKELETON -->
      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="h-[350px] rounded-2xl overflow-hidden relative"
        >
          <div class="absolute inset-0 bg-gray-200"></div>

          <!-- shimmer -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"
          ></div>

          <!-- fake title -->
          <div class="absolute bottom-4 left-4 w-1/2 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      <!-- GRID -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div
          v-for="(img, index) in images"
          :key="index"
          class="group cursor-zoom-in overflow-hidden rounded-2xl relative"
          @click="open(index)"
        >
          <img
            :src="img.url"
            class="w-full h-[350px] object-cover transition duration-500 group-hover:scale-110"
          />

          <!-- OVERLAY -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
          ></div>

          <!-- TITLE -->
          <div
            class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <p class="text-white text-lg font-medium">
              {{ img.title }}
            </p>
          </div>
        </div>
      </div>

      <!-- LOAD MORE -->
      <div class="mt-10 flex justify-center">
        <button
          v-if="hasMore"
          @click="loadMore"
          class="px-6 py-3 border border-app-secondary text-app-secondary rounded-full hover:bg-app-secondary hover:text-white transition"
        >
          <span v-if="!loadingMore">Explore More</span>
          <span v-else>Loading...</span>
        </button>
      </div>
    </div>
  </section>

  <!-- LIGHTBOX -->
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
    >
      <!-- Close -->
      <button
        class="absolute top-6 right-6 text-white text-3xl hover:opacity-70"
        @click="close"
      >
        ✕
      </button>

      <!-- Prev -->
      <button
        class="absolute left-6 text-white text-5xl hover:opacity-70"
        @click="prev"
      >
        ‹
      </button>

      <!-- Image -->
      <div class="text-center">
        <img
          :src="images[activeIndex].url"
          class="min-h-[80vh] max-w-[90vw] object-contain mx-auto"
        />

        <p class="text-white mt-4 text-lg">
          {{ images[activeIndex].title }}
        </p>
      </div>

      <!-- Next -->
      <button
        class="absolute right-6 text-white text-5xl hover:opacity-70"
        @click="next"
      >
        ›
      </button>
    </div>
  </teleport>
</template>

<style>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>