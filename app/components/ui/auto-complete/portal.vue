<script lang="ts" setup>
import type { ComboboxPortalProps } from "reka-ui";

import { ComboboxPortal } from "reka-ui";

const props = defineProps<ComboboxPortalProps>();
</script>

<template>
  <ComboboxPortal position="popper" v-bind="props">
    <slot />
  </ComboboxPortal>
</template>
