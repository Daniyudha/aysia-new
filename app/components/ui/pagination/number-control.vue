<script lang="ts" setup>
const props = withDefaults(defineProps<{
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

const { updateQueryParams, currentQueryParams } = useQueryParams();

function generatePaginationText({ total, page, limit }: { total: number; page: number; limit: number }) {
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  if (total === 0) {
    return "0 of 0";
  }

  return `${start}-${end} <span class="text-dashboard-accent-50/50">of ${total}</span>`;
}

function handlePageChange(newPage: number) {
  updateQueryParams({ ...currentQueryParams.value, page: newPage === 1 ? undefined : newPage });
}

const currentPaginationStatus = computed(() => generatePaginationText({
  total: props?.totalItem,
  page: props?.currentPage,
  limit: props?.limit,
}));
</script>

<template>
  <div class="flex items-center gap-6">
    <p class="text-sm font-medium" v-html="currentPaginationStatus" />
    <div class="space-x-4">
      <button
        type="button"
        class="disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        :disabled="props.currentPage === 1"
        @click="handlePageChange(props.currentPage - 1)"
      >
        <Icon name="lucide:chevron-left" />
      </button>
      <button
        type="button"
        class="disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        :disabled="props.currentPage === props.totalPages"
        @click="handlePageChange(props.currentPage + 1)"
      >
        <Icon name="lucide:chevron-right" />
      </button>
    </div>
  </div>
</template>
