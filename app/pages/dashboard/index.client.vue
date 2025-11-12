<script setup lang="ts">
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
  },
];

definePageMeta({
  layout: "dashboard",
  middleware: ["dashboard"],
  crumbs,
});
</script>

<template>
  <div>
    <UiCard
      class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50 py-16"
    >
      <UiCardHeader class="text-center font-bold text-dashboard-accent-50 text-5xl mb-6">
        Welcome to the Dashboard
      </UiCardHeader>
      <p class="text-center text-dashboard-neutral-500 text-xl">
        Here you can manage your settings and preferences.
      </p>
    </UiCard>
  </div>
</template>
