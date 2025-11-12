<script lang="ts" setup>
import type { AccordionHeaderProps } from "reka-ui";

import { AccordionHeader } from "reka-ui";

const props = defineProps<
  AccordionHeaderProps & {
    class?: any;
  }
>();

const forwarded = reactiveOmit(props, "class");

const styles = tv({
  base: "flex",
});
</script>

<template>
  <AccordionHeader v-bind="forwarded" :class="styles({ class: props.class })">
    <slot />
  </AccordionHeader>
</template>
