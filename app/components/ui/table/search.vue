<script lang="ts" setup>
const emits = defineEmits<{
  (e: "onSearch", searcValue: string): void;
}>();

const search = ref<string>("");

function onPressEnter() {
  if (search?.value?.length) {
    emits("onSearch", search.value);
  }
}
</script>

<template>
  <div class="max-w-[350px] relative w-full">
    <input
      v-bind="$attrs"
      v-model="search"
      class="peer w-full ring-dashboard-neutral-100 focus-visible:!ring-dashboard-warning-50 ring-1 pl-4 pr-10 py-2 rounded-md focus:ring-2 focus:ring-dashboard-warning-50 outline-none focus:border-0 transition-all text-app-secondary focus:shadow-dashboard-warning-50"
      @keyup.enter="onPressEnter"
    >
    <Icon
      name="lucide:search"
      class="absolute top-1/2 -translate-y-1/2 right-4 opacity-50 peer-focus:text-dashboard-warning-50 peer-focus:opacity-100 peer-focus-visible:text-dashboard-warning-50"
    />
  </div>
</template>
