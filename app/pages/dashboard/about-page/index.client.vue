<script lang="ts" setup>
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Manage About Page",
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
    <ManageAboutContent />
  </UiCard>
</template>
