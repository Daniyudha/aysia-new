import { ref, watch } from "vue";

function useModalForm() {
  const showModal = ref(false);
  const selectedItem = ref(void 0);
  function handleShowModal(params) {
    showModal.value = true;
    if (params?.type === "UPDATE") {
      selectedItem.value = params.selectedItem;
    }
  }
  function handleCloseModal() {
    showModal.value = false;
    selectedItem.value = void 0;
  }
  watch(
    () => showModal.value,
    () => {
      if (!showModal.value) {
        selectedItem.value = void 0;
      }
    },
  );
  return { showModal, selectedItem, handleShowModal, handleCloseModal };
}

export { useModalForm as u };
// # sourceMappingURL=useModalForm-CBkmuIPn.mjs.map
