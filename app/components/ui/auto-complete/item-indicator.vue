<script lang="ts" setup>
import type { ComboboxItemIndicatorProps } from "reka-ui";

import { ComboboxItemIndicator } from "reka-ui";

const props = defineProps<
  ComboboxItemIndicatorProps & {
    icon?: string;
  }
>();
</script>

<template>
  <ComboboxItemIndicator v-bind="props">
    <slot><Icon :name="icon || 'ph:check'" class="h-4 w-4" /></slot>
  </ComboboxItemIndicator>
</template>
