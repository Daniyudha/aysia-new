<script setup lang="ts">
defineProps<{
  image: string;
  category: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <section class="pb-12">
  <div class="app-container">
    <div class="grid grid-cols-2 gap-10">

      <!-- IMAGE -->
      <div class="col-span-2 lg:col-span-1">
        <div class=" overflow-hidden rounded-md">
          <img
            :src="`${useRuntimeConfig().public.apiBase}${$props.image}`"
            :alt="$props?.title"
            class=" object-cover"
          >
        </div>
      </div>

      <!-- TEXT -->
      <div class="col-span-2 lg:col-span-1 flex flex-col justify-center">
        <p class="text-[2rem] text-app-secondary">{{ $props?.category }}</p>

        <h1 class="mb-4 font-medium text-[4rem] leading-[100%]">
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
