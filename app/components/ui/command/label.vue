<script lang="ts" setup>
import type { ComboboxLabelProps } from "reka-ui";

import { ComboboxLabel } from "reka-ui";

const props = defineProps<
  ComboboxLabelProps & {
    class?: any;
    label?: any;
  }
>();
const forwarded = reactiveOmit(props, "class", "label");
const styles = tv({
  base: "px-2 py-1.5 text-xs font-medium text-muted-foreground",
});
</script>

<template>
  <ComboboxLabel :class="styles({ class: props.class })" v-bind="forwarded">
    <slot>{{ label }}</slot>
  </ComboboxLabel>
</template>
