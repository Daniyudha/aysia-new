<script setup lang="ts">
type Props = {
  collections: JourneyResponse[];
  chunckSize?: number;
  pending?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  chunckSize: 2,
  pending: false,
});

const groupedGalleries = computed((): JourneyResponse[][] => {
  const groups: JourneyResponse[][] = [];
  const size = props.chunckSize;

  for (let i = 0; i < props.collections.length; i += size) {
    groups.push(props.collections.slice(i, i + size));
  }

  return groups;
});
</script>

<template>
  <!-- ================= SKELETON ================= -->
  <section v-if="pending">
    <!-- MOBILE -->
    <div class="md:hidden">
      <div
        v-for="i in 3"
        :key="i"
        class="border-b py-8"
      >
        <div class="app-container">
          <div class="collection-grid">
            <div class="flex flex-col items-end w-full">
              <div class="skeleton-image mb-3" />
              <div class="skeleton-line w-32 mb-2" />
              <div class="skeleton-line w-64 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      v-for="row in 2"
      :key="row"
      class="grouped-collection-row hidden md:block"
    >
      <div class="app-container">
        <div class="collection-grid">
          <div
            v-for="col in chunckSize"
            :key="col"
            class="collection-grid-item"
          >
            <div class="flex flex-col items-end w-full">
              <div class="skeleton-image-square mb-3" />
              <div class="skeleton-line w-32 mb-2" />
              <div class="skeleton-line w-72 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= EMPTY STATE ================= -->
  <p v-else-if="!collections.length" class="text-center text-3xl my-6">
    No galleries found.
  </p>

  <!-- ================= REAL CONTENT ================= -->
  <section v-else>
    <!-- MOBILE -->
    <div class="md:hidden">
      <div
        v-for="(item, index) in collections"
        :key="index"
        class="border-b py-8"
      >
        <div class="app-container">
          <div class="collection-grid">
            <NuxtLink
              :to="{ name: 'portfolio-galleryId', params: { galleryId: item.id } }"
              class="group flex flex-col items-end w-full text-app-secondary"
            >
              <img
                :src="`${useRuntimeConfig().public.apiBase}${item.thumbnail}`"
                :alt="item.title"
                class="w-full h-auto object-cover object-top mb-3"
              >
              <p class="text-base font-light text-right">
                {{ item.gallery_category_name }}
              </p>
              <p
                class="font-serif font-medium text-3xl text-right relative
                       after:absolute after:left-0 after:bottom-0 after:right-0
                       after:h-1 after:bg-app-secondary after:hidden
                       group-hover:after:block"
              >
                {{ item.title }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      v-for="(groupedGallery, index) in groupedGalleries"
      :key="index"
      class="grouped-collection-row hidden md:block"
    >
      <div class="app-container">
        <div class="collection-grid">
          <div
            v-for="(item, indexItem) in groupedGallery"
            :key="indexItem"
            class="collection-grid-item"
          >
            <NuxtLink
              :to="{ name: 'portfolio-galleryId', params: { galleryId: item.id } }"
              class="group flex flex-col items-end w-full text-app-secondary"
            >
              <img
                :src="`${useRuntimeConfig().public.apiBase}${item.thumbnail}`"
                :alt="item.title"
                class="w-full h-auto object-cover object-top mb-3 aspect-square"
              >
              <p class="text-base font-light text-right font-franuces">
                {{ item.gallery_category_name }}
              </p>
              <p
                class="font-medium font-serif text-4xl text-right relative
                       after:absolute after:left-0 after:bottom-0 after:right-0
                       after:h-1 after:bg-app-secondary after:hidden
                       group-hover:after:block"
              >
                {{ item.title }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../../assets/css/main.css";

/* EXISTING */
.grouped-collection-row {
  @apply border-b;
}
.collection-grid {
  @apply grid grid-cols-1 md:grid-cols-2;
}
.collection-grid > .collection-grid-item {
  @apply py-10 flex odd:justify-end md:odd:pr-10 md:even:pl-10 md:odd:border-r;
}

/* ================= SKELETON ================= */
.skeleton-image {
  width: 100%;
  height: 260px;
  border-radius: 8px;
  background: linear-gradient(100deg, #e5e5e5 40%, #f2f2f2 50%, #e5e5e5 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-image-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background: linear-gradient(100deg, #e5e5e5 40%, #f2f2f2 50%, #e5e5e5 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-line {
  height: 16px;
  border-radius: 6px;
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
