<script lang="ts" setup>
import type { ComboboxContentEmits, ComboboxContentProps } from "reka-ui";

import { ComboboxContent, useForwardPropsEmits } from "reka-ui";

defineOptions({ inheritAttrs: false });

const props = defineProps<
  ComboboxContentProps & {
    class?: any;
  }
>();

const emits = defineEmits<ComboboxContentEmits>();
const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);

const styles = tv({
  base: "max-h-[300px] overflow-y-auto overflow-x-hidden",
});
</script>

<template>
  <ComboboxContent v-bind="forwarded" :class="styles({ class: props.class })">
    <slot />
  </ComboboxContent>
</template>
