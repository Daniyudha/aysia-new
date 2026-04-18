import { useNuxtApp } from "#app";

import type {
  BlogDetailPayload,
  BlogDetailResponse,
  FetchType,
  PaginationParams,
  PaginationResponse,
} from "@/utils/data-type";

import { API_URL_LIST } from "@/utils/constant";

export function blogDetailRepository<T>(fetch: FetchType<T>) {
  return {
    async getAll(
      params: PaginationParams,
    ): Promise<PaginationResponse<BlogDetailResponse[]>> {
      return fetch(API_URL_LIST.BLOG_DETAIL, {
        method: "GET",
        params,
      });
    },

    async getById(id: string): Promise<BlogDetailResponse> {
      return fetch(API_URL_LIST.BLOG_DETAIL_BY_ID(id), {
        method: "GET",
      });
    },

    async getByBlogId(blogId: string): Promise<BlogDetailResponse> {
      return fetch(API_URL_LIST.BLOG_DETAIL_BY_BLOG_ID(blogId), {
        method: "GET",
      });
    },

    async search(
      params: PaginationParams,
    ): Promise<PaginationResponse<BlogDetailResponse[]>> {
      return fetch(API_URL_LIST.BLOG_DETAIL_SEARCH(), {
        method: "GET",
        params,
      });
    },

    async create(
      payload: BlogDetailPayload,
    ): Promise<BlogDetailResponse> {
      const formData = new FormData();
      formData.append("blog_id", payload.blog_id);
      formData.append("title", payload.title);
      formData.append("description", payload.description);
      formData.append("content", payload.content);

      // boolean → string (backend-safe)
      formData.append("is_video", payload.is_video ? "1" : "0");

      // nullable string → fallback
      formData.append("video_url", payload.video_url ?? "");

      if (payload.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }

      return fetch(API_URL_LIST.BLOG_DETAIL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
    },

    async updateById(
      id: string,
      payload: BlogDetailPayload,
    ): Promise<BlogDetailResponse> {
      const formData = new FormData();
      formData.append("blog_id", payload.blog_id);
      formData.append("title", payload.title);
      formData.append("description", payload.description);
      formData.append("content", payload.content);

      formData.append("is_video", payload.is_video ? "1" : "0");
      formData.append("video_url", payload.video_url ?? "");

      if (payload.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }

      return fetch(API_URL_LIST.BLOG_DETAIL_BY_ID(id), {
        method: "PUT",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
    },

    async deleteById(id: string): Promise<BlogDetailResponse> {
      return fetch(API_URL_LIST.BLOG_DETAIL_BY_ID(id), {
        method: "DELETE",
      });
    },
  };
}

export function blogDetailFetcher() {
  const { $api } = useNuxtApp();
  return blogDetailRepository($api);
}
