<script lang="ts" setup>
import type { PopoverPortalProps } from "reka-ui";

import { PopoverPortal, useForwardProps } from "reka-ui";

const props = defineProps<PopoverPortalProps>();
const forwarded = useForwardProps(props);
</script>

<template>
  <PopoverPortal v-bind="forwarded">
    <slot />
  </PopoverPortal>
</template>
