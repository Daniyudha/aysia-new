<script lang="ts">
import type { InjectionKey } from "vue";

export const FORM_ITEM_INJECTION_KEY = myInjectionKey as InjectionKey<string>;
</script>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const props = defineProps<{
  class?: any;
  label?: string;
  description?: string;
  hint?: string;
  hideMessage?: boolean;
}>();
const id = useId();
provide(FORM_ITEM_INJECTION_KEY, id);

const styles = tv({ base: "space-y-1.5 form-item" });
</script>

<template>
  <div :class="styles({ class: props.class })" v-bind="$attrs">
    <slot name="label">
      <UiFormLabel
        v-if="label || hint"
        :label="label"
        :hint="hint"
      />
    </slot>
    <UiFormControl>
      <slot />
    </UiFormControl>
    <slot name="description">
      <UiFormDescription v-if="description" :description="description" />
    </slot>
    <slot name="errorMessage">
      <UiFormMessage v-if="!hideMessage" />
    </slot>
  </div>
</template>
