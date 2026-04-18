import { useNuxtApp } from "#app";

import type {
  BlogPayload,
  BlogResponse,
  FetchType,
  PaginationParams,
  PaginationResponse,
} from "@/utils/data-type";

import { API_URL_LIST } from "@/utils/constant";

export function blogRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(
      params: PaginationParams,
    ): Promise<PaginationResponse<BlogResponse[]>> {
      return fetch(API_URL_LIST.BLOG, {
        method: "GET",
        params,
      });
    },

    async getById(blogId: string): Promise<BlogResponse> {
      return fetch(API_URL_LIST.BLOG_BY_ID(blogId), {
        method: "GET",
      });
    },

    async create(payload: BlogPayload): Promise<BlogResponse> {
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("description", payload.description);

      if (payload.tag) {
        formData.append("tag", payload.tag);
      }

      if (payload.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }

      return fetch(API_URL_LIST.BLOG, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },

    async updateById(
      blogId: string,
      payload: BlogPayload,
    ): Promise<BlogResponse> {
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("description", payload.description);

      if (payload.tag) {
        formData.append("tag", payload.tag);
      }

      if (payload.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }

      return fetch(API_URL_LIST.BLOG_BY_ID(blogId), {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    },

    async deleteById(blogId: string): Promise<BlogResponse> {
      return fetch(API_URL_LIST.BLOG_BY_ID(blogId), {
        method: "DELETE",
      });
    },

    async search(
      params: PaginationParams,
    ): Promise<PaginationResponse<BlogResponse[]>> {
      return fetch(API_URL_LIST.BLOG_SEARCH(), {
        method: "GET",
        params,
      });
    },
  };
}

export function blogFetcher() {
  const { $api } = useNuxtApp();
  return blogRepository($api);
}
