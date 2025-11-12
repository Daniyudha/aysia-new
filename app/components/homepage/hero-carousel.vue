<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";

const props = defineProps<{
  items: JourneyResponse[];
}>();

function cloneArray<T>(arr: T[]): T[] {
  const targetLength = 8;
  if (arr.length >= targetLength) return [...arr];
  if (arr.length === 0) return [];
  return Array.from({ length: targetLength }, (_, i) => arr[i % arr.length]!);
}

const [emblaRef, emblaAPI] = emblaCarouselVue(
  {
    loop: true,
    align: "start",
    slidesToScroll: 1,
  },
  [
    AutoScroll({
      playOnInit: true,
      speed: 1.5,
      stopOnInteraction: false,
      startDelay: 1,
    }),
  ],
);

const emblaCarouselItems = computed(() => cloneArray(props?.items ?? []));
const hoveredIndex = ref<number | null>(null);

function stopAutoScroll() {
  const autoScroll = emblaAPI.value?.plugins()?.autoScroll;
  if (autoScroll && autoScroll.isPlaying()) autoScroll.stop();
}

function startAutoScroll() {
  const autoScroll = emblaAPI.value?.plugins()?.autoScroll;
  if (autoScroll && !autoScroll.isPlaying()) autoScroll.play();
}

onMounted(() => {
  nextTick(() => emblaAPI.value?.reInit());

  const autoScroll = emblaAPI.value?.plugins()?.autoScroll;
  if (autoScroll) {
    const width = window.innerWidth;

    if (width < 640) {
      autoScroll.options.speed = 0.9;
    } else if (width < 1024) {
      autoScroll.options.speed = 1.1;
    } else {
      autoScroll.options.speed = 1.4;
    }

    autoScroll.play();
  }
});

watch(() => props.items, () => nextTick(() => emblaAPI.value?.reInit()), { immediate: true });
watch(emblaCarouselItems, () => nextTick(() => emblaAPI.value?.reInit()));

onBeforeUnmount(() => {
  emblaAPI.value?.destroy();
});
</script>

<template>
  <div
    v-if="emblaCarouselItems.length"
    ref="emblaRef"
    class="embla embla-hero"
  >
    <div class="embla__container">
      <div
        v-for="(item, i) in emblaCarouselItems"
        :key="item?.id || i"
        class="embla__slide relative overflow-hidden"
        @mouseenter="() => { hoveredIndex = i; stopAutoScroll(); }"
        @mouseleave="() => { hoveredIndex = null; startAutoScroll(); }"
      >
        <NuxtLink
          :to="{ name: 'galleries-galleryId', params: { galleryId: item.id } }"
          class="block w-full h-full"
        >
          <img
            :src="useRuntimeConfig().public.apiBase + item?.thumbnail"
            :alt="item?.title ?? ''"
            class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <transition name="fade-up">
            <div
              v-if="hoveredIndex === i"
              class="absolute bottom-3 left-4 text-white drop-shadow-md"
            >
              <h3 class="text-lg md:text-xl font-medium">{{ item?.title }}</h3>
            </div>
          </transition>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
/* HERO SLIDER */
.embla-hero {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

.embla-hero .embla__container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 0 10px;
  box-sizing: border-box;
}

.embla-hero .embla__slide {
  flex: 0 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  transition: transform 0.4s ease;
}

/* Desktop: 3 foto sejajar */
.embla-hero .embla__slide {
  flex-basis: calc(33.333% - 13px);
  aspect-ratio: 3 / 2;
}

/* Tablet */
@media (max-width: 1024px) {
  .embla-hero .embla__slide {
    flex-basis: calc(50% - 10px);
    aspect-ratio: 4 / 3;
  }
}

/* Mobile: portrait */
@media (max-width: 640px) {
  .embla-hero .embla__slide {
    flex-basis: 70%;
    aspect-ratio: 3 / 4;
  }

  .embla-hero .embla__container {
    gap: 12px;
    padding: 0 8px;
  }
}

/* Animasi Judul */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Hindari scroll horizontal global */
html,
body {
  overflow-x: hidden;
}
</style>
