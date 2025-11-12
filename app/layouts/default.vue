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

provide("socialMedia", data);
</script>

<template>
  <AppHeader />
  <main class="md:flex-1">
    <slot />
  </main>
  <AppFooter :social-media="data" />
</template>
