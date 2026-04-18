<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

import { useI18n } from "@/composables/useI18n";

const { t, getCurrentLanguage, setLanguage, initLanguage, currentLanguage: langRef } = useI18n();

const open = ref(false);
const currentLanguage = ref<"id" | "en">("id");

const languages = [
  { code: "id", label: "Indonesia" },
  { code: "en", label: "English" },
];

const currentLabel = computed(() =>
  currentLanguage.value === "id" ? "Indonesia" : "English",
);

function toggle() {
  open.value = !open.value;
}

function changeLanguage(lang: "id" | "en") {
  setLanguage(lang);
  currentLanguage.value = lang;
  open.value = false;
}

// Sinkron global i18n
watch(langRef, (newLang) => {
  currentLanguage.value = newLang;
});

// Init
onMounted(() => {
  initLanguage();
  const initial = (getCurrentLanguage() as "id" | "en") || "id";
  currentLanguage.value = initial;
  setLanguage(initial);
});
</script>

<template>
  <div class="relative">
    <!-- Trigger: disamakan dengan menu -->
    <button
      type="button"
      class="header-link flex items-center gap-1"
      :aria-label="t('language.switch')"
      @click="toggle"
    >
      Lang: {{ currentLabel }}
      <svg
        class="w-4 h-4 mt-[1px]"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute right-0 mt-2 min-w-[140px]
            bg-[#F5F2E9]
            border border-[#F5F2E9]
            shadow-lg
            rounded-md
            overflow-hidden
            z-[9999]"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="block w-full text-left px-4 py-2
                text-xl
                text-[#564614]
                bg-[#F5F2E9]
                hover:bg-[#564614]
                hover:text-[#F5F2E9]
                transition"
        :class="{ 'font-semibold': currentLanguage === lang.code }"
        @click="changeLanguage(lang.code)"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>
