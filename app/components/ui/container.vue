<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui";

import { Primitive } from "reka-ui";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: any;
    }
  >(),
  {
    as: "div",
  },
);

const forwarded = reactiveOmit(props, "class");

const styles = tv({
  base: "mx-auto px-4",
});
</script>

<template>
  <Primitive :class="styles({ class: props.class })" v-bind="forwarded">
    <slot />
  </Primitive>
</template>
