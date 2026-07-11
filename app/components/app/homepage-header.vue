<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import LanguageSwitcher from "@/components/common/language-switcher.vue";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();

const isScrolled = ref(false);
const isMenuOpen = ref(false);

function onScroll() {
  isScrolled.value = window.scrollY > 200;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <!-- ================= MOBILE HEADER ================= -->
  <header class="lg:hidden fixed top-0 left-0 w-full z-[60]">
    <div class="flex items-center justify-between px-5 py-4 transition-all duration-300" :class="isScrolled
      ? 'bg-[#F5F2E9] text-app-secondary shadow'
      : 'bg-transparent text-white'">
      <!-- LOGO -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img :src="isScrolled
          ? '/images/AL-logo.png'
          : '/images/AL-logo-light.png'" class="h-12">
        <span class="font-cinzel-decorative text-xl font-bold">
          Aysia <br> LinggarWati
        </span>
      </NuxtLink>

      <!-- HAMBURGER -->
      <button class="z-[70]" @click="isMenuOpen = true">
        <svg width="28" height="28" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M4 7h20M4 14h20M4 21h20" />
        </svg>
      </button>
    </div>
  </header>

  <!-- ================= DESKTOP HERO HEADER ================= -->
  <header class="hidden lg:block  top-0 left-0 w-full z-40
           transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] h-15vh" :class="isScrolled
            ? 'opacity-0 -translate-y-10 pointer-events-none'
            : 'opacity-100 translate-y-0'">
    <div class="bg-[#F5F2E9]">
      <div class="app-container py-4">
        <NuxtLink to="/" class="flex items-center justify-center gap-4">
          <img src="/images/AL-logo.png" class="w-20 mb-2">
          <h1 class="font-cinzel-decorative text-4xl font-bold text-app-secondary">
            Aysia<br>LinggarWati
          </h1>
        </NuxtLink>

        <ul class="flex justify-center gap-8 mt-4">
          <li>
            <NuxtLink class="header-link" to="/">
              {{ t('navigation.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/portfolio">
              {{ t('navigation.gallery') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/journey">
              {{ t('navigation.journey') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/explore">
              {{ t('navigation.explore') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/nature">
              {{ t('navigation.nature') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/about">
              {{ t('navigation.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/contact">
              {{ t('navigation.contact') }}
            </NuxtLink>
          </li>
          <!-- <li>
            <LanguageSwitcher />
          </li> -->
        </ul>
      </div>
    </div>
  </header>

  <!-- ================= DESKTOP COMPACT HEADER ================= -->
  <header class="hidden lg:block fixed top-0 left-0 w-full z-50
           transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]" :class="isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10 pointer-events-none'">
    <div class="bg-[#F5F2E9] shadow py-2">
      <div class="app-container h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/images/AL-logo.png" class="h-12">
          <span class="font-cinzel-decorative text-xl font-bold text-app-secondary">
            Aysia <br> LinggarWati
          </span>
        </NuxtLink>

        <ul class="flex items-center gap-6">
          <li>
            <NuxtLink class="header-link" to="/">
              {{ t('navigation.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/portfolio">
              {{ t('navigation.gallery') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/journey">
              {{ t('navigation.journey') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/explore">
              {{ t('navigation.explore') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/nature">
              {{ t('navigation.nature') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/about">
              {{ t('navigation.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header-link" to="/contact">
              {{ t('navigation.contact') }}
            </NuxtLink>
          </li>
          <!-- <li>
            <LanguageSwitcher />
          </li> -->
        </ul>
      </div>
    </div>
  </header>

  <!-- ================= MOBILE MENU OVERLAY ================= -->
  <transition name="fade">
    <div v-if="isMenuOpen" class="fixed inset-0 z-[100] bg-[#F5F2E9]
             flex flex-col items-center pt-10">
      <img src="/images/AL-logo.png" class="w-18 h-auto mb-4">
      <h2 class="font-cinzel-decorative font-bold text-4xl text-app-secondary mb-10 text-center">
        Aysia <br> LinggarWati
      </h2>
      <ul class="flex flex-col gap-6 text-2xl items-center text-app-secondary">
        <li>
          <NuxtLink class="header-link" to="/" @click="isMenuOpen = false">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-link" to="/portfolio" @click="isMenuOpen = false">
            Portfolio
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-link" to="/journey" @click="isMenuOpen = false">
            Journey
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-link" to="/explore" @click="isMenuOpen = false">
            Gallery
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-link" to="/nature" @click="isMenuOpen = false">
            Nature
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-link" to="/about" @click="isMenuOpen = false">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="header-link" to="/contact" @click="isMenuOpen = false">
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- <div class="mt-10">
        <LanguageSwitcher />
      </div> -->

      <button class="absolute bottom-8" @click="isMenuOpen = false">
        <div class="w-12 h-12 rounded-full border border-app-secondary
                    flex items-center justify-center text-2xl">
          ✕
        </div>
      </button>
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
