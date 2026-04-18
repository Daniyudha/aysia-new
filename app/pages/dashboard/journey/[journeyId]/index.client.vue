<script setup lang="ts">
import { computed } from "vue";

import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

import { blogFetcher } from "~/repository/modules/blog";

const route = useRoute();
const journeyId = computed(() => route.params.journeyId as string);

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Manage Journey",
    link: "/dashboard/journey",
  },
  {
    label: "Edit Journey",
  },
];

definePageMeta({
  layout: "dashboard",
  crumbs,
});

const { data: journeyData, pending, error } = await useAsyncData(
  `JOURNEY_${journeyId.value}`,
  async () => {
    const id = journeyId.value;
    if (!id)
      return null;
    return blogFetcher().getById(id);
  },
  { lazy: true, watch: [journeyId] },
);
</script>

<template>
  <UiCard
    class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50"
  >
    <UiCardHeader
      class="flex !flex-row py-4 !items-center text-dashboard-accent-50 border-b border-dashboard-neutral-100/50"
    >
      <NuxtLink
        to="/dashboard/journey"
        class="inline-flex items-center justify-center mt-2 mr-4 text-xl"
      >
        <Icon name="heroicons:arrow-long-left-16-solid" />
        <span class="sr-only">Back</span>
      </NuxtLink>
      <h3 class="font-semibold text-lg text-dashboard-accent-50">
        Edit Journey
      </h3>
    </UiCardHeader>
    <template v-if="pending">
      <UiCardContent class="py-8 text-center">
        <p>Loading journey data...</p>
      </UiCardContent>
    </template>
    <template v-else-if="error">
      <UiCardContent class="py-8 text-center">
        <p class="text-dashboard-danger-50">
          Failed to load journey data.
        </p>
      </UiCardContent>
    </template>
    <template v-else>
      <ManageJourneyForm
        :default-value="journeyData"
        mode="update"
      />
    </template>
  </UiCard>
</template>
