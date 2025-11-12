<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();

const { updateQueryParams, currentQueryParams } = useQueryParams();

function applyFilter() {
  if (!props.value) {
    return;
  }
  updateQueryParams({
    category: props.value !== "all" ? props.value : undefined,
    page: 1,
  });
}
</script>

<template>
  <button
    :data-filter="$props.value"
    role="tab"
    type="button"
    aria-controls="content-area"
    :aria-selectedd="props.value === currentQueryParams?.category"
    :tabindex="
      props.value === currentQueryParams?.category ? 0 : -1
    "
    class="px-2 text-md font-light transition-all duration-300 cursor-pointer hover:underline"
    :class="{
      'font-medium underline':
        props.value === currentQueryParams?.category,
    }"
    @click="applyFilter"
  >
    <slot />
  </button>
</template>
