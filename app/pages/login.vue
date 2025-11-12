<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: ["guest-only"],
});
useHead({
  title: "Aysia LinggarWati - Login",
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
</script>

<template>
  <UiCard class="text-app-secondary py-8 border-app-secondary border">
    <UiCardHeader class="text-center pb-2">
      <h1 class="text-3xl font-medium">
        Welcome Back!
      </h1>
    </UiCardHeader>
    <UiCardDescription class="text-center">
      <p class="text-lg">
        Log in to access your dashboard and take control.
      </p>
    </UiCardDescription>
    <UiCardContent>
      <AuthLoginForm />
    </UiCardContent>
  </UiCard>
</template>
