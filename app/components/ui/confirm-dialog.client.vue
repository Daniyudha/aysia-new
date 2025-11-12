<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
} from "reka-ui";

type Props = {
  isOpen: boolean;
  options: ConfirmDialogOptions;
  loading?: boolean;
};

type Emits = {
  (e: "confirm"): void;
  (e: "cancel"): void;
  (e: "update:isOpen", value: boolean): void;
};

withDefaults(defineProps<Props>(), {
  loading: false,
});

const emit = defineEmits<Emits>();

function handleConfirm() {
  emit("confirm");
}

function handleCancel() {
  emit("cancel");
}
</script>

<template>
  <AlertDialogRoot
    :open="$props.isOpen"
    @update:open="(value) => $emit('update:isOpen', value)"
  >
    <AlertDialogPortal>
      <AlertDialogOverlay
        class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn"
      />
      <AlertDialogContent
        class="fixed left-[50%] top-[50%] z-50 grid max-h-[calc(100%-4rem)] w-full translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full max-w-[600px] border-dashboard-neutral-100/60 shadow-none bg-dashboard-neutral-50"
      >
        <AlertDialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          {{ $props?.options?.title }}
        </AlertDialogTitle>
        <AlertDialogDescription
          class="text-mauve11 mt-4 mb-5 text-sm leading-normal"
        >
          {{ $props?.options?.message }}
        </AlertDialogDescription>
        <div class="flex justify-end gap-4">
          <AlertDialogCancel
            as-child
          >
            <UiButton
              :disabled="$props?.loading"
              variant="ghost"
              @click="handleCancel"
            >
              {{ $props?.options?.cancelText }}
            </UiButton>
          </AlertDialogCancel>
          <AlertDialogAction
            as-child
          >
            <UiButton
              :disabled="$props?.loading"
              variant="destructive"
              @click="handleConfirm"
            >
              {{ $props?.options?.confirmText }}
            </UiButton>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
