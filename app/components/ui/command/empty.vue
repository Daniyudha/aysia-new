<script lang="ts" setup>
import type { ComboboxEmptyProps } from "reka-ui";

import { ComboboxEmpty } from "reka-ui";

const props = defineProps<
  ComboboxEmptyProps & {
    class?: any;
  }
>();
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "py-6 text-center text-sm",
});
</script>

<template>
  <ComboboxEmpty :class="styles({ class: props.class })" v-bind="forwarded">
    <slot />
  </ComboboxEmpty>
</template>
