<script lang="ts" setup>
import type { PopoverAnchorProps } from "reka-ui";

import { PopoverAnchor, useForwardProps } from "reka-ui";

const props = defineProps<PopoverAnchorProps>();
const forwarded = useForwardProps(props);
</script>

<template>
  <PopoverAnchor v-bind="forwarded">
    <slot />
  </PopoverAnchor>
</template>
