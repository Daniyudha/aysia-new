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

const styles = tv({ base: "space-y-1.5 ui-floating-item relative" });
</script>

<template>
  <div :class="styles({ class: props.class })" v-bind="$attrs">
    <UiFormControl>
      <slot />
    </UiFormControl>
    <slot name="label">
      <UiFormLabel
        v-if="label || hint"
        :label="label"
        :hint="hint"
        class="opacity-0 invisible"
      />
    </slot>
    <slot name="description">
      <UiFormDescription v-if="description" :description="description" />
    </slot>
    <slot name="errorMessage">
      <UiFormMessage v-if="!hideMessage" />
    </slot>
  </div>
</template>

<style scoped>
@reference "../../../assets/css/main.css";

.ui-floating-item input,
.ui-floating-item textarea {
  @apply bg-transparent rounded-none outline-0 ring-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:shadow-none placeholder:font-light text-app-secondary font-normal shadow-transparent focus-visible:shadow-transparent border-transparent border-b-app-secondary aria-invalid:border-b-destructive border-b;
}
.ui-floating-item input:focus-visible,
.ui-floating-item textarea:focus-visible {
  box-shadow: none;
}
.ui-floating-item label {
  @apply !absolute z-20;
}
</style>

<!-- !bg-transparent !border-none !ring-0 !focus-visible:ring-0 !border-b !z-10 !h-[3.125rem] !p-4 !border-app-secondary -->
