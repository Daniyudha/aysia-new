<script lang="ts" setup>
defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: any; description?: string }>();
const { formDescriptionId } = useFormField();
const styles = tv({ base: "text-sm text-muted-foreground" });
</script>

<template>
  <p
    :id="formDescriptionId"
    :class="styles({ class: props.class })"
    v-bind="$attrs"
  >
    <slot>
      <ClientOnly>
        <p v-html="description" />
      </ClientOnly>
    </slot>
  </p>
</template>
