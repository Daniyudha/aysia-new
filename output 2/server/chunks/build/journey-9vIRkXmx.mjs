import { A as API_URL_LIST } from "./constant-D5BqL6of.mjs";
import { b as useNuxtApp } from "./server.mjs";

function galleryRepository(fetch) {
  return {
    async getAll(params) {
      return fetch(API_URL_LIST.JOURNEY, {
        method: "GET",
        params,
      });
    },
    async getById(galleryId) {
      return fetch(API_URL_LIST.JOURNEY_BY_ID(galleryId), {
        method: "GET",
      });
    },
    async create(payload) {
      const formData = new FormData();
      formData.append("description", payload.description);
      formData.append("title", payload.title);
      formData.append("gallery_category_id", payload.gallery_category_id);
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
    async updateById(galleryId, payload) {
      const formData = new FormData();
      formData.append("description", payload.description);
      formData.append("title", payload.title);
      formData.append("gallery_category_id", payload.gallery_category_id);
      if (payload?.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
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
    async deleteById(galleryId) {
      return fetch(API_URL_LIST.JOURNEY_BY_ID(galleryId), {
        method: "DELETE",
      });
    },
    async getByCategoryId(categoryId, params) {
      return fetch(API_URL_LIST.JOURNEY_BY_CATEGORY_ID(categoryId), {
        method: "GET",
        params,
      });
    },
  };
}
function journeyFetcher() {
  const { $api } = useNuxtApp();
  return galleryRepository($api);
}

export { journeyFetcher as j };
// # sourceMappingURL=journey-9vIRkXmx.mjs.map
