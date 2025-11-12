<script setup lang="ts">
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

type TableActionProps = {
  detailLink?:
    | string
    | RouteLocationAsRelativeGeneric
    | RouteLocationAsPathGeneric;
  editLink?:
    | string
    | RouteLocationAsRelativeGeneric
    | RouteLocationAsPathGeneric;
};
type TableActionEmit = {
  onDeleteItem: () => void;
};
defineProps<TableActionProps>();
defineEmits<TableActionEmit>();
</script>

<template>
  <div class="flex items-center gap-2">
    <NuxtLink
      v-if="!!$props?.detailLink"
      :to="$props.detailLink"
      class="group wrapper-action"
    >
      <Icon
        name="lucide:eye"
        class="opacity-70 group-hover:text-dashboard-info-50"
      />
    </NuxtLink>
    <NuxtLink
      v-if="!!$props?.editLink"
      :to="$props.editLink"
      class="group wrapper-action"
    >
      <Icon
        name="lucide:pencil"
        class="opacity-70 group-hover:text-dashboard-info-50"
      />
    </NuxtLink>
    <button type="button" class="group wrapper-action">
      <Icon
        name="lucide:trash-2"
        class="opacity-70 group-hover:text-dashboard-danger-50"
      />
    </button>
  </div>
</template>

<style scoped>
@reference "../../../assets/css/main.css";

.wrapper-action {
  @apply opacity-80 hover:opacity-100 cursor-pointer text-lg;
}
</style>
