<script lang="ts" setup>
import { journeyFetcher } from "~/repository/modules/journey";

const { currentQueryParams } = useQueryParams();

const { data, pending, error, refresh } = await useAsyncData(
  "MANAGE_GALLERY",
  async () => {
    const params: PaginationParams = {};
    if (currentQueryParams?.value?.page && !Number.isNaN(Number(currentQueryParams.value.page))) {
      params.page = Number(currentQueryParams.value.page);
    }
    if (currentQueryParams?.value?.perPage && !Number.isNaN(Number(currentQueryParams.value.perPage))) {
      params.limit = Number(currentQueryParams.value.perPage);
    }

    return journeyFetcher().getAll(params);
  },
  { lazy: true, watch: [currentQueryParams] },
);
</script>

<template>
  <UiCard
    class="border border-dashboard-neutral-100/50 bg-dashboard-neutral-50"
  >
    <ManageGalleryTable
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
    </ManageGalleryTable>
  </UiCard>
</template>
