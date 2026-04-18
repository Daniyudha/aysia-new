<script lang="ts" setup>
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Manage Portfolio",
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
