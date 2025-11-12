<script setup lang="ts">
import { categoryFetcher } from "~/repository/modules/category";

defineProps<{
  items: GalleryCategoryResponse[];
  isLoading?: boolean;
  isError?: boolean;
}>();

const emit = defineEmits<{
  (e: "onSelectToEdit", id: GalleryCategoryResponse): void;
  (e: "onRefresh"): void;
}>();

const { $confirmDelete } = useNuxtApp();

async function handleDelete(categoryName: string, id: string) {
  const isDeleted = await $confirmDelete(categoryName, async () => {
    return categoryFetcher().deleteById(id);
  });
  if (isDeleted) {
    emit("onRefresh");
  }
}
</script>

<template>
  <UiTable
    :data="items"
    :header-count="5"
    :is-error="$props?.isError"
    :is-loading="$props?.isLoading"
  >
    <template #head>
      <UiTableRow>
        <UiTableHead>ID</UiTableHead>
        <UiTableHead>Category Name</UiTableHead>
        <UiTableHead>Created At</UiTableHead>
        <UiTableHead>Last Update</UiTableHead>
        <UiTableHead />
      </UiTableRow>
    </template>
    <template #body>
      <template v-for="(item, index) in items" :key="item?.id">
        <UiTableRow>
          <UiTableData>{{ index + 1 }}</UiTableData>
          <UiTableData>{{ item?.name }}</UiTableData>
          <UiTableData>{{ formatDateApp(item?.created_at) }}</UiTableData>
          <UiTableData>{{ formatDateApp(item?.updated_at) }}</UiTableData>
          <UiTableData class="space-x-2">
            <button
              type="button"
              class="table-action-button group"
              @click="$emit('onSelectToEdit', item)"
            >
              <Icon
                name="lucide:pencil"
                class="opacity-70 group-hover:text-dashboard-info-50"
              />
            </button>
            <button
              type="button"
              class="group table-action-button"
              @click="() => handleDelete(item?.name, item?.id)"
            >
              <Icon
                name="lucide:trash-2"
                class="opacity-70 group-hover:text-dashboard-danger-50"
              />
            </button>
          </UiTableData>
        </UiTableRow>
      </template>
    </template>
  </UiTable>
</template>
