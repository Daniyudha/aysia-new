<script setup lang="ts">
defineProps<{
  imageUrl: string;
  disabled?: boolean;
}>();
defineEmits<{
  onDeleteImage: () => void;
}>();
</script>

<template>
  <div
    class="inline-flex w-auto cursor-pointer items-center justify-center rounded-md border border-dashboard-neutral-100 border-dashed transition relative group"
  >
    <img :src="$props.imageUrl" class="max-w-full h-auto">
    <div
      v-if="!$props?.disabled"
      class="absolute z-10 opacity-0 group-hover:opacity-100 bg-black/80 top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4"
    >
      <button
        type="button"
        class="inline-flex items-center justify-center text-white text-lg cursor-pointer"
        @click="$emit('onDeleteImage')"
      >
        <Icon name="lucide:trash" />
      </button>
    </div>
  </div>
</template>
