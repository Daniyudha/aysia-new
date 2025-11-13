<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useAutoTranslate } from '~/composables/useAutoTranslate'
import { useI18n } from '~/composables/useI18n'


const props = defineProps<{
  image: string
  category: string
  title: string
  description: string
}>()

const translatedDescription = ref(props.description)
const { translate } = useAutoTranslate()
const { getCurrentLanguage } = useI18n()

// Determine original language of the description
// If it contains Indonesian words, assume it's Indonesian, otherwise English
const getOriginalLanguage = (text: string): string => {
  const indonesianWords = ['di', 'dan', 'yang', 'dengan', 'untuk', 'pada', 'ini', 'itu', 'saya', 'kamu', 'kami', 'mereka']
  const hasIndonesian = indonesianWords.some(word => text.toLowerCase().includes(word))
  return hasIndonesian ? 'id' : 'en'
}

// Translate ketika pertama kali mount
onMounted(async () => {
  const originalLang = getOriginalLanguage(props.description)
  translatedDescription.value = await translate(props.description, originalLang)
})

// Kalau bahasa berubah, auto-translate ulang
watch(
  () => getCurrentLanguage(),
  async () => {
    const originalLang = getOriginalLanguage(props.description)
    translatedDescription.value = await translate(props.description, originalLang)
  }
)
</script>

<template>
  <section class="pb-14">
    <div class="app-container">
      <div class="flex flex-col lg:flex-row md:justify-between gap-4">
        <div class="lg:w-5/12">
          <img
            :src="`${useRuntimeConfig().public.apiBase}${props.image}`"
            :alt="props.title"
            class="w-full h-auto"
          />
        </div>

        <div class="lg:w-6/12 text-app-secondary">
          <p class="text-[2.25rem]">
            {{ props.category }}
          </p>

          <h1 class="mb-8 font-medium text-[8rem] leading-[100%] tracking-[0]">
            {{ props.title }}
          </h1>

          <div
            class="prose font-sans font-thin space-y-4"
            v-html="translatedDescription"
          />
        </div>
      </div>
    </div>
  </section>
</template>
