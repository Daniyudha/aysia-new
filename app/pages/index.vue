<script setup lang="ts">
import { journeyFetcher } from "~/repository/modules/journey";

definePageMeta({
  layout: "homepage",
});

useHead({
  title: "Aysia LinggarWati - Home",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore journeys through remote lands and stories told through photography.",
    },
    {
      name: "keywords",
      content:
        "Aysia LinggarWati, travel photography, culture, exploration, remote places, portrait, documentary",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});

const { data } = useAsyncData(
  "journey-list",
  () => journeyFetcher().getAll({ limit: 10 }),
  { lazy: true }
);
</script>

<template>
  <section class="h-full flex-1 flex flex-col">
    <!-- ✅ Hero Slider -->
    <ClientOnly>
      <HomepageHeroCarousel :key="`hero-carousel-${data?.data?.length || 0}`" :items="data?.data ?? []" />
    </ClientOnly>

    <!-- ✅ Artist Statement -->
    <section class="bg-[#F5F2E9] py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-2xl md:text-3xl font-serif tracking-wide text-[#4B3B2A] mb-4">
          “Through my lens, I capture the unseen rhythms of culture and connection.”
        </h2>
        <p class="max-w-3xl mx-auto text-[#6B5B4B] text-base md:text-lg leading-relaxed">
          A journey of timeless beauty — exploring humanity, nature, and emotion through the quiet power of imagery.
        </p>
        <div class="mt-10 flex justify-center">
          <hr class="w-24 border-t border-[#C6B299]" />
        </div>
        <p class="mt-6 text-[#7A6B5A] italic text-sm">
          — Aysia LinggarWati
        </p>
      </div>
    </section>

    <!-- ✅ About My Journey -->
    <section class="bg-[#EAE4D4] py-20">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <img src="/images/horse.jpg" alt="Aysia LinggarWati Journey"
          class="w-full md:w-1/2 aspect-4/3 object-cover rounded-2xl shadow-md" />
        <div class="md:w-1/2 text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-serif text-[#4B3B2A] mb-4">
            About My Journey
          </h3>
          <p class="text-[#6B5B4B] leading-relaxed text-base md:text-lg">
            My passion for photography began with a love for remote places — the silent
            landscapes, the people untouched by modern rhythm, and cultures that survive
            against time. I travel to places most have never heard of, capturing the soul
            of simplicity and the stories that rarely reach the world.
          </p>
          <p class="mt-6 text-[#7A6B5A] italic">
            “Every journey teaches me to see, not just to look.”
          </p>
        </div>
      </div>
    </section>

    <!-- ✅ Places I’ve Explored -->
    <section class="bg-[#F5F2E9] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h3 class="text-2xl md:text-3xl font-serif text-center text-[#4B3B2A] mb-12">
          Some Places I’ve Explored
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <!-- Mentawai -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/mentawai.jpg" alt="Mentawai, Siberut" class="w-full h-56 object-cover" />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">Mentawai, Siberut</h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                Among ancestral tattoos and jungle whispers, life flows with faith and tradition.
              </p>
            </div>
          </div>

          <!-- Ethiopia -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/ethiopia.jpg" alt="Omo, Ethiopia" class="w-full h-56 object-cover" />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">Omo, Ethiopia</h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                In the valley of tribes, color, spirit, and ritual merge under the African sun.
              </p>
            </div>
          </div>

          <!-- Cappadocia -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/cappadocia.jpg" alt="Cappadocia, Turki" class="w-full h-56 object-cover" />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">Cappadocia, Turki</h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                Ancient stones and drifting balloons — a dream carved by wind and time.
              </p>
            </div>
          </div>

          <!-- Lathmar Holi -->
          <div class="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/lathmar-holi.png" alt="Lathmar Holi, India" class="w-full h-56 object-cover" />
            <div class="p-4 text-center bg-[#EAE4D4]">
              <h4 class="font-serif text-[#4B3B2A]">Lathmar Holi, India</h4>
              <p class="text-sm text-[#6B5B4B] mt-2">
                Chaos and color collide — devotion painted in the hues of joy and defiance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ✅ Closing Quote -->
    <section class="bg-[#EAE4D4] py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-[#4B3B2A] text-lg md:text-xl italic max-w-3xl mx-auto">
          “I travel not to escape life, but for life not to escape me.”
        </p>
        <p class="mt-3 text-[#6B5B4B] text-sm">— Aysia LinggarWati</p>
      </div>
    </section>
  </section>
</template>
