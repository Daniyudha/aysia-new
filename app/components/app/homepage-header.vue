<script setup lang="ts">
defineProps<{ socialMedia?: SocialMediaResponse }>();
import { useI18n } from '@/composables/useI18n'
import LanguageSwitcher from '@/components/common/language-switcher.vue'
const { t } = useI18n()
</script>

<template>
  <header class="pb-4 pt-12 relative">
    <div class="app-container mx-auto">

      <!-- LOGO + BRAND -->
      <div class="flex flex-col items-center mb-6">
        <NuxtLink to="/" class="flex flex-col items-center gap-2">
          <img
            src="/images/AL-logo.png"
            alt="Aysia Logo"
            class="w-12 h-auto md:w-14 opacity-90"
          />

          <span class="font-cinzel-decorative text-4xl md:text-5xl text-app-secondary leading-[100%] text-center">
            Aysia<br>
            Linggarwati
          </span>
        </NuxtLink>
      </div>

      <!-- SOCIAL -->
      <div class="flex justify-center mb-4">
        <a
          v-if="!!$props?.socialMedia?.tiktok?.link?.length"
          :href="$props?.socialMedia?.tiktok?.link"
          target="_blank"
          class="opacity-60 hover:opacity-100 transition"
        >
          <IconTiktok fill="#533A1B" />
        </a>
      </div>

      <!-- NAVIGATION -->
      <ul class="flex justify-center md:w-8/12 mx-auto flex-wrap">
        <li class="px-2 flex-1 text-center">
          <NuxtLink
            to="/about"
            class="text-3xl md:text-4xl text-app-secondary leading-[100%] hover:underline"
          >
            About
          </NuxtLink>
        </li>

        <li class="px-2 flex-1 text-center">
          <NuxtLink
            to="/galleries"
            class="text-3xl md:text-4xl text-app-secondary leading-[100%] hover:underline"
          >
            Gallery
          </NuxtLink>
        </li>

        <li class="px-2 flex-1 text-center">
          <NuxtLink
            to="/contact"
            class="text-3xl md:text-4xl text-app-secondary leading-[100%] hover:underline"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- LANGUAGE SWITCHER -->
      <div class="absolute top-4 right-4 md:top-4 md:right-4 z-10">
        <LanguageSwitcher />
      </div>

    </div>
  </header>
</template>

<style scoped>
svg {
  width: 1rem;
  height: auto;
}
</style>
