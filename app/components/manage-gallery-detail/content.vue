<script lang="ts" setup>
import { journeyFetcher } from "~/repository/modules/journey";
import { journeyDetailFetcher } from "~/repository/modules/journey-detail";

const props = defineProps<{
  galleryId: string;
}>();

const { data: detailJourneyData, pending: detailJourneyPending, error: detailJourneyError } = await useAsyncData(
  "GET_DETAIL_JOURNEY_BY_ID",
  async () => {
    if (!props?.galleryId) {
      return;
    }
    return journeyFetcher().getById(props.galleryId);
  },
  { lazy: true, watch: [props] },
);
const { data: journeyDetailData, pending: journeyDetailPending, error: journeyDetailError, refresh: journeyDetailRefresh } = await useAsyncData(
  "JOURNEY_DETAIL_BY_ID",
  async () => {
    if (!props?.galleryId) {
      return;
    }
    const data = await journeyDetailFetcher().getByJourneyId({
      journeyId: props?.galleryId,
      limit: 1000, // Increased limit to show all items
    });
    return data;
  },
  { lazy: true, watch: [props] },
);
</script>

<template>
  <UiCardContent>
    <UiAccordion
      type="multiple"
      collapsible
      class="w-full"
      :default-value="['detail-table', 'detail-form']"
    >
      <UiAccordionItem value="detail-form">
        <UiAccordionTrigger
          class="w-full py-2 text-[15px] leading-6 hover:no-underline"
        >
          Detail Form
        </UiAccordionTrigger>
        <UiAccordionContent class="text-muted-foreground">
          <template v-if="detailJourneyPending">
            <p>Loading...</p>
          </template>
          <template v-else-if="(!detailJourneyPending && !!detailJourneyError) || (!detailJourneyData && !detailJourneyPending)">
            <p>Data not data.</p>
          </template>
          <template v-else>
            <ManageGalleryDetailForm
              :default-value="detailJourneyData"
              mode="update"
              :is-header="true"
            />
          </template>
        </UiAccordionContent>
      </UiAccordionItem>
      <UiAccordionItem value="detail-table">
        <UiAccordionTrigger
          class="w-full py-2 text-[15px] leading-6 hover:no-underline"
        >
          Portfolio Item
        </UiAccordionTrigger>
        <UiAccordionContent class="text-muted-foreground">
          <ManageGalleryDetailTable
            :items="journeyDetailData"
            :is-error="!!journeyDetailError"
            :is-loading="journeyDetailPending"
            @on-refresh-data="journeyDetailRefresh"
          />
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </UiCardContent>
</template>
