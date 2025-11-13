<template>
  <header class="relative pt-12 pb-9">
    <div class="app-container py-4">
      <div class="flex flex-col md:flex-row justify-between gap-4">
        <NuxtLink
          to="/"
          class="text-center inline-block font-cinzel-decorative text-app-secondary text-2xl leading-[100%] tracking-[-5%]"
        >
          Aysia<br>
          Linggarwati
        </NuxtLink>

        <ul class="flex gap-10 md:gap-[72px] justify-center py-2">
          <li><NuxtLink to="/" class="header-link">{{ t('navigation.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about" class="header-link">{{ t('navigation.about') }}</NuxtLink></li>
          <li><NuxtLink to="/galleries" class="header-link">{{ t('navigation.gallery') }}</NuxtLink></li>
          <li><NuxtLink to="/contact" class="header-link">{{ t('navigation.contact') }}</NuxtLink></li>
        </ul>
      </div>
    </div>

    <!-- Switch Language -->
    <div class="absolute top-4 right-4 md:top-8 md:right-8 z-10">
      <LanguageSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import LanguageSwitcher from '@/components/common/language-switcher.vue'
const { t } = useI18n()
</script>


