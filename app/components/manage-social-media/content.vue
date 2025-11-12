<script setup lang="ts">
import { socialMediaFetchData } from "~/repository/modules/social-media";

const { data, pending, error } = await useAsyncData(
  "MANAGE_SOCIAL_MEDIA",
  async () => socialMediaFetchData().getAll(),
  { lazy: true },
);
</script>

<template>
  <UiCardHeader class="flex md:!flex-row justify-between py-4 md:items-center">
    <h3 class="font-semibold text-lg text-dashboard-accent-50">
      Manage Social Media
    </h3>
  </UiCardHeader>
  <UiCardContent>
    <ManageSocialMediaForm
      :default-value="data"
      :is-loading="pending"
      :is-error="!!error"
    />
  </UiCardContent>
</template>
