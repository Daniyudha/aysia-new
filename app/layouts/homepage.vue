<script setup lang="ts">
import { socialMediaFetchData } from "~/repository/modules/social-media";

useHead({
  htmlAttrs: {
    class: "custom-font",
  },
});

const { data } = useAsyncData("social-media", () => socialMediaFetchData().getAll(), {
  lazy: true,
});
</script>

<template>
  <AppHomepageHeader :social-media="data" />
  <main class="flex-1 flex flex-col">
    <slot />
  </main>
  <AppFooter :social-media="data" />
</template>
