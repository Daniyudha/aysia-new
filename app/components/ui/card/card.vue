<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui";

import { Primitive } from "reka-ui";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      /** Title that should be displayed. Passed to the `CardTitle` component */
      title?: string;
      /** Description that should be displayed. Passed to the `CardDescription` component */
      description?: string;
      /** Content that should be displayed. Passed to the `CardContent` component */
      content?: string;
      /** Custom class(es) to add to the element */
      class?: any;
    }
    >(),
  {
    as: "div",
    title: undefined,
    description: undefined,
    content: undefined,
    class: undefined,
  },
);

const styles = tv({
  base: "rounded-lg shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.08)] bg-card text-card-foreground",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="styles({ class: props.class })"
  >
    <slot>
      <slot name="header">
        <UiCardHeader>
          <slot name="title">
            <UiCardTitle v-if="title || $slots.title" :title="title" />
          </slot>
          <slot name="description">
            <UiCardDescription
              v-if="description || $slots.description"
              :description="description"
            />
          </slot>
        </UiCardHeader>
      </slot>
      <slot v-if="content || $slots.content" name="content">
        <UiCardContent>
          <div v-html="content" />
        </UiCardContent>
      </slot>
      <slot name="footer" />
    </slot>
  </Primitive>
</template>
