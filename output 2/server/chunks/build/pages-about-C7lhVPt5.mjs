import { A as API_URL_LIST } from "./constant-D5BqL6of.mjs";
import { b as useNuxtApp } from "./server.mjs";

function pagesAboutRepository(fetch) {
  return {
    async getAll(params) {
      return fetch(API_URL_LIST.PAGES_ABOUT, {
        method: "get",
        params,
      });
    },
    async create(payload) {
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
function pagesAboutFetchData() {
  const { $api } = useNuxtApp();
  return pagesAboutRepository($api);
}

export { pagesAboutFetchData as p };
// # sourceMappingURL=pages-about-C7lhVPt5.mjs.map
