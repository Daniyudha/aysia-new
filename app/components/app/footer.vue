<script setup lang="ts">
defineProps<{ socialMedia?: SocialMediaResponse }>();
</script>

<template>
  <footer class="bg-app-secondary py-6 text-app-primary overflow-hidden">
    <div class="app-container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">

        <!-- Brand -->
        <NuxtLink
          to="/"
          class="text-center font-cinzel-decorative text-2xl md:text-3xl text-app-text-primary tracking-wide"
        >
          Aysia<br>
          Linggarwati
        </NuxtLink>

        <!-- Navigation + Socials -->
        <div class="flex flex-col items-center md:items-end">
          <ul class="flex flex-wrap justify-center md:justify-end items-center gap-5 md:gap-7 mb-3">
            <li><NuxtLink to="/about" class="footer-link">About</NuxtLink></li>
            <li><span class="footer-divider">|</span></li>
            <li><NuxtLink to="/galleries" class="footer-link">Gallery</NuxtLink></li>
            <li><span class="footer-divider">|</span></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>

            <li v-if="!!$props?.socialMedia?.instagram1?.link?.length" class="hidden lg:inline-block">
              <a
                :href="$props?.socialMedia?.instagram1?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconInstagram1 />
              </a>
            </li>
            <li v-if="!!$props?.socialMedia?.instagram2?.link?.length" class="hidden lg:inline-block">
              <a
                :href="$props?.socialMedia?.instagram2?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconInstagram2 />
              </a>
            </li>
            <li v-if="!!$props?.socialMedia?.instagram3?.link?.length" class="hidden lg:inline-block">
              <a
                :href="$props?.socialMedia?.instagram3?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconInstagram3 />
              </a>
            </li>
            <li v-if="!!$props?.socialMedia?.tiktok?.link?.length" class="hidden lg:inline-block">
              <a
                :href="$props?.socialMedia?.tiktok?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconTiktok />
              </a>
            </li>
          </ul>

          <ul class="flex flex-wrap justify-center md:justify-end items-center gap-5 md:gap-7 mb-3 lg:hidden">
            <li v-if="!!$props?.socialMedia?.instagram1?.link?.length">
              <a
                :href="$props?.socialMedia?.instagram1?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconInstagram1 />
              </a>
            </li>
            <li v-if="!!$props?.socialMedia?.instagram2?.link?.length">
              <a
                :href="$props?.socialMedia?.instagram2?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconInstagram2 />
              </a>
            </li>
            <li v-if="!!$props?.socialMedia?.instagram3?.link?.length">
              <a
                :href="$props?.socialMedia?.instagram3?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconInstagram3 />
              </a>
            </li>
            <li v-if="!!$props?.socialMedia?.tiktok?.link?.length">
              <a
                :href="$props?.socialMedia?.tiktok?.link"
                target="_blank"
                rel="noopener"
                class="footer-social-link"
              >
                <IconTiktok />
              </a>
            </li>
          </ul>

          <!-- Credit -->
          <p class="text-sm md:text-base font-light text-app-text-primary/70 tracking-wide">
            © 2025 <span class="text-app-text-primary font-medium">Aysia Linggarwati</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference "../../assets/css/main.css";

.footer-link {
  @apply font-light italic text-lg leading-[26px] text-center text-app-text-primary/80 hover:text-app-text-primary transition-colors;
}

.footer-divider {
  @apply text-app-text-primary/40 text-lg mx-1 md:mx-2;
}

.footer-social-link svg {
  width: 1.1rem;
  height: auto;
  @apply text-app-text-primary/80 hover:text-app-text-primary transition-colors;
}
</style>
