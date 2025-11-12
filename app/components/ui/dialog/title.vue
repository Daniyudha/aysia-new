<script lang="ts" setup>
import type { DialogTitleProps } from "reka-ui";

import { DialogTitle } from "reka-ui";

const props = defineProps<
  DialogTitleProps & {
    /** Custom class(es) to add to the parent */
    class?: any;
    /** The title text */
    title?: string;
  }
>();
const forwarded = reactiveOmit(props, "class", "title");
const styles = tv({
  base: "text-xl font-semibold leading-none tracking-tight md:text-lg text-dashboard-accent-50 mb-2",
});
</script>

<template>
  <DialogTitle :class="styles({ class: props.class })" v-bind="forwarded">
    <slot>{{ title }}</slot>
  </DialogTitle>
</template>
