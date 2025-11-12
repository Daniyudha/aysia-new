export function categoryRepository<T>(fetch: FetchType<T>) {
  return {
    async create(payload: GalleryCategoryPayload): Promise<GalleryCategoryResponse> {
      return fetch(API_URL_LIST.CATEGORY, { method: "POST", body: JSON.stringify(payload) });
    },
    async get(params: PaginationParams): Promise<PaginationResponse<GalleryCategoryResponse[]>> {
      return fetch(API_URL_LIST.CATEGORY, { method: "get", params });
    },
    async getById(id: string): Promise<GalleryCategoryResponse> {
      return fetch(API_URL_LIST.CATEGORY_BY_ID(id), { method: "get" });
    },
    async updateById(id: string, payload: GalleryCategoryPayload): Promise<GalleryCategoryResponse> {
      return fetch(API_URL_LIST.CATEGORY_BY_ID(id), {
        method: "put",
        body: JSON.stringify(payload),
      });
    },
    async deleteById(id: string): Promise<GalleryCategoryResponse> {
      return fetch(API_URL_LIST.CATEGORY_BY_ID(id), { method: "delete" });
    },
  };
}

export function categoryFetcher() {
  const { $api } = useNuxtApp();
  return categoryRepository($api);
}
