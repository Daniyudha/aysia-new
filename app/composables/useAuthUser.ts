export type ReturnAuthUser = {
  loading: boolean;
  error: boolean;
  auth: AuthLoginResponse | null;
};

export function useAuthUser() {
  return useState<ReturnAuthUser>("auth", () => ({
    loading: false,
    error: false,
    auth: null,
  }));
}
