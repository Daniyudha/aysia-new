export function socialMediaRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(): Promise<SocialMediaResponse> {
      return fetch(API_URL_LIST.SOCIAL_MEDIA, { method: "get" });
    },
    async update(payload: SocialMediaPayload): Promise<SocialMediaResponse> {
      return fetch(API_URL_LIST.SOCIAL_MEDIA, {
        method: "put",
        body: JSON.stringify(payload),
      });
    },
  };
}

export function socialMediaFetchData() {
  const { $api } = useNuxtApp();
  return socialMediaRepository($api);
}
