export function galleryRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(params: PaginationParams): Promise<PaginationResponse<JourneyResponse[]>> {
      return fetch(API_URL_LIST.JOURNEY, {
        method: "GET",
        params,
      });
    },
    async getById(galleryId: string): Promise<JourneyResponse> {
      return fetch(API_URL_LIST.JOURNEY_BY_ID(galleryId), {
        method: "GET",
      });
    },
    async create(payload: JourneyPayload): Promise<JourneyResponse> {
      const formData = new FormData();
      formData.append("description", payload.description);
      formData.append("title", payload.title);
      if (payload?.gallery_category_id) {
        formData.append("gallery_category_id", payload.gallery_category_id);
      }
      if (payload?.tag) {
        formData.append("tag", payload.tag);
      }
      if (payload?.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }
      return fetch(API_URL_LIST.JOURNEY, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },
    async updateById(galleryId: string, payload: JourneyPayload): Promise<JourneyResponse> {
      console.log("updateById payload:", payload);
      const formData = new FormData();
      formData.append("description", payload.description);
      formData.append("title", payload.title);
      if (payload?.gallery_category_id) {
        formData.append("gallery_category_id", payload.gallery_category_id);
      }
      if (payload?.tag) {
        formData.append("tag", payload.tag);
      }
      if (payload?.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }
      // Log FormData entries for debugging
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      return fetch(API_URL_LIST.JOURNEY_BY_ID(galleryId), {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },
    async deleteById(galleryId: string): Promise<JourneyResponse> {
      return fetch(API_URL_LIST.JOURNEY_BY_ID(galleryId), {
        method: "DELETE",
      });
    },
    async getByCategoryId(categoryId: string, params?: PaginationParams): Promise<PaginationResponse<JourneyResponse[]>> {
      return fetch(API_URL_LIST.JOURNEY_BY_CATEGORY_ID(categoryId), {
        method: "GET",
        params,
      });
    },
  };
}

export function journeyFetcher() {
  const { $api } = useNuxtApp();
  return galleryRepository($api);
}
