<script lang="ts" setup>
import type { ComboboxLabelProps } from "reka-ui";

import { ComboboxLabel } from "reka-ui";

const props = defineProps<
  ComboboxLabelProps & {
    class?: any;
  }
>();

const styles = tv({
  base: "px-2 py-1.5 pl-9 text-sm font-medium text-muted-foreground",
});
</script>

<template>
  <ComboboxLabel :class="styles({ class: props.class })" v-bind="props">
    <slot />
  </ComboboxLabel>
</template>
