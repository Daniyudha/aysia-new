interface TranslationResponse {
  success: boolean
  translatedText?: string
  error?: string
}

export function useAutoTranslate() {
  const translate = async (text: string, originalLanguage: string): Promise<string> => {
    const { getCurrentLanguage } = useI18n()
    const currentLang = getCurrentLanguage()
    
    // If current language matches the original language, no translation needed
    if (currentLang === originalLanguage) {
      return text
    }
    
    // Determine translation direction
    const sourceLang = originalLanguage
    const targetLang = currentLang
    
    try {
      console.log(`Translating from ${sourceLang} to ${targetLang}:`, text.substring(0, 50) + '...')
      
      const response = await $fetch('/api/translate', {
        method: 'POST',
        body: {
          text: text,
          source: sourceLang,
          target: targetLang
        }
      }) as TranslationResponse
      
      console.log('Translation response:', response)
      
      if (response.success && response.translatedText) {
        return response.translatedText
      } else {
        throw new Error('Translation failed: ' + (response.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Translation failed:', error)
      // Fallback: return original text
      return text
    }
  }

  return {
    translate
  }
}
