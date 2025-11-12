<script lang="ts" setup>
import type { AccordionContentProps } from "reka-ui";

import { AccordionContent } from "reka-ui";

const props = defineProps<
  AccordionContentProps & {
    /** Custom class(es) to add to the parent */
    class?: any;
    /** The content of the accordion */
    content?: any;
  }
>();

const forwarded = reactiveOmit(props, "class", "content");

const styles = tv({
  base: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
});
</script>

<template>
  <AccordionContent v-bind="forwarded" :class="styles({ class: props.class })">
    <div class="pb-4 pt-0">
      <slot>{{ content }}</slot>
    </div>
  </AccordionContent>
</template>
