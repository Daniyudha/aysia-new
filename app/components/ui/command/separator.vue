<script lang="ts" setup>
import type { ComboboxSeparatorProps } from "reka-ui";

import { ComboboxSeparator } from "reka-ui";

const props = defineProps<
  ComboboxSeparatorProps & {
    class?: any;
  }
>();
const styles = tv({
  base: "-mx-1 h-px bg-dashboard-neutral-100",
});
</script>

<template>
  <ComboboxSeparator
    :as-child="asChild"
    :class="styles({ class: props.class })"
  >
    <slot />
  </ComboboxSeparator>
</template>
