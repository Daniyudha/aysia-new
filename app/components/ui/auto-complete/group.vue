<script lang="ts" setup>
import type { ComboboxGroupProps } from "reka-ui";

import { ComboboxGroup } from "reka-ui";

const props = defineProps<ComboboxGroupProps>();
</script>

<template>
  <ComboboxGroup v-bind="props">
    <slot />
  </ComboboxGroup>
</template>
