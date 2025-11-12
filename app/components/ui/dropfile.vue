<script setup lang="ts">
import { useDropZone, useFileDialog } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    /**
     * The text to display as the title of the dropzone.
     */
    title?: string;
    /**
     * The text to display as the subtext of the dropzone.
     */
    subtext?: string;
    /**
     * The icon to display in the dropzone.
     */
    icon?: string;
    /**
     * The function to call when files are dropped.
     */
    // eslint-disable-next-line ts/no-unsafe-function-type
    onDrop?: Function;
    /**
     * Whether or not to allow multiple files to be picked. Does not affect drag and drop.
     */
    multiple?: boolean;
    /**
     * The file types to accept. Does not affect drag and drop.
     */
    accept?: string;
    class?: any;
    disabled?: boolean;
  }>(),
  {
    title: "Click to upload or drag & drop files.",
    subtext: "All file types accepted",
    icon: "heroicons:cloud-arrow-up",
    multiple: true,
    accept: "*",
    disabled: false,
  },
);

const emits = defineEmits<{
  dropped: [any];
}>();

const { open, reset, onChange } = useFileDialog({
  multiple: props.multiple,
  accept: props.accept,
});

onChange((files: FileList | null) => {
  if (files?.length && !props?.disabled) {
    handleDrop(Array.from(files || []));
    reset();
  }
});

const dropZoneRef = ref<HTMLDivElement>();

function handleDrop(files: File[] | null) {
  if (!files && props?.disabled) {
    return;
  }
  if (props.onDrop) {
    props.onDrop(files);
  }
  emits("dropped", files);
}

const { isOverDropZone } = useDropZone(dropZoneRef, handleDrop);

const styles = tv({
  base: "flex w-full cursor-pointer items-center justify-center rounded-md border border-dashboard-neutral-100 border-dashed transition",
  variants: {
    isOverDropZone: {
      true: "border-dashboard-primary-50 bg-dashboard-primary-50",
    },
    disabled: {
      true: "bg-black/10 cursor-not-allowed",
    },
  },
});
</script>

<template>
  <div
    ref="dropZoneRef"
    :class="styles({ isOverDropZone, class: props.class, disabled: props?.disabled })"
    @click="() => {
      if (!$props?.disabled) {
        open()
      }
    }"
  >
    <slot name="message">
      <div class="py-10 text-center">
        <slot name="icon">
          <div
            v-if="icon"
            class="inline-flex items-center justify-center rounded-md border border-dashboard-neutral-100 p-2 transition"
            :class="[isOverDropZone && 'animate-bounce border-primary']"
          >
            <Icon
              :name="icon"
              class="h-7 w-7 opacity-70"
              :class="[isOverDropZone && 'text-primary']"
            />
          </div>
        </slot>
        <slot name="title">
          <p class="mt-5 text-sm font-medium" v-html="title" />
        </slot>
        <slot name="subtext">
          <p class="mt-1 text-sm text-muted-foreground/60" v-html="subtext" />
        </slot>
      </div>
    </slot>
  </div>
</template>
