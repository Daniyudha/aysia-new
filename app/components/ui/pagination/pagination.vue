<script lang="ts" setup>
withDefaults(defineProps<{
  totalPages?: number;
  totalItem?: number;
  limit?: number;
  currentPage?: number;
}>(), {
  totalPages: 1,
  totalItem: 0,
  limit: 10,
  currentPage: 1,
});
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:justify-between w-full gap-4">
    <UiPaginationPerPage />
    <UiPaginationNumberControl v-bind="$props" />
  </div>
</template>
