<script lang="ts" setup>
import type { ComboboxGroupProps } from "reka-ui";

import { ComboboxGroup } from "reka-ui";

const props = defineProps<
  ComboboxGroupProps & {
    heading?: any;
    class?: any;
  }
>();
const forwarded = reactiveOmit(props, "class", "heading");
const styles = tv({
  base: "overflow-hidden p-1 text-foreground",
});
</script>

<template>
  <ComboboxGroup :class="styles({ class: props.class })" v-bind="forwarded">
    <slot name="heading">
      <UiCommandLabel v-if="heading" :label="heading" />
    </slot>
    <slot />
  </ComboboxGroup>
</template>
