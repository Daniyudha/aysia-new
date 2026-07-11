export function journeyRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(
      params: PaginationParams,
    ): Promise<PaginationResponse<JourneyDetailsResponse[]>> {
      return fetch(API_URL_LIST.JOURNEY_DETAIL, {
        method: "GET",
        params,
      });
    },
    async create(
      payload: JourneyDetailsPayload,
    ): Promise<JourneyDetailsResponse> {
      const formData = new FormData();
      formData.append("journey_id", payload.journey_id);
      formData.append("title", payload.title);
      formData.append("content", payload.content);
      formData.append("description", payload.description);

      // FIX for boolean → convert to string
      formData.append("is_video", payload.is_video ? "1" : "0");

      // FIX for string | null → fallback to empty string
      formData.append("video_url", payload.video_url ?? "");

      if (payload?.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }

      return fetch(API_URL_LIST.JOURNEY_DETAIL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },
    async updateById(
      journeyDetailId: string,
      payload: JourneyDetailsPayload,
    ): Promise<JourneyDetailsResponse> {
      const formData = new FormData();
      formData.append("journey_id", payload.journey_id);
      formData.append("title", payload.title);
      formData.append("content", payload.content);
      formData.append("description", payload.description);

      // FIX
      formData.append("is_video", payload.is_video ? "1" : "0");
      formData.append("video_url", payload.video_url ?? "");

      if (payload?.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }

      return fetch(API_URL_LIST.JOURNEY_DETAIL_BY_ID(journeyDetailId), {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },
    async deleteById(journeyDetailId: string): Promise<JourneyDetailsResponse> {
      return fetch(API_URL_LIST.JOURNEY_DETAIL_BY_ID(journeyDetailId), {
        method: "DELETE",
      });
    },
    async getByJourneyId({
      journeyId,
      ...params
    }: {
      journeyId: string;
      page?: number;
      limit?: number;
    }): Promise<JourneyDetailsResponse[]> {
      return fetch(API_URL_LIST.JOURNEY_DETAIL_BY_JOURNEY_ID(journeyId), {
        method: "GET",
        params,
      });
    },

    async sort(payload: { ids: string[] }): Promise<{ success: boolean }> {
      return fetch(API_URL_LIST.JOURNEY_DETAIL_SORT, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  };
}

export function journeyDetailFetcher() {
  const { $api } = useNuxtApp();
  return journeyRepository($api);
}
