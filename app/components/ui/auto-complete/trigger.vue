<script lang="ts" setup>
import type { ComboboxTriggerProps } from "reka-ui";

import { ComboboxTrigger } from "reka-ui";

const props = defineProps<
  ComboboxTriggerProps & {
    class?: any;
  }
>();
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "inline-flex shrink-0 cursor-pointer items-center justify-center",
});
</script>

<template>
  <ComboboxTrigger v-bind="forwarded" :class="styles({ class: props.class })">
    <slot />
  </ComboboxTrigger>
</template>
