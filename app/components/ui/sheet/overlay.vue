<script lang="ts" setup>
import type { DialogOverlayProps } from "reka-ui";

import { DialogOverlay } from "reka-ui";

const props = defineProps<
  DialogOverlayProps & {
    /** Custom class(es) to add to parent element */
    class?: any;
  }
  >();
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn",
});
</script>

<template>
  <DialogOverlay :class="styles({ class: props.class })" v-bind="forwarded" />
</template>
