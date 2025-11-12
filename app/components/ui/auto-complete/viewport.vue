<script lang="ts" setup>
import type { ComboboxViewportProps } from "reka-ui";

import { ComboboxViewport } from "reka-ui";

const props = defineProps<ComboboxViewportProps>();
</script>

<template>
  <ComboboxViewport v-bind="props">
    <slot />
  </ComboboxViewport>
</template>
