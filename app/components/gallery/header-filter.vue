<script lang="ts" setup>
import emblaCarouselVue from "embla-carousel-vue";

const props = withDefaults(defineProps<{
  categories?: GalleryCategoryResponse[];
}>(), {
  categories: () => [] as GalleryCategoryResponse[],
});

const [emblaRef, emblaApi] = emblaCarouselVue();
const canScrollPrev = ref(false);
const canScrollNext = ref(false);

function updateButtonStates(emblaApi: EmblaCarouselAPIType) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value)
    return;
  updateButtonStates(emblaApi.value);
  emblaApi.value.on("select", updateButtonStates);
});

function scrollNext() {
  emblaApi.value?.scrollNext();
}

function scrollPrev() {
  emblaApi.value?.scrollPrev();
}

const computedCategories = computed(() => {
  // Remove "All" option and reverse order to match admin display
  return props.categories
    .slice()
    .reverse()
    .map(category => ({
      name: category.name,
      value: category.id,
    }));
});
</script>

<template>
  <div class="w-[98%] mx-auto flex gap-2 items-center justify-between">
    <!-- Tombol kiri -->
    <button
      type="button"
      class="inline-flex disabled:opacity-50 items-center"
      :disabled="!canScrollPrev"
      @click="scrollPrev"
    >
      <Icon name="heroicons:chevron-left-16-solid" />
    </button>

    <!-- Carousel kategori -->
    <div ref="emblaRef" class="filter-embla overflow-hidden relative w-full">
      <div class="filter-embla__container flex" role="tablist">
        <div
          v-for="category in computedCategories"
          :key="category.value"
          class="filter-embla__slide flex-shrink-0 px-2 py-1"
          role="presentation"
        >
          <GalleryFilterButton :value="category.value">
            {{ category.name }}
          </GalleryFilterButton>
        </div>
      </div>
    </div>

    <!-- Tombol kanan -->
    <button
      type="button"
      class="inline-flex disabled:opacity-50 items-center"
      :disabled="!canScrollNext"
      @click="scrollNext"
    >
      <Icon name="heroicons:chevron-left-16-solid" class="rotate-180" />
    </button>
  </div>
</template>

<style scoped>
.filter-embla {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.filter-embla__container {
  display: flex;
  gap: 8px;
  align-items: center;
  transition: transform 0.3s ease;
}

.filter-embla__slide {
  flex: 0 0 auto;
}

/* pastikan tidak terpengaruh hero */
.filter-embla__slide img,
.filter-embla__slide button {
  box-shadow: none !important;
  border: none !important;
  background: none !important;
}

/* Hilangkan efek border / background */
:deep(.GalleryFilterButton) {
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
