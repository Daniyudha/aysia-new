<template>
  <header class="pt-12 pb-9">
    <div class="app-container py-4">
      <div class="flex flex-col md:flex-row justify-between gap-4">
        <NuxtLink
          to="/"
          class="text-center inline-block font-cinzel-decorative text-app-secondary text-2xl leading-[100%] tracking-[-5%]"
        >
          Aysia<br>
          Linggarwati
        </NuxtLink>
        <ul class="py-2 flex gap-10 md:gap-[72px] justify-center">
          <li>
            <NuxtLink to="/" class="header-link">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="header-link">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/galleries" class="header-link">
              Gallery
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="header-link">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference "../../assets/css/main.css";

.header-link {
  @apply px-2 pb-1 text-2xl text-app-secondary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all hover:after:block aria-[current="page"]:after:block aria-[current="page"]:italic aria-[current="page"]:font-semibold;
}
</style>
