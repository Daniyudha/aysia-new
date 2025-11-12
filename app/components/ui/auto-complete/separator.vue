<script lang="ts" setup>
import type { ComboboxSeparatorProps } from "reka-ui";

import { ComboboxSeparator } from "reka-ui";

const props = defineProps<ComboboxSeparatorProps>();
</script>

<template>
  <ComboboxSeparator v-bind="props">
    <slot />
  </ComboboxSeparator>
</template>
