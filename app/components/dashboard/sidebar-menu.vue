<script setup lang="ts">
type MenuItem = {
  title: string;
  url: string;
  icon: string;
  actions?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { title: "Overview", url: "/dashboard", icon: "lucide:home" },
  { title: "Category", url: "/dashboard/categories", icon: "iconamoon:category-thin" },
  { title: "Portfolio", url: "/dashboard/portfolio", icon: "lucide:images" },
  { title: "Gallery", url: "/dashboard/explore", icon: "lucide:compass" },
  { title: "Nature", url: "/dashboard/nature", icon: "lucide:leaf" },
  { title: "Journey", url: "/dashboard/journey", icon: "lucide:map" },
  {
    title: "Social Media",
    url: "/dashboard/social-media",
    icon: "streamline-ultimate:corporate-social-media",
  },
  {
    title: "About Page",
    url: "/dashboard/about-page",
    icon: "streamline-logos:about-me-logo-solid",
  },
];
const route = useRoute();

function checkAriaCurrent(itemUrl: string, routePath: string) {
  const prefixDashboardUrl = "/dashboard";
  const isUrlDashboard
    = itemUrl === prefixDashboardUrl || itemUrl === "/dashboard/";
  if (
    isUrlDashboard
    && (routePath === prefixDashboardUrl || routePath === "/dashboard/")
  ) {
    return "page";
  }
  if (!isUrlDashboard && routePath.startsWith(itemUrl)) {
    return "page";
  }
  return undefined;
}
</script>

<template>
  <UiSidebarMenu class="space-y-0.5">
    <UiSidebarMenuItem v-for="item in menuItems" :key="item.title">
      <UiSidebarMenuButton as-child>
        <NuxtLink
          :href="item.url"
          :aria-current="checkAriaCurrent(item.url, route.path)"
        >
          <Icon :name="item.icon" class="text-app-secondary text-lg" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </UiSidebarMenuButton>
    </UiSidebarMenuItem>
  </UiSidebarMenu>
</template>
