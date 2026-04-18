<script setup lang="ts">
import { useI18n } from "~/composables/useI18n";
import { journeyFetcher } from "~/repository/modules/journey";

definePageMeta({
  layout: "homepage",
});

const { t } = useI18n();

useHead({
  title: "Aysia LinggarWati - Home",
});

const { data } = useAsyncData(
  "journey-list",
  () => journeyFetcher().getAll({ limit: 6, orderByField: 'created_at', orderBy: 'desc' }),
  { lazy: true },
);

// Show all categories, limit to 6 latest posts
const humanCategoryItems = computed(() => {
  const items = data.value?.data || [];

  return items
    .sort((a, b) => {
      const dateA = new Date(a.created_at || 0).getTime();
      const dateB = new Date(b.created_at || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 6);
});
</script>

<template>
  <section class="h-full flex-1 flex flex-col">
    <!-- ✅ Hero -->
    <ClientOnly>
      <HomepageHeroCarousel :key="`hero-carousel-${humanCategoryItems?.length || 0}`" :items="humanCategoryItems" />
    </ClientOnly>

    <!-- ✅ Artist Statement -->
    <section class="bg-[#F5F2E9] py-16">
      <div class="app-container text-center">
        <h2 class="text-2xl md:text-3xl font-serif tracking-wide text-[#4B3B2A] mb-4">
          “{{ t('home.hero_quote') }}”
        </h2>
        <p class="max-w-3xl mx-auto text-[#6B5B4B] text-base md:text-xl leading-relaxed">
          {{ t('home.hero_description') }}
        </p>
        <div class="mt-10 flex justify-center">
          <hr class="w-24 border-t border-app-secondary">
        </div>
        <p class="mt-6 text-[#7A6B5A] italic text-lg">
          — Aysia Linggarwati
        </p>
      </div>
    </section>

    <!-- ✅ About My Journey -->
    <section class="bg-[#EAE4D4] py-24 md:py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <!-- IMAGE -->
        <div class="app-container">
          <img
            src="/images/horse.jpg"
            alt="Aysia Linggarwati Journey"
            class="w-full aspect-[4/3] object-cover shadow-lg"
          >
        </div>

        <!-- TEXT -->
        <div class="">
          <!-- TITLE + LINE -->
          <div class="flex items-center gap-6 mb-8">
            <h3 class="pl-6 md:pl-0 font-fraunces text-3xl md:text-5xl text-app-secondary whitespace-nowrap">
              {{ t('home.about_title') }}
            </h3>
            <span class="flex-1 h-px bg-[#9C8C74]" />
          </div>

          <!-- DESCRIPTION -->
          <p class="pr-16 px-6 md:px-0 text-app-secondary leading-relaxed text-base md:text-lg mb-10">
            {{ t('home.about_description') }}
          </p>

          <!-- QUOTE -->
          <p class="pl-6 md:pl-0 text-[#7A6B5A] italic text-base md:text-lg">
            “{{ t('home.about_quote') }}”
          </p>
        </div>
      </div>
    </section>

    <!-- ✅ Places I’ve Explored -->
    <HomepageJourneySlider />

    <!-- ✅ Closing Quote -->
    <section class="bg-[#EAE4D4] py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-app-secondary font-fraunces text-lg md:text-2xl max-w-3xl mx-auto">
          “{{ t('home.closing_quote') }}”
        </p>
        <div class="py-6 flex justify-center">
          <hr class="w-24 border-t border-app-secondary">
        </div>
        <p class="text-app-secondary text-md">
          — Aysia LinggarWati
        </p>
      </div>
    </section>
  </section>
</template>
