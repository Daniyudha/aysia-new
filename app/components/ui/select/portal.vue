<script lang="ts" setup>
import type { SelectPortalProps } from "reka-ui";

import { SelectPortal } from "reka-ui";

const props = defineProps<SelectPortalProps>();
</script>

<template>
  <SelectPortal v-bind="props">
    <slot />
  </SelectPortal>
</template>
