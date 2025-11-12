<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "custom-font",
  },
});
</script>

<template>
  <main class="py-10 flex-1 flex items-center">
    <div class="mx-auto w-10/12 md:w-7/12 lg:w-4/12">
      <slot />
    </div>
  </main>
</template>
