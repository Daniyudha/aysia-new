export function useAuthCookie() {
  const userAuthName = useCookie<{ name: string; role: string } | null>("userAuthName", {
    default: () => null,
    maxAge: Number(SIDEBAR_COOKIE_MAX_AGE),
  });
  const accessToken = useCookie<string | null>(
    "authCookie",
    {
      default: () => null,
      maxAge: Number(SIDEBAR_COOKIE_MAX_AGE),
    },
  );

  const setToken = (token: string | null) => {
    accessToken.value = token;
  };

  return {
    accessToken,
    setToken,
    userAuthName,
  };
}
