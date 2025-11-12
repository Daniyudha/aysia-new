<script setup lang="ts">
const rowPerPages = [5, 10, 25];

const open = ref(false);
const { getCurrentQuery, updateQueryParams } = useQueryParams();

const selectedRowPerPage = computed({
  get() {
    const perPageQueryParams = getCurrentQuery(["perPage"])?.perPage;
    const activePerPage = Number.isNaN(Number(perPageQueryParams))
      ? 10
      : Number(perPageQueryParams);
    const selected = rowPerPages?.find(row => row === activePerPage);
    return selected;
  },
  set(value: number) {
    updateQueryParams({ perPage: value });
  },
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <p class="text-dashboard-neutral-500 text-sm">
      Show rows per page:
    </p>
    <div class="flex justify-center">
      <UiPopover v-model:open="open">
        <UiPopoverTrigger as-child>
          <UiButton
            variant="outline"
            role="combobox"
            :aria-expanded="open"
            class="w-[100px] justify-between"
          >
            {{ selectedRowPerPage ?? 10 }}

            <Icon
              name="lucide:chevrons-up-down"
              class="ml-auto h-4 w-4 shrink-0 opacity-50"
            />
          </UiButton>
        </UiPopoverTrigger>
        <UiPopoverContent class="w-[100px] p-0">
          <UiCommand v-model="selectedRowPerPage">
            <UiCommandList>
              <UiCommandGroup>
                <UiCommandItem
                  v-for="rowPerPage in rowPerPages"
                  :key="rowPerPage"
                  :value="rowPerPage"
                  @select="open = false"
                >
                  <Icon
                    name="lucide:check"
                    class="mr-2 h-4 w-4"
                    :class="[
                      selectedRowPerPage === rowPerPage
                        ? 'opacity-100'
                        : 'opacity-0',
                    ]"
                  />
                  {{ rowPerPage }}
                </UiCommandItem>
              </UiCommandGroup>
            </UiCommandList>
          </UiCommand>
        </UiPopoverContent>
      </UiPopover>
    </div>
  </div>
</template>
