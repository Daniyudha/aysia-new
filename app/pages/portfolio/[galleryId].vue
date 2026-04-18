<script setup lang="ts">
import DetailImageGrid from "~/components/gallery/detail-image-grid.vue";
import { journeyFetcher } from "~/repository/modules/journey";
import { journeyDetailFetcher } from "~/repository/modules/journey-detail";

useHead({
  title: "Aysia LinggarWati - Explore Cuba",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore our portfolio and discover the essence of our work.",
    },
    {
      name: "keywords",
      content: "Aysia LinggarWati, portfolio, creative, design, elegance",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});

const route = useRoute();
const galleryId = computed(() => route.params.galleryId);

const { data, pending } = useAsyncData("journey detail", async () => {
  if (!galleryId.value)
    return;
  console.debug('[portfolio page] fetching journey details for galleryId:', galleryId.value);
  try {
    const [journeyData, journeyDetailData] = await Promise.all([
      journeyFetcher().getById(galleryId?.value?.toString()),
      journeyDetailFetcher().getByJourneyId({ journeyId: galleryId.value?.toString(), limit: 1000 }),
    ]);
    console.debug('[portfolio page] journeyData:', journeyData);
    console.debug('[portfolio page] journeyDetailData:', journeyDetailData);
    // Reverse the journey detail array to show newest items at the bottom in public gallery
    const reversedJourneyDetailData = journeyDetailData ? [...journeyDetailData].reverse() : journeyDetailData;
    return { journey: journeyData, details: reversedJourneyDetailData };
  } catch (error) {
    console.error('[portfolio page] error fetching data:', error);
    throw error;
  }
}, {
  watch: [galleryId],
  lazy: true,
});
</script>

<template>
  <GalleryDetailHero
    :image="data?.journey?.thumbnail ?? ''"
    :category="data?.journey?.gallery_category_name ?? ''"
    :title="data?.journey?.title ?? ''"
    :tag="data?.journey?.tag ?? ''"
    :description="data?.journey?.description ?? ''"
  />
  <DetailImageGrid :journey-detail-items="data?.details ?? []" :pending="pending" />
</template>
