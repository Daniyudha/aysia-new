<script lang="ts" setup>
import type { SelectLabelProps } from "reka-ui";

import { SelectLabel } from "reka-ui";

const props = defineProps<
  SelectLabelProps & {
    /** Custom class(es) to add to the parent */
    class?: any;
  }
>();
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "py-1.5 pl-8 pr-2 text-sm font-semibold",
});
</script>

<template>
  <SelectLabel :class="styles({ class: props.class })" v-bind="forwarded">
    <slot />
  </SelectLabel>
</template>
