<script setup lang="ts">
type Props = {
  collections: JourneyResponse[];
  chunckSize?: number;
  pending?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  chunckSize: 2,
});

const groupedGalleries = computed((): JourneyResponse[][] => {
  const groups: JourneyResponse[][] = [];
  const size = props.chunckSize;

  for (let i = 0; i < props?.collections?.length; i += size) {
    groups.push(props.collections.slice(i, i + size));
  }

  return groups;
});
</script>

<template>
  <div v-if="pending" class="flex justify-center my-10 animate-spin">
    <Icon name="gg:spinner" style="width: 4rem; height: 4rem;" />
  </div>
  <p v-else-if="!pending && !collections.length" class="text-center text-3xl my-6">
    No galleries found.
  </p>
  <template v-else-if="!pending && collections.length">
    <section>
      <div class="md:hidden">
        <div
          v-for="(item, index) in collections"
          :key="index"
          class="border-b py-10"
        >
          <div class="app-container">
            <div class="collection-grid">
              <NuxtLink
                :to="{
                  name: 'galleries-galleryId',
                  params: { galleryId: item?.id },
                }"
                class="group flex flex-col items-end w-full text-app-secondary"
              >
                <img
                  :src="`${useRuntimeConfig().public.apiBase}${item?.thumbnail}`"
                  :alt="item.title"
                  class="w-full h-auto object-cover object-top mb-3"
                >
                <p class="text-base font-light text-right">
                  {{ item?.gallery_category_name }}
                </p>
                <p
                  class="group-hover:after:block font-medium text-4xl text-right relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all"
                >
                  {{ item?.title }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="app-container hidden md:block">
        <div class="masonry-grid">
          <div
            v-for="(item, index) in collections"
            :key="index"
            class="masonry-item p-4"
          >
            <NuxtLink
              :to="{
                name: 'galleries-galleryId',
                params: { galleryId: item?.id },
              }"
              class="group block text-app-secondary"
            >
              <div class="relative overflow-hidden rounded-lg mb-4">
                <img
                  :src="`${useRuntimeConfig().public.apiBase}${item?.thumbnail}`"
                  :alt="item.title"
                  class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                >
              </div>
              <p class="text-base font-light text-right mb-2">
                {{ item?.gallery_category_name }}
              </p>
              <p
                class="font-medium text-4xl text-right relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all group-hover:after:block"
              >
                {{ item?.title }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
@reference "../../assets/css/main.css";

.masonry-grid {
  column-count: 2;
  column-gap: 2rem;
}

.masonry-item {
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin-bottom: 2rem;
}

/* Responsive masonry columns */
@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}

@media (min-width: 1280px) {
  .masonry-grid {
    column-count: 4;
  }
}

.grouped-collection-row {
  @apply border-b;
}
.collection-grid {
  @apply grid grid-cols-1 md:grid-cols-2;
}
.collection-grid > .collection-grid-item {
  @apply py-10 flex odd:justify-end md:odd:pr-10 md:even:pl-10 md:odd:border-r;
}
</style>
