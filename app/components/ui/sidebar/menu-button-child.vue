<script lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import { Primitive } from "reka-ui";

export type SidebarMenuButtonProps = {
  /**
   * The variant of the button.
   * @default "default"
   */
  variant?: SidebarMenuButtonVariants["variant"];
  /**
   * The size of the button.
   * @default "default"
   */
  size?: SidebarMenuButtonVariants["size"];
  /**
   * Whether the button is active.
   */
  isActive?: boolean;
  /**
   * Additional classes to apply to the parent element.
   */
  class?: HTMLAttributes["class"];
} & PrimitiveProps;
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  as: "button",
  variant: "default",
  size: "default",
});
</script>

<template>
  <Primitive
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="sidebarMenuButtonVariants({ variant, size, class: props.class })"
    :as="as"
    :as-child="asChild"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>
