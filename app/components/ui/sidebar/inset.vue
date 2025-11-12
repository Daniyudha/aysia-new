<script lang="ts">
import type { HTMLAttributes } from "vue";

export const sideBarInsetStyles = tv({
  base: "relative flex min-h-svh flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
  variants: {
    state: {
      expanded: "max-w-[calc(100%_-_var(--sidebar-width))] max-w-full",
      collapsed: "max-w-full",
    },
  },
});
</script>

<script setup lang="ts">
const props = defineProps<{
  /**
   * Additional classes to apply to the parent element.
   */
  class?: HTMLAttributes["class"];
}>();
const { state } = useSidebar();
</script>

<template>
  <main :class="sideBarInsetStyles({ class: props.class, state })">
    <slot />
  </main>
</template>
