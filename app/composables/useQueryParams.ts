import type { LocationQueryRaw, LocationQueryValue } from "vue-router";

export function useQueryParams() {
  const route = useRoute();
  const router = useRouter();

  function getCurrentQuery(keys: string[]) {
    const queryParams = route.query;
    const selectedQuery = {} as Record<string, string | LocationQueryValue[]>;
    for (const key of keys) {
      if (queryParams[key]) {
        selectedQuery[key] = queryParams[key];
      }
    }
    return selectedQuery;
  };

  function updateQueryParams(newQuery: LocationQueryRaw) {
    router.replace({ query: newQuery });
  }

  const currentQueryParams = computed(() => route.query);

  return { getCurrentQuery, updateQueryParams, currentQueryParams };
}
