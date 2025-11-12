<script lang="ts" setup>
import type { ComboboxRootEmits, ComboboxRootProps } from "reka-ui";

import { ComboboxRoot, useForwardPropsEmits } from "reka-ui";

const props = defineProps<ComboboxRootProps & { class?: any }>();
const emits = defineEmits<ComboboxRootEmits>();

const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);

const styles = tv({
  base: "flex h-full w-full flex-col overflow-hidden rounded-md bg-dashboard-neutral-50 text-popover-foreground",
});
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    :open="true"
    :class="styles({ class: props.class })"
  >
    <slot />
  </ComboboxRoot>
</template>
