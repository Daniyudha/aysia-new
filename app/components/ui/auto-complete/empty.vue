<script lang="ts" setup>
import type { ComboboxEmptyProps } from "reka-ui";

import { ComboboxEmpty } from "reka-ui";

const props = defineProps<ComboboxEmptyProps>();
</script>

<template>
  <ComboboxEmpty v-bind="props">
    <slot />
  </ComboboxEmpty>
</template>
