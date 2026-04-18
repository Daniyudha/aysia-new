<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps<{
  items: JourneyResponse[];
}>();

const loading = computed(() => !props.items || props.items.length === 0);

const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "center",
});

let autoplayTimer: ReturnType<typeof setInterval> | null = null;
let unwatchApi: (() => void) | null = null;

const isPaused = ref(false);

function pauseAutoplay() {
  isPaused.value = true;
  stopAutoplay();
}

function resumeAutoplay() {
  isPaused.value = false;
  startAutoplay();
}

function startAutoplay() {
  if (isPaused.value || loading.value || !emblaApi.value)
    return;
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    emblaApi.value?.scrollNext();
  }, 5000);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function scrollPrev() {
  stopAutoplay();
  emblaApi.value?.scrollPrev();
  startAutoplay();
}

function scrollNext() {
  stopAutoplay();
  emblaApi.value?.scrollNext();
  startAutoplay();
}

watch(
  () => props.items,
  () => {
    if (!loading.value) {
      emblaApi.value?.reInit();
      if (!isPaused.value) {
        startAutoplay();
      }
    }
  },
);

// Start autoplay when component mounts and embla is ready
onMounted(() => {
  // If emblaApi is already available, start autoplay directly
  if (emblaApi.value && !loading.value && !isPaused.value) {
    startAutoplay();
  }
  else {
    // Otherwise wait for it to become available
    unwatchApi = watch(() => emblaApi.value, (api) => {
      if (api && !loading.value && !isPaused.value) {
        startAutoplay();
        unwatchApi?.();
        unwatchApi = null;
      }
    });
  }

  // Attach hover events
  const container = emblaRef.value;
  if (container) {
    container.addEventListener("mouseenter", pauseAutoplay);
    container.addEventListener("mouseleave", resumeAutoplay);
  }
});

onBeforeUnmount(() => {
  stopAutoplay();
  unwatchApi?.();
  const container = emblaRef.value;
  if (container) {
    container.removeEventListener("mouseenter", pauseAutoplay);
    container.removeEventListener("mouseleave", resumeAutoplay);
  }
});
</script>

<template>
  <!-- ================= HERO SKELETON ================= -->
  <section v-if="loading" class="hero skeleton-hero">
    <div class="skeleton-bg" />

    <div class="skeleton-content">
      <div class="skeleton-line short" />
      <div class="skeleton-line long" />
    </div>
  </section>

  <!-- ================= HERO CAROUSEL ================= -->
  <section
    v-else
    ref="emblaRef"
    class="embla hero"
  >
    <div class="embla__container">
      <div
        v-for="item in props.items"
        :key="item.id"
        class="embla__slide"
      >
        <NuxtLink :to="{ name: 'portfolio-galleryId', params: { galleryId: item.id } }" class="slide-inner">
          <img
            :src="useRuntimeConfig().public.apiBase + item.thumbnail"
            :alt="item.title"
            class="slide-image"
            loading="lazy"
          >

          <div class="bg-black/50 absolute inset-0" />

          <div class="slide-content border-l-6 border-white pl-4">
            <p class="slide-label">
              {{ item.gallery_category_name }}
            </p>
            <h2 class="slide-title">
              {{ item.title }}
            </h2>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- NAVIGATION -->
    <button class="hero-nav prev" @click="scrollPrev">
      ‹
    </button>
    <button class="hero-nav next" @click="scrollNext">
      ›
    </button>
  </section>
</template>

<style>
/* ================= HERO ================= */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero {
    height: 85vh;
  }
}

/* ================= EMBLA ================= */
.embla__container {
  display: flex;
  height: 100%;
}

.embla__slide {
  flex: 0 0 100%;
  position: relative;
}

.slide-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* TEXT */
.slide-content {
  position: absolute;
  left: 4rem;
  bottom: 3rem;
  color: #fff;
  max-width: 600px;
  margin-right: 32px;
}

@media (max-width: 768px) {
  .slide-content {
    left: 2rem;
  }
}

.slide-label {
  font-family: "Fraunces", serif;
  font-size: 16px;
}

.slide-title {
  font-family: "Fraunces", serif;
  font-size: 32px;
  line-height: 1.2;
  color: white;
}

/* NAV */
.hero-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: white;
  opacity: 0.6;
  padding: 0.5rem 1rem;
  z-index: 10;
  transition: opacity 0.2s ease;
}

.hero-nav:hover {
  opacity: 1;
}

.hero-nav.prev {
  left: 1rem;
}

.hero-nav.next {
  right: 1rem;
}

/* ================= SKELETON HERO ================= */
.skeleton-hero {
  background: #e5e5e5;
}

.skeleton-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, #e5e5e5 40%, #f0f0f0 50%, #e5e5e5 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-content {
  position: absolute;
  left: 3rem;
  bottom: 3rem;
  z-index: 2;
}

.skeleton-line {
  height: 16px;
  margin-bottom: 12px;
  border-radius: 4px;
  background: linear-gradient(100deg, #dcdcdc 40%, #eeeeee 50%, #dcdcdc 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-line.short {
  width: 140px;
}

.skeleton-line.long {
  width: 320px;
  height: 32px;
}

/* ================= ANIMATION ================= */
@keyframes shimmer {
  to {
    background-position: -200% 0;
  }
}
</style>
