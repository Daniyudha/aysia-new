function pagesAboutRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(params?: PaginationParams): Promise<PaginationResponse<PageAboutResponse[]>> {
      return fetch(API_URL_LIST.PAGES_ABOUT, {
        method: "get",
        params,
      });
    },
    async create(payload: PageAboutPayload): Promise<PageAboutResponse> {
      const formData = new FormData();
      formData.append("description", payload.description);
      formData.append("title", payload.title);
      if (payload?.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }
      return fetch(API_URL_LIST.PAGES_ABOUT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },
  };
}

export function pagesAboutFetchData() {
  const { $api } = useNuxtApp();
  return pagesAboutRepository($api);
}
