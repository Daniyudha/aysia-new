<script lang="ts" setup>
import { journeyFetcher } from "~/repository/modules/journey";
import ManageExploreForm from "../manage-explore/form.vue";

const props = defineProps<{
  exploreId: string;
}>();

const { data: detailExploreData, pending: detailExplorePending, error: detailExploreError } = await useAsyncData(
  "GET_DETAIL_EXPLORE_BY_ID",
  async () => {
    if (!props?.exploreId) {
      return;
    }
    return journeyFetcher().getById(props.exploreId);
  },
  { lazy: true, watch: [props] },
);
</script>

<template>
  <UiCardContent>
    <template v-if="detailExplorePending">
      <p>Loading...</p>
    </template>
    <template v-else-if="(!detailExplorePending && !!detailExploreError) || (!detailExploreData && !detailExplorePending)">
      <p>Data not found.</p>
    </template>
    <template v-else>
      <ManageExploreForm
        :default-value="detailExploreData"
        mode="update"
      />
    </template>
  </UiCardContent>
</template>