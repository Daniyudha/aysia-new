<script lang="ts" setup>
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Manage Gallery",
  },
];

definePageMeta({
  layout: "dashboard",
  crumbs,
});
</script>

<template>
  <ManageGalleryContent />
</template>
