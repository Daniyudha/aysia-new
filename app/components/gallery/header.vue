<template>
  <section class="py-4 border-y border-app-secondary">
    <div class="app-container">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <h1 class="font-fraunces text-app-secondary text-5xl font-normal leading-[100%]">
          Portfolio
        </h1>
        <div class="w-full md:w-6/12">
          <slot name="filter" />
        </div>
      </div>
    </div>
  </section>
</template>
