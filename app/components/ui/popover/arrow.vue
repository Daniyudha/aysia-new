<script lang="ts" setup>
import type { PopoverArrowProps } from "reka-ui";

import { PopoverArrow, useForwardProps } from "reka-ui";

const props = withDefaults(defineProps<PopoverArrowProps>(), {
  width: 10,
  height: 5,
});

const forwarded = useForwardProps(props);
</script>

<template>
  <PopoverArrow v-bind="forwarded" />
</template>
