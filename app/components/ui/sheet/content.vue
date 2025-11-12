<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from "reka-ui";

import { DialogContent, useForwardPropsEmits } from "reka-ui";

defineOptions({ inheritAttrs: false });

const props = defineProps<
  DialogContentProps & {
    icon?: string;
    title?: string;
    description?: string;
    class?: any;
    side?: VariantProps<typeof styles>["side"];
    to?: string | HTMLElement;
  }
>();
const emits = defineEmits<DialogContentEmits>();
const forwarded = useForwardPropsEmits(
  reactiveOmit(props, "icon", "title", "description", "class", "to", "side"),
  emits,
);

const styles = tv({
  base: "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  variants: {
    side: {
      top: "inset-x-0 top-0 w-full",
      bottom: "inset-x-0 bottom-0 w-full",
      left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
    },
  },
  defaultVariants: {
    side: "left",
  },
});
const transitionName = computed(() => `slide-${props.side || "left"}`);
</script>

<template>
  <UiSheetPortal :to="to">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <slot name="overlay">
        <UiSheetOverlay />
      </slot>
    </Transition>
    <Transition :name="transitionName">
      <DialogContent
        :class="styles({ side, class: props.class })"
        v-bind="{ ...forwarded, ...$attrs }"
      >
        <slot>
          <slot name="header">
            <UiSheetHeader>
              <slot name="title">
                <UiSheetTitle v-if="title" :title="title" />
              </slot>
              <slot name="description">
                <UiSheetDescription
                  v-if="description"
                  :description="description"
                />
              </slot>
            </UiSheetHeader>
          </slot>
          <slot name="content" />
          <slot name="footer" />
        </slot>
        <slot name="close">
          <UiSheetClose :icon="icon" />
        </slot>
      </DialogContent>
    </Transition>
  </UiSheetPortal>
</template>

<style scoped>
/* Slide from Right */
.slide-right-enter-from {
  transform: translateX(100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* ease-out */
}

/* Slide from Left */
.slide-left-enter-from {
  transform: translateX(-100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* ease-out */
}

/* Slide from Top */
.slide-top-enter-from {
  transform: translateY(-100%);
}
.slide-top-leave-to {
  transform: translateY(-100%);
}
.slide-top-enter-active,
.slide-top-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* ease-out */
}

/* Slide from Bottom */
.slide-bottom-enter-from {
  transform: translateY(100%);
}
.slide-bottom-leave-to {
  transform: translateY(100%);
}
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* ease-out */
}
</style>
