<script lang="ts" setup>
import type { ComboboxArrowProps } from "reka-ui";

import { ComboboxArrow } from "reka-ui";

const props = defineProps<
  ComboboxArrowProps & {
    class?: any;
  }
>();

const styles = tv({
  base: "rotate-45 border bg-muted",
});
</script>

<template>
  <ComboboxArrow v-bind="props" :class="styles({ class: props.class })" />
</template>
