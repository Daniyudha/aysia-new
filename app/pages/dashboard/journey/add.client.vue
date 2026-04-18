<script lang="ts" setup>
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Add Journey",
  },
];

definePageMeta({
  layout: "dashboard",
  crumbs,
});
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
        Add New Journey
      </h3>
    </UiCardHeader>
    <ManageJourneyForm mode="create" />
  </UiCard>
</template>
