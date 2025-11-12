<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui";

import { Primitive } from "reka-ui";

const props = defineProps<
  PrimitiveProps & {
    class?: any;
    /** The shortcut text to render */
    shortcut?: any;
  }
>();
const styles = tv({
  base: "ml-auto text-xs tracking-widest text-muted-foreground",
});
</script>

<template>
  <Primitive
    :as="as || 'span'"
    :as-child="asChild"
    :class="styles({ class: props.class })"
  >
    <slot>{{ shortcut }}</slot>
  </Primitive>
</template>
