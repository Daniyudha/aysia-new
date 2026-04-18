<script setup lang="ts">
import { pagesAboutFetchData } from "~/repository/modules/pages-about";

useHead({
  title: "Aysia LinggarWati - About",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance.",
    },
    { name: "keywords", content: "Aysia LinggarWati, portfolio, creative" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});

const { data, pending } = useAsyncData(
  "page-about-content",
  () => pagesAboutFetchData().getAll(),
  { lazy: true },
);

const sharedData = inject<SocialMediaResponse | null>("socialMedia");
</script>

<template>
  <section class="py-16">
    <div class="app-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- ================= IMAGE ================= -->
        <div class="w-full">
          <!-- SKELETON IMAGE -->
          <div
            v-if="pending"
            class="about-image-skeleton"
          />

          <!-- REAL IMAGE -->
          <img
            v-else-if="data?.data?.[0]?.thumbnail"
            :src="useRuntimeConfig().public.apiBase + data.data[0].thumbnail"
            :alt="data.data[0].title"
            width="530"
            height="707"
            class="w-full h-full object-cover object-top rounded-lg"
          >
        </div>

        <!-- ================= CONTENT ================= -->
        <div class="flex flex-col justify-center">
          <!-- SKELETON CONTENT -->
          <div v-if="pending" class="space-y-6">
            <div class="skeleton-line w-32 h-6" />
            <div class="skeleton-line w-3/4 h-20" />

            <div class="flex gap-6">
              <div class="skeleton-circle" />
              <div class="skeleton-circle" />
            </div>

            <div class="space-y-3">
              <div class="skeleton-line w-full h-4" />
              <div class="skeleton-line w-full h-4" />
              <div class="skeleton-line w-5/6 h-4" />
            </div>
          </div>

          <!-- REAL CONTENT -->
          <template v-else>
            <p class="text-[1.5rem] md:text-[2rem] text-app-secondary font-light">
              About
            </p>

            <h1
              class="mb-6 text-[3rem] md:text-[6rem] font-medium leading-[100%] text-app-secondary"
            >
              {{ data?.data?.[0]?.title ?? "Aysia Linggarwati" }}
            </h1>

            <ul class="flex space-x-8 mb-6">
              <li v-if="sharedData?.instagram?.link">
                <NuxtLink
                  :to="sharedData.instagram.link"
                  external
                  target="_blank"
                  class="link-with-icon"
                >
                  <IconInstagram fill="#533A1B" />
                </NuxtLink>
              </li>
              <li v-if="sharedData?.tiktok?.link">
                <NuxtLink
                  :to="sharedData.tiktok.link"
                  external
                  target="_blank"
                  class="link-with-icon"
                >
                  <IconTiktok fill="#533A1B" />
                </NuxtLink>
              </li>
            </ul>

            <div
              class="font-sans text-sm space-y-6 font-light"
              v-html="data?.data?.[0]?.description"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  /* ================= ABOUT SKELETON ================= */
.about-image-skeleton {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  background: linear-gradient(100deg, #e5e5e5 40%, #f0f0f0 50%, #e5e5e5 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-line {
  border-radius: 6px;
  background: linear-gradient(100deg, #e0e0e0 40%, #f2f2f2 50%, #e0e0e0 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(100deg, #e0e0e0 40%, #f2f2f2 50%, #e0e0e0 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  to {
    background-position: -200% 0;
  }
}
</style>
