import { API_URL_LIST } from "~/utils/constant";
import type {
  FetchType,
  PaginationParams,
  PaginationResponse,
  ExploreImagePayload,
  ExploreImageTitlePayload,
  ExploreImageBulkPayload,
  ExploreImageBulkDeletePayload,
  ExploreImageResponse,
} from "~/utils/data-type";

export function natureImagesRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(params?: PaginationParams): Promise<PaginationResponse<ExploreImageResponse[]>> {
      return fetch(API_URL_LIST.NATURE_IMAGES, {
        method: "GET",
        params,
      });
    },

    async getById(id: string): Promise<ExploreImageResponse> {
      return fetch(API_URL_LIST.NATURE_IMAGES_BY_ID(id), {
        method: "GET",
      });
    },

    async create(payload: ExploreImagePayload): Promise<ExploreImageResponse> {
      const formData = new FormData();
      formData.append("image", payload.image);
      return fetch(API_URL_LIST.NATURE_IMAGES, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },

    async bulkCreate(payload: ExploreImageBulkPayload): Promise<ExploreImageResponse[]> {
      const formData = new FormData();
      payload.images.forEach((file) => {
        formData.append('images', file);
      });
      return fetch(API_URL_LIST.NATURE_IMAGES_BULK, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },

    async updateTitleById(id: string, payload: ExploreImageTitlePayload): Promise<ExploreImageResponse> {
      return fetch(API_URL_LIST.NATURE_IMAGES_TITLE_BY_ID(id), {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    async updateById(id: string, payload: ExploreImagePayload): Promise<ExploreImageResponse> {
      const formData = new FormData();
      if (payload.image) {
        formData.append("image", payload.image);
      }
      return fetch(API_URL_LIST.NATURE_IMAGES_BY_ID(id), {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },

    async deleteById(id: string): Promise<ExploreImageResponse> {
      return fetch(API_URL_LIST.NATURE_IMAGES_BY_ID(id), {
        method: "DELETE",
      });
    },

    async bulkDelete(payload: ExploreImageBulkDeletePayload): Promise<{ deleted: string[] }> {
      return fetch(API_URL_LIST.NATURE_IMAGES_BULK, {
        method: "DELETE",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  };
}

export function natureImagesFetcher() {
  const { $api } = useNuxtApp();
  return natureImagesRepository($api);
}