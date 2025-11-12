import { authRepository } from "~/repository/modules/auth";

export function useAuth() {
  const { $api } = useNuxtApp();
  const authUser = useAuthUser();
  const { setToken, userAuthName } = useAuthCookie();
  const authRepo = authRepository($api);

  async function login(loginPayload: AuthLoginPayload) {
    authUser.value = {
      loading: true,
      error: false,
      auth: null,
    };
    try {
      const response = await authRepo.login(loginPayload);
      if (response?.token && response?.user) {
        setToken(response.token);
        authUser.value.auth = response;
        userAuthName.value = { name: response?.user?.name ?? "", role: response?.user?.role ?? "" };
      }
      return response;
    }
    catch (error) {
      authUser.value.error = true;
      useSonner.error((error as any)?.response?._data?.message || "Error.");
      throw error;
    }
    finally {
      authUser.value.loading = false;
    }
  }

  return { login, authUser };
}
