<script setup lang="ts">
// import { refDebounced } from "@vueuse/core";
import { categoryFetcher } from "~/repository/modules/category";

const props = defineProps<{
  isError?: boolean;
  defaultValue?: { value: string; label: string };
}>();
defineEmits<{
  (e: "onSelectOption", value: { value: string; label: string }): void;
}>();

const open = ref(false);
const value = ref(props?.defaultValue);
const search = ref("");
// const searchDebounced = refDebounced(search, 1000);

watch(props, () => {
  if (props?.defaultValue) {
    value.value = props?.defaultValue;
  }
});

const { data, execute, pending } = useAsyncData(
  "CATEGORY_OPTION",
  () => {
    return categoryFetcher().get({ limit: 20 });
  },
  {
    watch: [],
    lazy: true,
    transform(data) {
      return data?.data?.map(item => ({
        label: item?.name,
        value: item?.id,
      }));
    },
    immediate: false,
  },
);
const options = computed<{ value: string; label: string }[]>(() => {
  if (!data.value && !props?.defaultValue) {
    return [];
  }
  let defaultOptions: { label: string; value: string }[] = [];
  if (props?.defaultValue?.label || props?.defaultValue?.value) {
    defaultOptions.push({
      label: props?.defaultValue?.label,
      value: props?.defaultValue?.value,
    });
  }
  if (data?.value?.length) {
    defaultOptions = [...defaultOptions, ...data.value];
  }
  return removeDuplicateOptions(defaultOptions);
});

async function handleOpenOption(val: boolean) {
  open.value = val;
  if (val && !data.value) {
    execute();
  }
}

const selectedCategory = computed(
  () =>
    (options?.value ?? [])?.find(
      (category: any) => category?.value === value?.value?.value,
    )?.label,
);
</script>

<template>
  <div>
    <UiPopover :open="open" @update:open="(value) => handleOpenOption(value)">
      <UiPopoverTrigger as-child>
        <UiButton
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between border-dashboard-neutral-100"
          :class="[
            value ? 'text-dashboard-accent-50' : 'text-dashboard-neutral-100',
            open ? 'border-dashboard-warning-50 border-2' : '',
            $props?.isError ? '!border-dashboard-danger-50 !border-2' : '',
          ]"
        >
          {{ value?.label ? selectedCategory : "Select category..." }}

          <Icon
            name="lucide:chevrons-up-down"
            class="ml-auto h-4 w-4 shrink-0 opacity-50"
          />
        </UiButton>
      </UiPopoverTrigger>
      <UiPopoverContent class="w-full p-0 max-h-96 overflow-auto">
        <UiCommand
          :model-value="value"
          @update:model-value="
            (v) => {
              const selected = v as { label: string; value: string };
              value = selected;
              $emit('onSelectOption', selected);
            }
          "
        >
          <UiCommandInput v-model="search" placeholder="Search category..." />
          <UiCommandList>
            <template v-if="pending">
              <UiCommandEmpty>Searching...</UiCommandEmpty>
            </template>
            <template v-else>
              <UiCommandEmpty>No category found.</UiCommandEmpty>
              <UiCommandGroup>
                <UiCommandItem
                  v-for="category in options"
                  :key="category.value"
                  :value="category"
                  @select="open = false"
                >
                  <Icon
                    name="lucide:check"
                    class="mr-2 h-4 w-4"
                    :class="[
                      value?.value === category.value
                        ? 'opacity-100'
                        : 'opacity-0',
                    ]"
                  />
                  {{ category.label }}
                </UiCommandItem>
              </UiCommandGroup>
            </template>
          </UiCommandList>
        </UiCommand>
      </UiPopoverContent>
    </UiPopover>
  </div>
</template>
