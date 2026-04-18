<script setup lang="ts">
defineProps<{
  image: string;
  category: string;
  title: string;
  tag: string;
  description: string;
}>();
</script>

<template>
  <div class="overflow-hidden">
    <img
      :src="`${useRuntimeConfig().public.apiBase}${$props.image}`"
      :alt="$props?.title"
      class="w-full lg:h-[90vh] object-cover object-center"
    >
  </div>
  <section class="py-8">
    <div class="lg:app-container px-8">
      <div class="max-w-7xl mx-auto">
        <!-- TEXT -->
        <p class="md:text-center text-[28px] md:text-[32px] font-light text-app-secondary font-serif">
          {{ $props?.category }}
        </p>

        <h1 class="md:text-center mb-4 font-serif font-semibold text-app-secondary text-[3rem] md:text-[4rem] leading-[100%]">
          {{ $props?.title }}
        </h1>

        <p class="prose font-sans space-y-4 md:text-center py-4 md:py-8 font-[500] text-app-secondary">
          {{ $props?.tag }}
        </p>

        <div class="prose font-sans font-thin text-app-secondary space-y-4 text-justify" v-html="$props.description" />
      </div>
    </div>
  </section>
</template>
