<script setup lang="ts">
import { pagesAboutFetchData } from "~/repository/modules/pages-about";

const { data } = await useAsyncData(
  "MANAGE_ABOUT_PAGE",
  () => pagesAboutFetchData().getAll({ limit: 1 }),
  { lazy: true },
);
</script>

<template>
  <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
    <h3 class="font-semibold text-lg text-dashboard-accent-50">
      About Page Form
    </h3>
  </UiCardHeader>
  <UiCardContent class="">
    <ManageAboutForm
      :default-value="data?.data?.[0]"
    />
  </UiCardContent>
</template>
