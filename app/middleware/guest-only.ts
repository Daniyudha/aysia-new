export default defineNuxtRouteMiddleware(async () => {
  const { accessToken } = useAuthCookie();

  if (accessToken.value) {
    if (import.meta.server)
      return navigateTo({ name: "dashboard" });

    return abortNavigation();
  }
});
