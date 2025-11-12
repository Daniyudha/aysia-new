<script setup lang="ts">
defineProps<{
  items: PageAboutResponse[];
  isLoading?: boolean;
  isError?: boolean;
}>();

defineEmits<{
  (e: "onSelectToEdit", item: PageAboutResponse): void;
}>();
</script>

<template>
  <UiTable
    :data="$props?.items"
    :header-count="7"
    :is-error="$props?.isError"
    :is-loading="$props?.isLoading"
  >
    <template #head>
      <UiTableRow>
        <UiTableHead>ID</UiTableHead>
        <UiTableHead>Thumbnail</UiTableHead>
        <UiTableHead>Title</UiTableHead>
        <UiTableHead>Description</UiTableHead>
        <UiTableHead>Created At</UiTableHead>
        <UiTableHead>Last Update</UiTableHead>
        <UiTableHead />
      </UiTableRow>
    </template>
    <template #body>
      <template v-for="(item, index) in $props.items" :key="item.id">
        <UiTableRow>
          <UiTableData>{{ index + 1 }}</UiTableData>
          <UiTableData>
            <img
              :alt="item?.id"
              :src="item?.thumbnail"
              class="max-w-24 h-auto"
            >
          </UiTableData>
          <UiTableData>
            {{ item?.title ?? "" }}
          </UiTableData>
          <UiTableData>
            <div v-html="item?.description" />
          </UiTableData>
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
          </UiTableData>
        </UiTableRow>
      </template>
    </template>
  </UiTable>
</template>
