<script lang="ts" setup>
import type { LabelProps } from "reka-ui";

import { Label } from "reka-ui";

defineOptions({ inheritAttrs: false });
const props = defineProps<LabelProps & { class?: any; label?: string; hint?: string }>();

const { formItemId } = useFormField();

const styles = tv({
  base: "flex w-full items-center justify-between text-left text-sm font-medium tracking-tight text-foreground hover:cursor-pointer",
});
</script>

<template>
  <Label
    :class="styles({ class: props.class })"
    :for="formItemId"
    v-bind="$attrs"
  >
    <slot>{{ label }}
      <span class="ml-auto font-normal text-muted-foreground/80">{{ hint }}</span></slot>
  </Label>
</template>
