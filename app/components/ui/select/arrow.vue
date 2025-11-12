<script lang="ts" setup>
import type { SelectArrowProps } from "reka-ui";

import { SelectArrow, useForwardProps } from "reka-ui";

const props = withDefaults(defineProps<SelectArrowProps>(), {
  width: 10,
  height: 5,
});
</script>

<template>
  <SelectArrow v-bind="useForwardProps(props)" />
</template>
