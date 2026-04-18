<script lang="ts" setup>
import type { DropdownMenuArrowProps } from "reka-ui";

import { DropdownMenuArrow } from "reka-ui";

const props = withDefaults(
  defineProps<
    DropdownMenuArrowProps & {
      /** Custom class(es) to add to the parent */
      class?: any;
    }
  >(),
  {
    asChild: false,
    width: 10,
    height: 5,
  },
);
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "rotate-45 border bg-muted",
});
</script>

<template>
  <DropdownMenuArrow v-bind="forwarded" :class="styles({ class: props.class })" />
</template>
