export default defineNuxtPlugin(() => {
  const confirmDialog = useConfirmDialog();

  return {
    provide: {
      confirm: confirmDialog.confirm,
      confirmDelete: confirmDialog.confirmDelete,
    },
  };
});
