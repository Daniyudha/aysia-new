<script lang="ts" setup>
import type { SelectSeparatorProps } from "reka-ui";

import { SelectSeparator } from "reka-ui";

const props = defineProps<
  SelectSeparatorProps & {
    /** Custom class(es) to add to the parent */
    class?: any;
  }
>();
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "-mx-1 my-1 h-px bg-muted",
});
</script>

<template>
  <SelectSeparator :class="styles({ class: props.class })" v-bind="forwarded" />
</template>
