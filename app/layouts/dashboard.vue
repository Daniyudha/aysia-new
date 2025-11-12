<script setup lang="ts">
import type { Crumbs } from "~/components/ui/breadcrumbs.vue";

useHead({
  title: "Aysia LinggarWati - Dashboard",
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
useHead({
  htmlAttrs: {
    class: "dashboard-layout",
  },
});
const route = useRoute();
const { state: confirmState, loading: confirmLoading, handleConfirm, handleCancel } = useConfirmDialog();
</script>

<template>
  <UiSidebarProvider>
    <ClientOnly>
      <UiSidebar>
        <UiSidebarContent>
          <UiSidebarGroup>
            <NuxtLink to="/">
              <UiSidebarGroupLabel
                class="text-dashboard-accent-50 text-4xl font-bold py-4 mb-4 !h-auto"
              >
                <p class="font-cinzel-decorative">
                  A<span class="text-xl">YSIA</span><br>L<span class="text-xl">inggarWati</span>
                </p>
              </UiSidebarGroupLabel>
            </NuxtLink>
            <UiSidebarGroupContent>
              <DashboardSidebarMenu />
            </UiSidebarGroupContent>
          </UiSidebarGroup>
        </UiSidebarContent>
      </UiSidebar>
    </ClientOnly>
    <UiSidebarInset class="bg-dashboard-neutral-100/20">
      <UiNavbar
        sticky
        class="bg-dashboard-neutral-50 border-b-dashboard-neutral-50 shadow"
      >
        <UiContainer class="w-full flex items-center gap-4 h-14">
          <UiSidebarTrigger />
          <UiSeparator
            orientation="vertical"
            class="h-6/12 bg-dashboard-neutral-100/50"
          />
          <UiBreadcrumbs :items="(route.meta?.crumbs as Crumbs[]) || []" />
          <DashboardUserDropdown />
        </UiContainer>
      </UiNavbar>
      <div class="p-4">
        <slot />
      </div>
    </UiSidebarInset>
  </UiSidebarProvider>
  <UiConfirmDialog
    :is-open="confirmState.isOpen"
    :options="confirmState.options"
    :loading="confirmLoading"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  />
</template>
