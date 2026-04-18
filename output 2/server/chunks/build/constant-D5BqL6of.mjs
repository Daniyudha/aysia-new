const API_URL_LIST = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  CATEGORY: "/gallery-categories",
  CATEGORY_BY_ID: id => `${API_URL_LIST.CATEGORY}/${id}`,
  PROFILE_IMAGE: "/profile/image",
  PAGES_ABOUT: "/pages-about",
  PAGES_ABOUT_ACTIVE: () => `${API_URL_LIST.PAGES_ABOUT}/active`,
  PAGES_ABOUT_BY_ID: id => `${API_URL_LIST.PAGES_ABOUT}/${id}`,
  SOCIAL_MEDIA: "/social-media/defaults",
  JOURNEY: "/journeys",
  JOURNEY_SEARCH: () => `${API_URL_LIST}/search`,
  JOURNEY_BY_ID: id => `${API_URL_LIST.JOURNEY}/${id}`,
  JOURNEY_BY_CATEGORY_ID: categoryId => `${API_URL_LIST.JOURNEY}/category/${categoryId}`,
  JOURNEY_DETAIL: "/journey-details",
  JOURNEY_DETAIL_BY_JOURNEY_ID: journeyId => `${API_URL_LIST.JOURNEY_DETAIL}/journey/${journeyId}`,
  JOURNEY_DETAIL_BY_ID: id => `${API_URL_LIST.JOURNEY_DETAIL}/${id}`,
};

export { API_URL_LIST as A };
// # sourceMappingURL=constant-D5BqL6of.mjs.map
