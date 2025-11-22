<template>
  <header class="relative pt-12 pb-9">
    <div class="lg:app-container py-4 px-8">

      <div class="flex flex-col md:flex-row justify-between items-center gap-4">

        <!-- LOGO + BRAND -->
        <div class="flex items-center gap-3">
          <NuxtLink to="/">
            <img
              src="/images/AL-logo.png"
              alt="Logo"
              class="w-15 h-15 object-contain"
            />
          </NuxtLink>

          <NuxtLink
            to="/"
            class="inline-block font-cinzel-decorative text-app-secondary text-2xl leading-[100%] tracking-[-5%]"
          >
            Aysia<br>
            Linggarwati
          </NuxtLink>
        </div>

        <!-- NAVIGATION -->
        <ul class="flex gap-6 md:gap-[28px] justify-center items-center py-2">
          <li><NuxtLink to="/" class="header-link">{{ t('navigation.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about" class="header-link">{{ t('navigation.about') }}</NuxtLink></li>
          <li><NuxtLink to="/galleries" class="header-link">{{ t('navigation.gallery') }}</NuxtLink></li>
          <li><NuxtLink to="/contact" class="header-link">{{ t('navigation.contact') }}</NuxtLink></li>
          <li class="hidden md:inline-block"><LanguageSwitcher /></li>
        </ul>
      </div>

      <!-- MOBILE LANGUAGE -->
      <li class="md:hidden list-none flex justify-center mt-2">
        <LanguageSwitcher />
      </li>

    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import LanguageSwitcher from '@/components/common/language-switcher.vue'
const { t } = useI18n()
</script>
