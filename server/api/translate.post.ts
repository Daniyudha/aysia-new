export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    // Get translation direction from request body
    // Default: translate from English to Indonesian
    const sourceLang = body.source || 'en'
    const targetLang = body.target || 'id'
    
    console.log(`Translating from ${sourceLang} to ${targetLang}:`, body.text?.substring(0, 50) + '...')
    
    const response = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: body.text,
        source: sourceLang,
        target: targetLang,
        format: 'html'
      })
    })
    
    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    console.log('Translation API response:', data)
    
    return {
      translatedText: data.translatedText,
      success: true
    }
  } catch (error) {
    console.error('Translation proxy error:', error)
    return {
      translatedText: body.text,
      success: false,
      error: (error as Error).message
    }
  }
})