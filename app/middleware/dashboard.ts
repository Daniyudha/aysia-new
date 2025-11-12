export default defineNuxtRouteMiddleware(async () => {
  const { accessToken } = useAuthCookie();
  if (!accessToken.value)
    return navigateTo({ name: "login" });
});
