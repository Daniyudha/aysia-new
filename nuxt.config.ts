import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // eslint-disable-next-line node/no-process-env
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "https://be.storytellingphotos.com",
      // eslint-disable-next-line node/no-process-env
      nodeEnv: process.env.NODE_ENV || "production",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@vee-validate/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()], optimizeDeps: {
    include: [
      "vee-validate",
      "@vee-validate/zod",
      "zod",
      "@tiptap/core",
      "@tiptap/vue-3",
      "@tiptap/starter-kit",
      "@tiptap/extension-link",
      "@tiptap/extension-image",
      "@tiptap/extension-underline",
      "@tiptap/extension-text-style",
      "@tiptap/extension-text-align",
      "@tiptap/extension-highlight",
      "@tiptap/extensions",
    ],
  } },
  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      { from: "embla-carousel-vue", name: "EmblaCarouselAPIType", type: true },
      { from: "embla-carousel-vue", name: "EmblaOptionsType", type: true },
      { from: "@vueuse/core", name: "reactiveOmit" },
      { from: "@vueuse/core", name: "useEventListener" },
      { from: "@vueuse/core", name: "useMediaQuery" },
      { from: "@vueuse/core", name: "useVModel" },
      { from: "vue-sonner", name: "toast", as: "useSonner" },
    ],
  },
  googleFonts: {
    families: {
      "Alumni Sans": {
        wght: [300, 400, 500, 600, 700],
        ital: [300],
      },
      "Cinzel Decorative": [400],
      "Poppins": [300, 400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
  },
  build: {
    transpile: ["vue-sonner"],
  },
  nitro: {
    output: {
      dir: "output", // build will go into "output" instead of ".output"
    },
  },
});
