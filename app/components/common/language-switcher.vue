<template>
  <div class="inline-block">
    <button
      type="button"
      class="relative inline-flex items-center cursor-pointer outline-none rounded-full transition-all duration-200 hover:opacity-80  bg-gray-300"
      @click="toggleLanguage"
      :aria-label="t('language.switch')"
      :title="t('language.switch')"
    >
      <span
        class="w-12 h-6 border-2 border-app-secondary rounded-full flex items-center transition-colors duration-200"
        :class="{ 'bg-app-primary': currentLanguage === 'id', 'bg-app-secondary': currentLanguage === 'en' }"
      >
        <span
          class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 flex items-center justify-center text-xs font-medium text-gray-700"
          :class="{
            'translate-x-0 text-blue-600': currentLanguage === 'id',
            'translate-x-6 text-gray-700': currentLanguage === 'en'
          }"
        >
          {{ currentLanguage === 'id' ? 'ID' : 'EN' }}
        </span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

// Ambil fungsi i18n dari composable
const { t, getCurrentLanguage, setLanguage, initLanguage, currentLanguage: langRef } = useI18n()

// Default bahasa: Indonesia
const currentLanguage = ref('id')

// Fungsi toggle antar bahasa
const toggleLanguage = () => {
  const newLang = currentLanguage.value === 'id' ? 'en' : 'id'
  setLanguage(newLang)
  currentLanguage.value = newLang
}

// Sinkronisasi bila bahasa global berubah
watch(langRef, (newLang) => {
  currentLanguage.value = newLang
})

// Inisialisasi saat mount
onMounted(() => {
  initLanguage()
  const initial = getCurrentLanguage() || 'id'
  currentLanguage.value = initial
  setLanguage(initial)
})
</script>
