<script setup lang="ts">
defineProps<{
  isLoading?: boolean;
  isError?: boolean;
  headerCount: number;
  data: any[];
}>();
</script>

<template>
  <UiTableContainer>
    <table class="w-full" role="table">
      <thead>
        <slot name="head" />
      </thead>
      <tbody>
        <template v-if="isLoading">
          <UiTableRow>
            <UiTableData class="!text-center" :colspan="$props?.headerCount">
              Getting data...
            </UiTableData>
          </UiTableRow>
        </template>
        <template v-else-if="!isLoading && $props?.isError">
          <UiTableRow>
            <UiTableData class="!text-center" :colspan="$props?.headerCount">
              Something went wrong.
            </UiTableData>
          </UiTableRow>
        </template>
        <template v-else-if="!isLoading && !$props?.data?.length">
          <UiTableRow>
            <UiTableData class="!text-center" :colspan="$props?.headerCount">
              No data found.
            </UiTableData>
          </UiTableRow>
        </template>
        <template v-else>
          <slot name="body" />
        </template>
      </tbody>
      <slot name="foot" />
    </table>
  </UiTableContainer>
</template>
