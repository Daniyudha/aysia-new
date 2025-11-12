/* eslint-disable no-console */
export default defineNuxtPlugin({
  setup() {
    const { accessToken } = useAuthCookie();
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiBase as string,
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      onRequest({ options }) {
        if (accessToken.value?.length) {
          options.headers = {
            Authorization: `Bearer ${accessToken.value}`,
          } as any;
        }
      },
      onResponse: () => {},
      onRequestError: (error) => {
        console.log(error);
      },
      onResponseError: (error) => {
        if (error?.response?.status === 401) {
          navigateTo({ name: "login" });
        }
        console.log(error);
      },
    });

    return {
      provide: { api },
    };
  },
});
