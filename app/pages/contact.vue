<script setup lang="ts">
useHead({
  title: "Aysia LinggarWati - Contact",
  meta: [
    {
      name: "description",
      content: "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore our portfolio and discover the essence of our work.",
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
const sharedData = inject<SocialMediaResponse | null>("socialMedia");
</script>

<template>
  <section class="py-6">
    <div class="app-container">
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <div class="lg:w-5/12">
          <img
            src="/images/contact-image-001.png"
            alt=""
            width="530"
            height="707"
            class="w-full h-auto object-cover object-top"
          >
        </div>
        <div class="lg:w-6/12 flex flex-col justify-center">
          <h1 class="mb-6 text-[4rem] font-medium leading-[100%] tracking-[0%] text-app-secondary">
            Lets Connect!
          </h1>
          <div class="font-sans text-sm space-y-6 font-light mb-6">
            <p>Reach out through my contact form below and we can start creating your vision together!</p>
            <p>Use the tabs below to read about what it&quot;s like to shoot with me, frequently asked questions, my pricing, and more so you know what you&quot;re getting yourself into. Please don&quot;t hesitate to ask any additional questions!</p>
          </div>
          <ul class="flex items-center space-x-6 flex-wrap mb-6">
            <li v-if="!!sharedData?.instagram1?.link?.length">
              <NuxtLink
                :to="sharedData?.instagram1?.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram1 fill="#533A1B" />
              </NuxtLink>
            </li>
            <li v-if="!!sharedData?.instagram2?.link?.length">
              <NuxtLink
                :to="sharedData?.instagram2?.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram2 fill="#533A1B" />
              </NuxtLink>
            </li>
            <li v-if="!!sharedData?.instagram3?.link?.length">
              <NuxtLink
                :to="sharedData?.instagram3?.link"
                external
                target="_blank"
                class="link-with-icon"
              >
                <IconInstagram3 fill="#533A1B" />
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
            <li>
              <NuxtLink
                :to="sharedData?.whatsapp?.link"
                external
                target="_blank"
                class="link-with-icon relative space-x-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-0.5 after:bg-app-secondary after:hidden after:transition-all hover:after:block items-center"
              >
                <IconWhatsapp fill="#533A1B" />
                <span class="inline-block text-2xl font-normal leading-[100%]">or Send me Whatsapp!</span>
              </NuxtLink>
            </li>
          </ul>
          <ContactMessageForm />
        </div>
      </div>
    </div>
  </section>
</template>
