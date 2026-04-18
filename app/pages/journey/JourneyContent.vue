<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  html: {
    type: String,
    default: "",
  },
});

const images = ref<string[]>([]);
const activeIndex = ref(0);
const isOpen = ref(false);

function open(index: number) {
  activeIndex.value = index;
  isOpen.value = true;
  document.body.style.overflow = "hidden";
}

function close() {
  isOpen.value = false;
  document.body.style.overflow = "";
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
}

function prev() {
  activeIndex.value
    = (activeIndex.value - 1 + images.value.length) % images.value.length;
}

function handleKey(e: KeyboardEvent) {
  if (!isOpen.value)
    return;
  if (e.key === "Escape")
    close();
  if (e.key === "ArrowRight")
    next();
  if (e.key === "ArrowLeft")
    prev();
}

onMounted(() => {
  const container = document.querySelector(".journey-content");
  if (!container)
    return;

  const imgs = Array.from(container.querySelectorAll("img"));
  images.value = imgs.map(img => img.src);

  imgs.forEach((img, index) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => open(index));
  });

  window.addEventListener("keydown", handleKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKey);
});
</script>

<template>
  <div
    class="max-w-7xl mx-auto journey-content text-[16px]"
    v-html="html"
  />

  <!-- LIGHTBOX -->
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
    >
      <!-- Close -->
      <button
        class="absolute top-6 right-6 text-white text-3xl hover:opacity-70"
        @click="close"
      >
        ✕
      </button>

      <!-- Prev -->
      <button
        class="absolute left-6 text-white text-5xl hover:opacity-70"
        @click="prev"
      >
        ‹
      </button>

      <!-- Image -->
      <img
        :src="images[activeIndex]"
        class="min-h-[90vh] max-w-[90vw] object-contain"
      >

      <!-- Next -->
      <button
        class="absolute right-6 text-white text-5xl hover:opacity-70"
        @click="next"
      >
        ›
      </button>
    </div>
  </teleport>
</template>

<style scoped>
  .journey-content :deep(p) {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #564614;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.journey-content :deep(figure) {
  margin: 2rem 0;
  text-align: center;
}

.journey-content :deep(figcaption) {
  font-size: 14px;
  color: #888;
  margin-top: 0.5rem;
}

.journey-content :deep(img) {
  max-width: 90%;
  display: block;
  margin: 30px auto;
  border-radius: 15px;
}

.journey-content :deep(img:hover) {
  transform: scale(1.01);
  transition: transform 0.3s ease;
}
</style>
