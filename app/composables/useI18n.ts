import type { Ref } from 'vue'

export type Language = 'en' | 'id'
export type TranslationKey = string

// Import translation files
import enTranslations from '../../locales/en.json'
import idTranslations from '../../locales/id.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

// Language state
const currentLanguage = ref<Language>('en')

export function useI18n() {
  // Get translation for a key
  const t = (key: TranslationKey): string => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }
    
    return value
  }

  // Get current language
  const getCurrentLanguage = (): Language => {
    return currentLanguage.value
  }

  // Set language
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
    }
  }

  // Initialize language from localStorage or browser preference
  const initLanguage = () => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language') as Language
      if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
        currentLanguage.value = savedLang
      } else {
        // Auto-detect browser language
        const browserLang = navigator.language.split('-')[0]
        if (browserLang === 'id') {
          currentLanguage.value = 'id'
        } else {
          currentLanguage.value = 'en'
        }
      }
    }
  }

  return {
    t,
    getCurrentLanguage,
    setLanguage,
    initLanguage,
    currentLanguage: readonly(currentLanguage)
  }
}