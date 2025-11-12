<script lang="ts" setup>
import type { SelectItemIndicatorProps } from "reka-ui";

import { SelectItemIndicator } from "reka-ui";

const props = defineProps<
  SelectItemIndicatorProps & {
    /** Icon to render */
    icon?: string;
    /** Custom class(es) to add to the parent */
    class?: any;
  }
>();
const forwarded = reactiveOmit(props, "class", "icon");
const styles = tv({
  base: "h-4 w-4",
});
</script>

<template>
  <SelectItemIndicator
    v-bind="forwarded"
    class="flex items-center justify-center"
  >
    <slot>
      <Icon
        :class="styles({ class: props.class })"
        :name="icon || 'lucide:check'"
      />
    </slot>
  </SelectItemIndicator>
</template>
