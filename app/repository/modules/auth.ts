export function authRepository<T>(fetch: FetchType<T>) {
  return {
    async login(payload: AuthLoginPayload): Promise<AuthLoginResponse> {
      return fetch(API_URL_LIST.LOGIN, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
  };
}
