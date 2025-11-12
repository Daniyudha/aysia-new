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
  return Promise.all([journeyFetcher().getById(galleryId?.value?.toString()), journeyDetailFetcher().getByJourneyId({ journeyId: galleryId.value?.toString() })]);
}, {
  watch: [galleryId],
  lazy: true,
});
</script>

<template>
  <GalleryDetailHero
    :image="data ? data[0]?.thumbnail : ''"
    :category="data ? data[0]?.gallery_category_name : ''"
    :title="data ? data[0]?.title : ''"
    :description="data ? data[0]?.description : ''"
  />
  <DetailImageGrid :journey-detail-items="data ? data[1] : []" :pending="pending" />
</template>
