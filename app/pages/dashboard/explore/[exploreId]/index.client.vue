<script setup lang="ts">
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

defineProps<{
  exploreId?: string;
}>();

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Detail Explore",
  },
];

definePageMeta({
  layout: "dashboard",
  props: true,
  crumbs,
});
</script>

<template>
  <UiCard
    class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50"
  >
    <UiCardHeader class="justify-start flex-row">
      <NuxtLink
        to="/dashboard/explore"
        class="inline-flex items-center justify-center gap-3"
      >
        <Icon name="heroicons:arrow-long-left-16-solid" />
        <span class="inline-block">Back</span>
      </NuxtLink>
    </UiCardHeader>
    <ManageExploreDetailContent :explore-id="$props?.exploreId ?? ''" />
  </UiCard>
</template>