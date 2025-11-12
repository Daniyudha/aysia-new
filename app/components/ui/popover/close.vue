<script lang="ts" setup>
import type { PopoverCloseProps } from "reka-ui";

import { PopoverClose, useForwardProps } from "reka-ui";

const props = defineProps<PopoverCloseProps>();
const forwarded = useForwardProps(props);
</script>

<template>
  <PopoverClose v-bind="forwarded">
    <slot />
  </PopoverClose>
</template>
