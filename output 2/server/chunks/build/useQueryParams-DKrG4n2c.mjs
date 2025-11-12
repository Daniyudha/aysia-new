import { e as useRoute, d as useRouter } from './server.mjs';
import { computed } from 'vue';

function useQueryParams() {
  const route = useRoute();
  const router = useRouter();
  function getCurrentQuery(keys) {
    const queryParams = route.query;
    const selectedQuery = {};
    for (const key of keys) {
      if (queryParams[key]) {
        selectedQuery[key] = queryParams[key];
      }
    }
    return selectedQuery;
  }
  function updateQueryParams(newQuery) {
    router.replace({ query: newQuery });
  }
  const currentQueryParams = computed(() => route.query);
  return { getCurrentQuery, updateQueryParams, currentQueryParams };
}

export { useQueryParams as u };
//# sourceMappingURL=useQueryParams-DKrG4n2c.mjs.map
