<script lang="ts" setup>
import type { DialogDescriptionProps } from "reka-ui";

import { DialogDescription } from "reka-ui";

const props = defineProps<
  DialogDescriptionProps & {
    /** Custom class(es) to add to parent element */
    class?: any;
    /** Description text */
    description?: string;
  }
>();
const forwarded = reactiveOmit(props, "class", "description");
const styles = tv({
  base: "text-sm text-muted-foreground",
});
</script>

<template>
  <DialogDescription :class="styles({ class: props.class })" v-bind="forwarded">
    <slot>{{ description }}</slot>
  </DialogDescription>
</template>
