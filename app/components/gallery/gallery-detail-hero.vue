<script setup lang="ts">
defineProps<{
  image: string;
  category: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <section class="pb-14">
    <div class="app-container">
      <div class="flex flex-col lg:flex-row md:justify-between gap-4">
        <div class="lg:w-5/12">
          <img
            :src="`${useRuntimeConfig().public.apiBase}${$props.image}`"
            :alt="$props?.title"
            class="w-full h-auto"
          >
        </div>
        <div class="lg:w-6/12 text-app-secondary">
          <p class="text-[2.25rem]">
            {{ $props?.category }}
          </p>
          <h1 class="mb-8 font-medium text-[8rem] leading-[100%] tracking-[0]">
            {{ $props?.title }}
          </h1>
          <div
            class="prose font-sans font-thin space-y-4"
            v-html="$props.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
