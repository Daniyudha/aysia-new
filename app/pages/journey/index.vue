<script setup>
import { useAsyncData, useRuntimeConfig } from "#app";
import { computed, ref } from "vue";

import { blogFetcher } from "~/repository/modules/blog";

import JourneyCard from "./JourneyCard.vue";

useHead({
  title: "Aysia LinggarWati - Journey",
});

// Fetch blogs
const { data: blogData, pending, error } = await useAsyncData(
  "journey-blogs",
  async () => {
    const response = await blogFetcher().getAll({ limit: 100 });
    return response?.data ?? [];
  },
  { lazy: true },
);

const apiBase = useRuntimeConfig().public.apiBase;

const blogs = computed(() => {
  const raw = blogData.value ?? [];
  return raw.map(blog => ({
    journeyId: blog.id,
    title: blog.title,
    tag: blog.tag,
    description: blog.description,
    image: blog.thumbnail ? apiBase + blog.thumbnail : "/images/placeholder.jpg",
  }));
});

const pageSize = 4;
const currentCount = ref(pageSize);
const loading = ref(false);

const visibleJourneys = computed(() =>
  blogs.value.slice(0, currentCount.value),
);

const canLoadMore = computed(() =>
  currentCount.value < blogs.value.length,
);

function loadMore() {
  loading.value = true;
  setTimeout(() => {
    currentCount.value += pageSize;
    loading.value = false;
  }, 800);
}
</script>

<template>
  <section class="journey">
    <div class="journey-header">
      <h1>Journey</h1>
      <p>
        I have traveled to over 27 countries in my career and am always adding more to my list.
        Check out my current journey list and top favorite locations
      </p>
    </div>

    <!-- Loading Skeleton -->
    <div v-if="pending && !blogData" class="journey-grid journey-skeleton">
      <div
        v-for="i in 4"
        :key="'skeleton-' + i"
        class="card skeleton-card"
        :class="{ offset: i % 2 === 1 }"
      >
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-tag"></div>
        </div>
      </div>
    </div>

    <!-- Journey Grid -->
    <div v-else class="journey-grid">
      <JourneyCard
        v-for="(item, index) in visibleJourneys"
        :key="item.journeyId"
        :data="item"
        :offset="index % 2 === 1"
      />
    </div>

    <!-- Error state -->
    <div v-if="error && !pending" class="journey-error">
      <p>Failed to load journeys. Please try again later.</p>
    </div>

    <div v-if="canLoadMore" class="journey-more">
      <button :disabled="loading" @click="loadMore">
        <span v-if="!loading" class="flex items-center gap-2">
          See more
          <svg
            class="w-4 h-4 mt-[1px]"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
        <span v-else class="loading">Loading...</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* ============================= */
/* BASE (MOBILE FIRST)            */
/* ============================= */
.journey {
  padding: 28px 16px 72px;
  background-color: #eae4d4;
  min-height: 100vh;
}

.journey-header {
  max-width: 720px;
  margin: 0 auto 64px;
  text-align: center;
}

.journey-header h1 {
  font-family: "Fraunces", serif;
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #564614;
}

.journey-header p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #564614;
}

.journey-grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 56px;
  column-gap: 32px;
}

.journey-more {
  margin-top: 64px;
  text-align: center;
}

.journey-more button {
  font-family: "Fraunces", serif;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #564614;
  cursor: pointer;
}

.journey-more button:hover {
  opacity: 0.8;
}

.journey-more button:disabled {
  opacity: 0.6;
  cursor: default;
}

.loading {
  font-style: italic;
}

.journey-error {
  text-align: center;
  padding: 60px 20px;
  color: #564614;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  opacity: 0.7;
}

/* ============================= */
/* SKELETON LOADING              */
/* ============================= */
.journey-skeleton {
  pointer-events: none;
}

.skeleton-card {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background: #f5f2e9;
  border: 1px solid #c8bda8;
  padding: 36px 24px;
}

.skeleton-card.offset {
  transform: translateY(80px);
}

@media (max-width: 767px) {
  .skeleton-card.offset {
    transform: translateY(0);
  }
}

.skeleton-image {
  width: 100%;
  aspect-ratio: 1.5 / 1;
  background: linear-gradient(90deg, #e0e0e0 25%, #d0d0d0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

.skeleton-content {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  height: 14px;
  border-radius: 4px;
  background: linear-gradient(90deg, #e0e0e0 25%, #d0d0d0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

.skeleton-line-title {
  width: 60%;
  height: 20px;
}

.skeleton-line-tag {
  width: 40%;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* ============================= */
/* md ≥ 768px  (tablet)          */
/* ============================= */
@media (min-width: 768px) {
  .journey {
    padding: 48px 24px 96px;
  }

  .journey-header h1 {
    font-size: 48px;
  }

  .journey-header {
    margin-bottom: 80px;
  }

  .journey-grid {
    row-gap: 72px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .journey-more {
    margin-top: 96px;
  }
}

/* ============================= */
/* lg ≥ 1024px  (laptop)         */
/* ============================= */
@media (min-width: 1024px) {
  .journey {
    padding: 80px 32px 120px;
  }

  .journey-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 80px;
    row-gap: 96px;
  }

  .journey-more {
    margin-top: 120px;
  }
}

/* ============================= */
/* xl ≥ 1280px  (desktop besar)  */
/* ============================= */
@media (min-width: 1280px) {
  .journey-grid {
    column-gap: 200px;
    row-gap: 100px;
  }

  .journey-header h1 {
    font-size: 56px;
  }

  .journey-more {
    margin-top: 120px;
  }
}
</style>