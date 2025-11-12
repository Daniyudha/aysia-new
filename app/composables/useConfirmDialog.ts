const state = ref<ConfirmDialogState>({
  isOpen: false,
  options: { message: "" },
  resolve: null,
});

const pending = ref(false);

export function useConfirmDialog() {
  const closeDialog = () => {
    state.value.isOpen = false;
    state.value.resolve = null;
    pending.value = false;
  };

  const handleCancel = () => {
    if (state.value.resolve) {
      state.value.resolve(false);
      closeDialog();
    }
  };

  const confirm = (options: ConfirmDialogOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      state.value = {
        isOpen: true,
        options: {
          title: "Confirm Action",
          confirmText: "Confirm",
          cancelText: "Cancel",
          ...options,
        },
        resolve,
      };
    });
  };

  const handleConfirm = async () => {
    if (!state.value.resolve)
      return;
    const { options } = state.value;
    try {
      if (options.onConfirm) {
        await Promise.resolve(options.onConfirm());
        useSonner.success("Operation completed successfully");
        state.value.resolve(true);
        if (options.closeOnSuccess !== false) {
          closeDialog();
        }
      }
    }
    catch (err: any) {
      useSonner.error(
        (err as any)?.response?._data?.message || "Failed to confirm action.",
      );
    }
    finally {
      pending.value = false;
    }
  };

  // Preset methods for common use cases
  const confirmDelete = (itemName?: string, deleteCallback?: () => Promise<void> | Promise<any>) => {
    return confirm({
      title: "Delete Item",
      message: itemName
        ? `Are you sure you want to delete "${itemName}"? This action cannot be undone.`
        : "Are you sure you want to delete this item? This action cannot be undone.",
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: deleteCallback,
    });
  };

  return {
    // State
    state: readonly(state),
    loading: readonly(pending),
    // Methods
    confirm,
    handleConfirm,
    handleCancel,
    closeDialog,
    // Preset methods
    confirmDelete,
  };
}
