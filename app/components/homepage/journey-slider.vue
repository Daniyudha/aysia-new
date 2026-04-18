<script setup lang="ts">
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { blogFetcher } from "~/repository/modules/blog";

const { t } = useI18n();
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const { data: blogs, pending: _pending } = await useAsyncData(
  "homepage-journey-slider",
  async () => {
    const response = await blogFetcher().getAll({ limit: 6 });
    // Ensure we have at most 6 items
    return response.data.slice(0, 6);
  },
  { server: true },
);

const slides = computed(() => {
  if (!blogs.value)
    return [];
  return blogs.value.map(blog => ({
    id: blog.id,
    img: blog.thumbnail ? apiBase + blog.thumbnail : "/images/placeholder.jpg",
    title: blog.title,
    tag: blog.tag,
    description: blog.description,
  }));
});
</script>

<template>
  <section class="bg-[#F5F2E9] py-28 overflow-hidden">
    <div class="">
      <!-- HEADER -->
      <div class="app-container text-center mb-16">
        <h3 class="font-fraunces text-3xl md:text-5xl text-[#4B3B2A] mb-6">
          {{ t('home.places_title') }}
        </h3>
        <p class="text-[#6B5B4B] text-base md:text-lg max-w-3xl mx-auto">
          {{ t('home.places_description') }}
        </p>
      </div>

      <!-- SLIDER -->
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :grab-cursor="true"
        :speed="800"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }"
      >
        <SwiperSlide v-for="(item, i) in slides" :key="i">
          <NuxtLink :to="`/journey/${item.id}`" class="block hover:opacity-90 transition-opacity">
            <div class="slide-card">
              <div class="image-wrapper">
                <img
                  :src="item.img"
                  :alt="item.title"
                  draggable="false"
                >
              </div>

              <h4 class="font-fraunces text-[24px] text-app-secondary">
                {{ item.title }}
              </h4>
              <p class="text-app-secondary text-[16px] leading-relaxed">
                {{ item.tag }}
              </p>
            </div>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>

      <!-- CTA -->
      <div class="text-center mt-10">
        <NuxtLink to="/journey" class="inline-flex text-2xl items-center gap-2 text-app-secondary hover:opacity-70">
          {{ t('home.places_cta') }} →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper-slide {
  margin-right: 0 !important;
}

/* CARD */
.slide-card {
  border-top: 1px solid #9c8c74;
  border-bottom: 1px solid #9c8c74;
  border-right: 1px solid #9c8c74;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-top: 40px;
  height: 100%;
  background: transparent;
}

/* IMAGE */
.image-wrapper {
  overflow: hidden;
  margin-bottom: 16px;
}

.image-wrapper img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.6s ease;
  user-select: none;
}

.image-wrapper img:hover {
  transform: scale(1.03);
}
</style>
