<script setup lang="ts">
import type { AccordionItemProps } from "reka-ui";

import { AccordionItem } from "reka-ui";

const props = defineProps<
  AccordionItemProps & {
    /** Custom class(es) to add to the parent */
    class?: any;
  }
>();

const forwarded = reactiveOmit(props, "class");

const styles = tv({
  base: "border-x border-t last:border-b border-dashboard-neutral-100/80 px-4 py-1 first:rounded-t-lg last:rounded-b-lg",
});
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    v-bind="forwarded"
    :class="styles({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>
