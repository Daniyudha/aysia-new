<script setup lang="ts">
import { pagesAboutFetchData } from "~/repository/modules/pages-about";

useHead({
  title: "Aysia LinggarWati - About",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore our portfolio and discover the essence of our work.",
    },
    {
      name: "keywords",
      content: "Aysia LinggarWati, portfolio, creative, design, elegance",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});

const { data } = useAsyncData("page-about-content", () => pagesAboutFetchData().getAll(), {
  lazy: true,
});
const sharedData = inject<SocialMediaResponse | null>("socialMedia");
</script>

<template>
  <section class="py-6">
    <div class="app-container">
      <div class="flex flex-col lg:flex-row gap-6 justify-between items-center">
        <div class="lg:w-5/12">
          <img
            v-if="!!data?.data?.[0]?.thumbnail?.length"
            :src="useRuntimeConfig().public.apiBase + data?.data?.[0]?.thumbnail"
            :alt="data?.data?.[0]?.title"
            width="530"
            height="707"
            class="w-full h-auto object-cover object-top rounded-lg"
          >
        </div>
        <div class="lg:w-6/12 flex flex-col justify-center">
          <p class="text-[1.5rem] md:text-[2rem] text-app-secondary font-light">
            About
          </p>
          <h1
            class="mb-6 text-[3rem] md:text-[6rem] font-medium leading-[100%] tracking-[0%] text-app-secondary"
          >
            {{ data?.data?.[0]?.title ?? "Asyia Linggarwati" }}
          </h1>
          <ul class="flex space-x-8 mb-6">
            <li v-if="!!sharedData?.instagram?.link?.length">
              <NuxtLink
                :to="sharedData?.instagram?.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram fill="#533A1B" />
              </NuxtLink>
            </li>
            <li v-if="!!sharedData?.tiktok?.link?.length">
              <NuxtLink
                :to="sharedData?.tiktok?.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconTiktok fill="#533A1B" />
              </NuxtLink>
            </li>
          </ul>
          <div class="font-sans text-sm space-y-6 font-light" v-html="data?.data?.[0]?.description" />
        </div>
      </div>
    </div>
  </section>
</template>
