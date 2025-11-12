<script setup lang="ts">
import { categoryFetcher } from "~/repository/modules/category";

const { selectedItem, handleShowModal, handleCloseModal, showModal }
  = useModalForm<GalleryCategoryResponse>();
const { currentQueryParams } = useQueryParams();

const { data, pending, refresh, error } = await useAsyncData(
  "MANAGE_CATEGORY",
  async () => {
    const params: PaginationParams = {};
    if (currentQueryParams?.value?.page && !Number.isNaN(Number(currentQueryParams.value.page))) {
      params.page = Number(currentQueryParams.value.page);
    }
    if (currentQueryParams?.value?.perPage && !Number.isNaN(Number(currentQueryParams.value.perPage))) {
      params.limit = Number(currentQueryParams.value.perPage);
    }

    return categoryFetcher().get(params);
  },
  { lazy: true, watch: [currentQueryParams] },
);
</script>

<template>
  <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
    <h3 class="font-semibold text-lg text-dashboard-accent-50">
      Manage Category
    </h3>
    <div class="flex flex-col md:flex-row justify-end gap-4 items-center">
      <button
        type="button"
        class="text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center"
        @click="handleShowModal({ type: 'ADD' })"
      >
        + Add
      </button>
    </div>
  </UiCardHeader>
  <UiCardContent class="!px-0 !pb-0">
    <ManageCategoryTable
      :items="(data?.data ?? []).slice().reverse()"
      :is-loading="pending"
      :is-error="!!error"
      @on-select-to-edit="
        (selectedItem) =>
          handleShowModal({
            type: 'UPDATE',
            selectedItem,
          })
      "
      @on-refresh="refresh"
    />
  </UiCardContent>
  <ClientOnly>
    <UiDialog v-model:open="showModal">
      <UiDialogContent
        class="max-w-[600px] border-dashboard-neutral-100/60 shadow-none bg-dashboard-neutral-50"
        :title="selectedItem ? 'Update Category' : 'Create New Category'"
        description="Fill the form below to create or update a category."
      >
        <template #content>
          <ManageCategoryForm
            :default-value="selectedItem"
            @on-hide-modal="() => handleCloseModal()"
            @on-refresh="() => refresh()"
          />
        </template>
      </UiDialogContent>
    </UiDialog>
  </ClientOnly>
</template>
