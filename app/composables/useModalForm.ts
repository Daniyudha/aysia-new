type ShowModalParams<T> = {
  type: "ADD";
} | {
  type: "UPDATE";
  selectedItem: T;
};

export function useModalForm<T>() {
  const showModal = ref(false);
  const selectedItem = ref<T | undefined>(undefined);

  function handleShowModal(params: ShowModalParams<T>) {
    showModal.value = true;
    if (params?.type === "UPDATE") {
      selectedItem.value = params.selectedItem;
    }
  }

  function handleCloseModal() {
    showModal.value = false;
    selectedItem.value = undefined;
  }

  watch(
    () => showModal.value,
    () => {
      if (!showModal.value) {
        selectedItem.value = undefined;
      }
    },
  );

  return { showModal, selectedItem, handleShowModal, handleCloseModal };
}
