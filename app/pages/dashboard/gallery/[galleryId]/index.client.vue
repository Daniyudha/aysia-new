<script setup lang="ts">
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

defineProps<{
  galleryId?: string;
}>();

const crumbs: Crumbs[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Detail Gallery",
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
        to="/dashboard/gallery"
        class="inline-flex items-center justify-center gap-3"
      >
        <Icon name="heroicons:arrow-long-left-16-solid" />
        <span class="inline-block">Back</span>
      </NuxtLink>
    </UiCardHeader>
    <ManageGalleryDetailContent :gallery-id="$props?.galleryId ?? ''" />
  </UiCard>
</template>
