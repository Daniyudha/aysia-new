<script lang="ts" setup>
import type { ComboboxCancelProps } from "reka-ui";

import { ComboboxCancel } from "reka-ui";

const props = defineProps<ComboboxCancelProps>();
</script>

<template>
  <ComboboxCancel v-bind="props">
    <slot />
  </ComboboxCancel>
</template>
