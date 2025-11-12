<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /** Additional classes to add to the input */
    class?: any;
    /** The id of the input */
    id?: string;
    /** The name of the input */
    name?: string;
    /** The placeholder of the input */
    placeholder?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is required */
    required?: boolean;
    /** The type of the input */
    type?: string;
    /** The value of the input */
    modelValue?: any;
    /** The maximum length of the input */
    maxlength?: number;
    /** The `RegExp` pattern of the input */
    pattern?: string;
  }>(),
  {
    type: "text",
    modelValue: "",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  let value = target.value;

  /* val input with pattern */
  if (props.pattern) {
    const regex = new RegExp(props.pattern);
    value = Array.from(value)
      .filter(char => regex.test(char))
      .join("");
  }

  /* Handle maxlength */
  if (props.maxlength) {
    value = value.slice(0, props.maxlength);
  }

  target.value = value;
  emit("update:modelValue", value);
}

const styles = tv({
  base: "form-input h-10 w-full ring-dashboard-neutral-100 ring-1 pl-4 pr-4 py-2 rounded-md focus:ring-2 focus:ring-dashboard-warning-50 outline-none focus:border-0 transition-all text-app-secondary focus:shadow-dashboard-warning-50 focus-visible:ring-dashboard-warning-50 [&[aria-invalid='true']]:ring-dashboard-danger-50 [&[aria-invalid='true']]:focus:ring-dashboard-danger-50 [aria-invalid='true']]:focus:shadow-dashboard-danger-50 [aria-invalid='true']]:focus-visible:!shadow-dashboard-danger-50 aria-[invalid='true']]:ring-2",
});
</script>

<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <input
    v-bind="props"
    :class="styles({ class: props.class })"
    :value="modelValue"
    @input="handleInput"
  >
</template>
