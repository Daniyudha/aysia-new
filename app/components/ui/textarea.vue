<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /** Additional classes to add to the textarea */
    class?: any;
    /** The name of the textarea */
    name?: string;
    /** The id of the textarea */
    id?: string;
    /** The placeholder of the textarea */
    placeholder?: string;
    /** Whether the textarea is required */
    required?: boolean;
    /** Whether the textarea is disabled */
    disabled?: boolean;
    /** The number of rows to display */
    rows?: number;
    /** The value of the textarea */
    modelValue?: string;
    /** The maximum number of characters allowed */
    maxlength?: number;
    /** The `RegExp` pattern of the textarea */
    pattern?: string;
  }>(),
  {
    modelValue: "",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  let value = target.value;

  /* Validate input with pattern */
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
  base: "form-textarea flex min-h-[80px] w-full ring-dashboard-neutral-100 ring-1 pl-4 pr-4 py-2 rounded-md focus:ring-2 focus:ring-dashboard-warning-50 outline-none focus:border-0 transition-all text-app-secondary focus:shadow-dashboard-warning-50 focus-visible:ring-dashboard-warning-50 [&[aria-invalid='true']]:ring-dashboard-danger-50 [&[aria-invalid='true']]:focus:ring-dashboard-danger-50 [aria-invalid='true']]:focus:shadow-dashboard-danger-50 [aria-invalid='true']]:focus-visible:!shadow-dashboard-danger-50 aria-[invalid='true']]:ring-2",
});
</script>

<template>
  <textarea
    v-bind="props"
    :value="modelValue"
    :class="styles({ class: props.class })"
    @input="handleInput"
  />
</template>
