<script lang="ts" setup>
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Social Media",
  },
];

definePageMeta({
  layout: "dashboard",
  crumbs,
});

useHead({
  title: "Aysia LinggarWati - Management Social Media",
});
</script>

<template>
  <UiCard
    class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50"
  >
    <ManageSocialMediaContent />
  </UiCard>
</template>
