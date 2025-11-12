<script lang="ts" setup>
import type { SelectScrollUpButtonProps } from "reka-ui";

import { SelectScrollUpButton } from "reka-ui";

const props = defineProps<
  SelectScrollUpButtonProps & {
    /** Icon to render */
    icon?: string;
  }
>();
const forwarded = reactiveOmit(props, "icon");
</script>

<template>
  <SelectScrollUpButton v-bind="forwarded">
    <slot>
      <Icon :name="icon || 'lucide:chevron-up'" class="h-5 w-5" />
    </slot>
  </SelectScrollUpButton>
</template>
