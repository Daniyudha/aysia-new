<script lang="ts" setup>
import { blogFetcher } from "~/repository/modules/blog";

const { currentQueryParams } = useQueryParams();

const { data, pending, error, refresh } = await useAsyncData(
  "MANAGE_JOURNEY",
  async () => {
    const params: PaginationParams = {};
    if (currentQueryParams?.value?.page && !Number.isNaN(Number(currentQueryParams.value.page))) {
      params.page = Number(currentQueryParams.value.page);
    }
    if (currentQueryParams?.value?.perPage && !Number.isNaN(Number(currentQueryParams.value.perPage))) {
      params.limit = Number(currentQueryParams.value.perPage);
    }

    return blogFetcher().getAll(params);
  },
  { lazy: true, watch: [currentQueryParams], server: false },
);
</script>

<template>
  <UiCard
    class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50"
  >
    <ManageJourneyTable
      :items="data?.data ?? []"
      :is-loading="pending"
      :is-error="!!error"
      @on-refresh="refresh"
    >
      <UiCardFooter class="!py-4">
        <UiPagination
          :total-pages="data?.totalPages ?? 1"
          :total-item="data?.total ?? 0"
          :limit="data?.limit ?? 10"
          :current-page="data?.page ?? 1"
        />
      </UiCardFooter>
    </ManageJourneyTable>
  </UiCard>
</template>
