export const API_URL_LIST = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",

  CATEGORY: "/gallery-categories",
  CATEGORY_BY_ID: (id: string) => `/gallery-categories/${id}`,

  PROFILE_IMAGE: "/profile/image",

  PAGES_ABOUT: "/pages-about",
  PAGES_ABOUT_ACTIVE: () => "/pages-about/active",
  PAGES_ABOUT_BY_ID: (id: string) => `/pages-about/${id}`,

  SOCIAL_MEDIA: "/social-media/defaults",

  // ===== JOURNEY =====
  JOURNEY: "/journeys",
  JOURNEY_SEARCH: () => "/journeys/search",
  JOURNEY_BY_ID: (id: string) => `/journeys/${id}`,
  JOURNEY_BY_CATEGORY_ID: (categoryId: string) =>
    `/journeys/category/${categoryId}`,

  JOURNEY_DETAIL: "/journey-details",
  JOURNEY_DETAIL_BY_JOURNEY_ID: (journeyId: string) =>
    `/journey-details/journey/${journeyId}`,
  JOURNEY_DETAIL_BY_ID: (id: string) =>
    `/journey-details/${id}`,
  JOURNEY_DETAIL_SORT: "/journey-details/sort",

  // ===== BLOG =====
  BLOG: "/blogs",
  BLOG_SEARCH: () => "/blogs/search",
  BLOG_BY_ID: (id: string) => `/blogs/${id}`,

  BLOG_DETAIL: "/blog-details",
  BLOG_DETAIL_SEARCH: () => "/blog-details/search",
  BLOG_DETAIL_BY_BLOG_ID: (blogId: string) =>
    `/blog-details/blog/${blogId}`,
  BLOG_DETAIL_BY_ID: (id: string) =>
    `/blog-details/${id}`,

  // ===== EXPLORE IMAGES =====
  EXPLORE_IMAGES: "/explore-images",
  EXPLORE_IMAGES_BULK: "/explore-images/bulk",
  EXPLORE_IMAGES_BY_ID: (id: string) => `/explore-images/${id}`,
  EXPLORE_IMAGES_TITLE_BY_ID: (id: string) => `/explore-images/${id}/title`,

  // ===== NATURE IMAGES =====
  NATURE_IMAGES: "/nature-images",
  NATURE_IMAGES_BULK: "/nature-images/bulk",
  NATURE_IMAGES_BY_ID: (id: string) => `/nature-images/${id}`,
  NATURE_IMAGES_TITLE_BY_ID: (id: string) => `/nature-images/${id}/title`,
};