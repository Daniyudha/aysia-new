<script setup lang="ts">
import { journeyFetcher } from "~/repository/modules/journey";
import { useI18n } from "~/composables/useI18n";

definePageMeta({
  layout: "homepage",
});

const { t } = useI18n();

useHead({
  title: "Aysia LinggarWati - Home",
});

const { data } = useAsyncData(
  "journey-list",
  () => journeyFetcher().getAll({ limit: 10 }),
  { lazy: true }
);
</script>

<template>
  <section class="h-full flex-1 flex flex-col">
    <!-- ✅ Hero -->
    <ClientOnly>
      <HomepageHeroCarousel
        :key="`hero-carousel-${data?.data?.length || 0}`"
        :items="data?.data ?? []"
      />
    </ClientOnly>

    <!-- ✅ Artist Statement -->
    <section class="bg-[#F5F2E9] py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-2xl md:text-3xl font-serif tracking-wide text-[#4B3B2A] mb-4">
          “{{ t('home.hero_quote') }}”
        </h2>
        <p class="max-w-3xl mx-auto text-[#6B5B4B] text-base md:text-lg leading-relaxed">
          {{ t('home.hero_description') }}
        </p>
        <div class="mt-10 flex justify-center">
          <hr class="w-24 border-t border-[#C6B299]" />
        </div>
        <p class="mt-6 text-[#7A6B5A] italic text-sm">— Aysia LinggarWati</p>
      </div>
    </section>

    <!-- ✅ About My Journey -->
    <section class="bg-[#EAE4D4] py-20">
      <div
        class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
      >
        <img
          src="/images/horse.jpg"
          alt="Aysia LinggarWati Journey"
          class="w-full md:w-1/2 aspect-4/3 object-cover rounded-2xl shadow-md"
        />
        <div class="md:w-1/2 text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-serif text-[#4B3B2A] mb-4">
            {{ t('home.about_title') }}
          </h3>
          <p class="text-[#6B5B4B] leading-relaxed text-base md:text-lg">
            {{ t('home.about_description') }}
          </p>
          <p class="mt-6 text-[#7A6B5A] italic">
            “{{ t('home.about_quote') }}”
          </p>
        </div>
      </div>
    </section>

    <!-- ✅ Places I’ve Explored -->
    <section class="bg-[#F5F2E9] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h3
          class="text-2xl md:text-3xl font-serif text-center text-[#4B3B2A] mb-12"
        >
          {{ t('home.places_title') }}
        </h3>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          <!-- Mentawai -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/mentawai.jpg"
              alt="Mentawai, Siberut"
              class="w-full h-56 object-cover"
            />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">
                {{ t('home.place1_title') }}
              </h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                {{ t('home.place1_description') }}
              </p>
            </div>
          </div>

          <!-- Ethiopia -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/ethiopia.jpg"
              alt="Omo, Ethiopia"
              class="w-full h-56 object-cover"
            />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">
                {{ t('home.place2_title') }}
              </h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                {{ t('home.place2_description') }}
              </p>
            </div>
          </div>

          <!-- Cappadocia -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/cappadocia.jpg"
              alt="Cappadocia, Turki"
              class="w-full h-56 object-cover"
            />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">
                {{ t('home.place3_title') }}
              </h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                {{ t('home.place3_description') }}
              </p>
            </div>
          </div>

          <!-- Lathmar Holi -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/lathmar-holi.png"
              alt="Lathmar Holi, India"
              class="w-full h-56 object-cover"
            />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">
                {{ t('home.place4_title') }}
              </h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                {{ t('home.place4_description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ Closing Quote -->
    <section class="bg-[#EAE4D4] py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p
          class="text-[#4B3B2A] text-lg md:text-xl italic max-w-3xl mx-auto"
        >
          “{{ t('home.closing_quote') }}”
        </p>
        <p class="mt-3 text-[#6B5B4B] text-sm">— Aysia LinggarWati</p>
      </div>
    </section>
  </section>
</template>
