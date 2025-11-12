<script lang="ts" setup>
import type { ComboboxRootEmits, ComboboxRootProps } from "reka-ui";

import { ComboboxRoot, useForwardPropsEmits } from "reka-ui";

const props = defineProps<
  ComboboxRootProps & {
    class?: any;
  }
>();

const emits = defineEmits<ComboboxRootEmits>();
const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
const styles = tv({
  base: "relative",
});
</script>

<template>
  <ComboboxRoot v-bind="forwarded" :class="styles({ class: props.class })">
    <slot />
  </ComboboxRoot>
</template>
