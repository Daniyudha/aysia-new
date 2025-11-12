<script lang="ts" setup>
import type { TooltipArrowProps } from "reka-ui";

import { TooltipArrow } from "reka-ui";

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  width: 10,
  height: 5,
});
</script>

<template>
  <TooltipArrow v-bind="props" />
</template>
