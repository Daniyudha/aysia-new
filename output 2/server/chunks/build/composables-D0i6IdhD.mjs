import { hasInjectionContext, inject } from "vue";

import { h as headSymbol, u as useHead$1 } from "../routes/renderer.mjs";
import { b as useNuxtApp } from "./server.mjs";

function injectHead(nuxtApp) {
  const nuxt = nuxtApp || useNuxtApp();
  return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = options.head || injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}

export { useHead as u };
// # sourceMappingURL=composables-D0i6IdhD.mjs.map
