<script lang="ts" setup>
import { journeyFetcher } from "~/repository/modules/journey";

defineProps<{
  items: JourneyResponse[];
  isLoading?: boolean;
  isError?: boolean;
}>();

const emits = defineEmits<{
  (e: "onRefresh"): void;
}>();
const { $confirmDelete } = useNuxtApp();

async function handleDeleteExplore(title: string, id: string) {
  if (!id?.length)
    return;
  const isDeleted = await $confirmDelete(title, async () => {
    return journeyFetcher().deleteById(id);
  });
  if (isDeleted) {
    emits("onRefresh");
  }
}
</script>

<template>
  <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
    <h3 class="font-semibold text-lg text-dashboard-accent-50">
      Manage Explore
    </h3>
    <div class="flex flex-col md:flex-row justify-end gap-4 items-center">
      <NuxtLink
        class="text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center"
        to="/dashboard/explore/add"
      >
        + Add
      </NuxtLink>
    </div>
  </UiCardHeader>
  <UiCardContent class="!px-0 !pb-0">
    <UiTable
      :data="$props?.items ?? []"
      :is-loading="isLoading"
      :is-error="isError"
      :header-count="6"
    >
      <template #head>
        <UiTableRow>
          <UiTableHead>No.</UiTableHead>
          <UiTableHead>Title</UiTableHead>
          <UiTableHead>Category</UiTableHead>
          <UiTableHead>Tag</UiTableHead>
          <UiTableHead>Content</UiTableHead>
          <UiTableHead width="75" />
        </UiTableRow>
      </template>
      <template #body>
        <template v-for="(item, index) in $props?.items" :key="item?.id">
          <UiTableRow class="last:[&>td]:!border-0">
            <UiTableData>{{ index + 1 }}</UiTableData>
            <UiTableData>{{ item?.title }}</UiTableData>
            <UiTableData>{{ item?.gallery_category_name }}</UiTableData>
            <UiTableData>{{ item?.tag }}</UiTableData>
            <UiTableData>
              <div class="line-clamp-2" v-html="item?.description" />
            </UiTableData>
            <UiTableData>
              <div class="flex gap-2">
                <NuxtLink
                  :to="{
                    name: 'dashboard-explore-exploreId',
                    params: {
                      exploreId: item?.id,
                    },
                  }"
                  class="group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                >
                  <Icon
                    name="lucide:pencil"
                    class="opacity-70 group-hover:text-dashboard-info-50"
                  />
                </NuxtLink>
                <button
                  type="button"
                  class="group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                  @click="() => handleDeleteExplore(item?.title, item?.id)"
                >
                  <Icon
                    name="lucide:trash-2"
                    class="opacity-70 group-hover:text-dashboard-danger-50"
                  />
                </button>
              </div>
            </UiTableData>
          </UiTableRow>
        </template>
      </template>
    </UiTable>
  </UiCardContent>
  <slot />
</template>