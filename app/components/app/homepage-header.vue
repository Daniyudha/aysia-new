<script setup lang="ts">
defineProps<{ socialMedia?: SocialMediaResponse }>();
import { useI18n } from '@/composables/useI18n'
import LanguageSwitcher from '@/components/common/language-switcher.vue'
const { t } = useI18n()
</script>

<template>
  <header class="pb-4 pt-12">
    <div class="app-container mx-auto">
      <div class="text-center mb-4">
        <NuxtLink
          to="/"
          class="font-cinzel-decorative text-4xl md:text-5xl text-app-secondary"
        >
          Aysia<br>
          Linggarwati
        </NuxtLink>
      </div>
      <div class="flex justify-center mb-4">
        <a
          v-if="!!$props?.socialMedia?.tiktok?.link?.length"
          :href="$props?.socialMedia?.tiktok?.link"
          target="_blank"
          class="opacity-60"
        >
          <IconTiktok fill="#533A1B" />
        </a>
      </div>
      <ul class="flex justify-center w-10/12 md:w-8/12 md:max-w-1/2 mx-auto flex-wrap">
        <li class="px-2 flex-1 text-center">
          <NuxtLink
            to="/about"
            class="text-3xl md:text-4xl text-app-secondary leading-[100%] font-normal hover:underline"
          >
            About
          </NuxtLink>
        </li>
        <li class="px-2 flex-1 text-center">
          <NuxtLink
            to="/galleries"
            class="text-3xl md:text-4xl text-app-secondary leading-[100%] font-normal hover:underline"
          >
            Gallery
          </NuxtLink>
        </li>
        <li class="px-2 flex-1 text-center">
          <NuxtLink
            to="/contact"
            class="text-3xl md:text-4xl text-app-secondary leading-[100%] font-normal hover:underline"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="absolute top-4 right-4 md:top-8 md:right-8 z-10">
      <LanguageSwitcher />
    </div>
  </header>
</template>

<style scoped>
svg {
  width: 1rem;
  height: auto;
}
</style>
