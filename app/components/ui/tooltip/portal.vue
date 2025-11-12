<script lang="ts" setup>
import type { TooltipPortalProps } from "reka-ui";

import { TooltipPortal } from "reka-ui";

const props = defineProps<TooltipPortalProps>();
</script>

<template>
  <TooltipPortal v-bind="props">
    <slot />
  </TooltipPortal>
</template>
