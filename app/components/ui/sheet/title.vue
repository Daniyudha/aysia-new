<script lang="ts" setup>
import type { DialogTitleProps } from "reka-ui";

import { DialogTitle } from "reka-ui";

const props = defineProps<
  DialogTitleProps & {
    /** Custom class(es) to add to parent element */
    class?: any;
    /** Title text */
    title?: string;
  }
  >();
const forwarded = reactiveOmit(props, "class", "title");
const styles = tv({
  base: "text-lg font-semibold text-foreground",
});
</script>

<template>
  <DialogTitle :class="styles({ class: props.class })" v-bind="forwarded">
    <slot>{{ title }}</slot>
  </DialogTitle>
</template>
