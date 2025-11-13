<script setup lang="ts">
import { inject, watchEffect } from 'vue'
import { useI18n } from '~/composables/useI18n'
const { t, getCurrentLanguage } = useI18n()

const sharedData = inject<SocialMediaResponse | null>('socialMedia')

// ✅ Gunakan meta dinamis tergantung bahasa aktif
useHead(() => ({
  title: `Aysia LinggarWati - ${t('contact.title')}`,
  meta: [
    {
      name: 'description',
      content: t('contact.meta_description'),
    },
    {
      name: 'keywords',
      content: t('contact.meta_keywords'),
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
}))
</script>

<template>
  <section class="py-6">
    <div class="app-container">
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <!-- ✅ Gambar -->
        <div class="lg:w-5/12">
          <img
            src="/images/contact-image-001.png"
            alt="Aysia Contact"
            width="530"
            height="707"
            class="w-full h-auto object-cover object-top"
          />
        </div>

        <!-- ✅ Konten teks -->
        <div class="lg:w-6/12 flex flex-col justify-center">
          <h1
            class="mb-6 text-[4rem] font-medium leading-[100%] tracking-[0%] text-app-secondary"
          >
            {{ t('contact.heading') }}
          </h1>

          <div class="font-sans text-sm space-y-6 font-light mb-6">
            <p>{{ t('contact.paragraph1') }}</p>
            <p>{{ t('contact.paragraph2') }}</p>
          </div>

          <!-- ✅ Sosial media -->
          <ul class="flex items-center space-x-6 flex-wrap mb-6">
            <li v-if="!!sharedData?.instagram1?.link?.length">
              <NuxtLink
                :to="sharedData.instagram1.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram1 fill="#533A1B" />
              </NuxtLink>
            </li>

            <li v-if="!!sharedData?.instagram2?.link?.length">
              <NuxtLink
                :to="sharedData.instagram2.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram2 fill="#533A1B" />
              </NuxtLink>
            </li>

            <li v-if="!!sharedData?.instagram3?.link?.length">
              <NuxtLink
                :to="sharedData.instagram3.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram3 fill="#533A1B" />
              </NuxtLink>
            </li>

            <li v-if="!!sharedData?.tiktok?.link?.length">
              <NuxtLink
                :to="sharedData.tiktok.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconTiktok fill="#533A1B" />
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                :to="sharedData?.whatsapp?.link"
                external
                target="_blank"
                class="link-with-icon relative space-x-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-0.5 after:bg-app-secondary after:hidden after:transition-all hover:after:block items-center"
              >
                <IconWhatsapp fill="#533A1B" />
                <span
                  class="inline-block text-2xl font-normal leading-[100%]"
                >
                  {{ t('contact.whatsapp_text') }}
                </span>
              </NuxtLink>
            </li>
          </ul>

          <ContactMessageForm />
        </div>
      </div>
    </div>
  </section>
</template>
