import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';

const translate_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  try {
    const sourceLang = body.source || "en";
    const targetLang = body.target || "id";
    console.log(`Translating from ${sourceLang} to ${targetLang}:`, `${(_a = body.text) == null ? void 0 : _a.substring(0, 50)}...`);
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: body.text,
        source: sourceLang,
        target: targetLang,
        format: "html"
      })
    });
    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }
    const data = await response.json();
    console.log("Translation API response:", data);
    return {
      translatedText: data.translatedText,
      success: true
    };
  } catch (error) {
    console.error("Translation proxy error:", error);
    return {
      translatedText: body.text,
      success: false,
      error: error.message
    };
  }
});

export { translate_post as default };
//# sourceMappingURL=translate.post.mjs.map
