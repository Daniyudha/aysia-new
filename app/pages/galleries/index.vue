<script setup lang="ts">
import { categoryFetcher } from "~/repository/modules/category";
import { journeyFetcher } from "~/repository/modules/journey";

useHead({
  title: "Aysia LinggarWati - Gallery",
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

const { currentQueryParams, updateQueryParams } = useQueryParams();
const { data } = useAsyncData(
  "journey_categories",
  () => categoryFetcher().get({}),
  {
    lazy: true,
  },
);

// Set default filter to "Human" if no category is selected
const isInitialized = ref(false);
watch([currentQueryParams, data], ([query, categories]) => {
  if (isInitialized.value) return;
  if (categories?.data && !query.category) {
    const humanCategory = categories.data.find((cat: any) => cat.name === 'Human');
    if (humanCategory) {
      isInitialized.value = true;
      updateQueryParams({ category: humanCategory.id });
    }
  }
}, { immediate: true });

const { data: journeys, pending: journeysPending } = useAsyncData(`journey-list-${currentQueryParams.value?.category}-${currentQueryParams.value?.page}`, () => {
  const category = currentQueryParams.value.category;
  const currentPage = currentQueryParams?.value?.page ? Number(currentQueryParams?.value?.page) : 1;
  if (category) {
    return journeyFetcher().getByCategoryId(category?.toString(), { limit: 9, page: currentPage });
  }
  else {
    return journeyFetcher().getAll({ limit: 9, page: currentPage });
  }
}, {
  watch: [currentQueryParams],
  lazy: true,
});
</script>

<template>
  <GalleryHeader>
    <template #filter>
      <GalleryHeaderFilter :categories="data?.data" />
    </template>
  </GalleryHeader>
  <GalleryCollectionGrid :collections="journeys?.data ?? []" :pending="journeysPending" />
  <GalleryPagination :total-pages="journeys?.totalPages ?? 1" :current-page="currentQueryParams?.page ? Number(currentQueryParams?.page) : 1" />
</template>
