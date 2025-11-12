<script lang="ts" setup>
const props = withDefaults(defineProps<{
  currentPage?: number;
  totalPages?: number;
}>(), {
  currentPage: 1,
  totalPages: 1,
});

const { updateQueryParams } = useQueryParams();

function goToPage(page: number) {
  if (page < 1 || page > props?.totalPages)
    return;
  updateQueryParams({ page });
}
</script>

<template>
  <section class="py-5">
    <div class="app-container text-app-secondary">
      <div class="flex items-center justify-between gap-4">
        <button
          :disabled="$props?.currentPage === 1"
          type="button"
          class="inline-flex gap-[0.25rem] items-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          @click="goToPage(currentPage - 1)"
        >
          <Icon
            name="heroicons:arrow-left-20-solid"
            width="20"
            height="20"
          />
          <span class="inline-block text-xl">Page {{ currentPage === 1 ? 1 : currentPage - 1 }}</span>
        </button>
        <p class="text-[1.75rem] font-bold">
          {{ currentPage }}
        </p>
        <button
          type="button"
          :disabled="$props?.currentPage === $props?.totalPages"
          class="inline-flex gap-[0.25rem] items-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          @click="goToPage(currentPage + 1)"
        >
          <span class="inline-block text-xl">Page {{ currentPage === totalPages ? totalPages : currentPage + 1 }}</span>
          <Icon
            name="heroicons:arrow-left-20-solid"
            class="rotate-180"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  </section>
</template>
