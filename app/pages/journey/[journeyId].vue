<script setup lang="ts">
import { useAsyncData, useRuntimeConfig } from "#app";
import { computed, ref, watch } from "vue";

import { blogFetcher } from "~/repository/modules/blog";
import { blogDetailFetcher } from "~/repository/modules/blog-detail";

import JourneyContent from "./JourneyContent.vue";

definePageMeta({
  headerBg: "transparent",
  headerLight: true,
});

const route = useRoute();
const journeyId = route.params.journeyId as string;

const journey = ref<any>(null);

const apiBase = useRuntimeConfig().public.apiBase;

// Fetch blog
const { data: blog, pending, error } = await useAsyncData(
  `blog-${journeyId}`,
  async () => {
    try {
      return await blogFetcher().getById(journeyId);
    }
    catch (err) {
      console.error("Failed to fetch blog:", err);
      return null;
    }
  },
  { lazy: true },
);

watch(blog, () => {
  if (blog.value) {
    const b = blog.value;
    journey.value = {
      journeyId: b.id,
      title: b.title,
      subtitle: b.tag || "",
      heroImage: b.thumbnail ? apiBase + b.thumbnail : "/images/placeholder.jpg",
      content: `<p>${b.description.replace(/\n/g, "</p><p>")}</p>`,
    };
  }
  else {
    journey.value = null;
  }
}, { immediate: true });
useHead({
  title: computed(() =>
    journey.value
      ? `Aysia LinggarWati - ${journey.value.title}`
      : "Aysia LinggarWati - Journey",
  ),
});
</script>

<template>
  <section v-if="journey" class="journey-detail">
    <div
      class="journey-hero"
      :style="{ backgroundImage: `url(${journey.heroImage})` }"
    >
      <div class="journey-hero-overlay">
        <h1>{{ journey.title }}</h1>
        <p>{{ journey.subtitle }}</p>
      </div>
    </div>

    <div class="journey-body">
      <JourneyContent :html="journey.content" />
    </div>
  </section>

  <div v-else class="text-center py-40">
    Journey not found
  </div>
</template>

<style scoped>
.journey-detail {
  background-color: #eae4d4;
}

/* HERO */
.journey-hero {
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 96px;
}

.journey-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

.journey-hero-overlay {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f5f2e9;
  padding: 0 24px;
}

.journey-hero h1 {
  font-family: "Fraunces", serif;
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 16px;
}

.journey-hero p {
  max-width: 640px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  opacity: 0.9;
}

/* BODY */
.journey-body {
  margin: 0 auto;
  padding: 32px 24px;
}

@media (max-width: 768px) {
  .journey-hero h1 {
    font-size: 40px;
  }

  .journey-body {
    padding: 80px 16px;
  }
}
</style>
