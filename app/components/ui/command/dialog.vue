<script lang="ts" setup>
import type { DialogRootEmits, DialogRootProps } from "reka-ui";

import { useForwardPropsEmits } from "reka-ui";

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <UiDialog v-bind="forwarded">
    <UiDialogContent class="overflow-hidden p-0 shadow-lg">
      <UiCommand>
        <slot />
      </UiCommand>
    </UiDialogContent>
  </UiDialog>
</template>
