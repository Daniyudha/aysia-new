<script setup lang="ts">
export type Crumbs = {
  label?: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  slot?: string;
  // eslint-disable-next-line ts/no-unsafe-function-type
  click?: Function;
};
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the breadcrumbs.
     */
    items?: Crumbs[];
    /**
     * The separator to use between each breadcrumb.
     */
    separator?: string;
    class?: any;
  }>(),
  {
    separator: "heroicons:chevron-right",
    items: () => [],
    class: undefined,
  },
);

function isNotLastItem(index: number) {
  return index !== props?.items?.length - 1;
}

const styles = tv({
  base: "flex w-full items-center gap-4 flex-1",
});
</script>

<template>
  <div :class="styles({ class: props.class })">
    <template v-for="(item, i) in items" :key="i">
      <slot :name="item.slot || 'default'">
        <div
          class="items-center gap-3"
          :class="isNotLastItem(i) ? 'hidden md:flex' : 'flex'"
        >
          <div class="group flex items-center gap-2">
            <slot
              name="crumbIcon"
              :item="item"
              :index="i"
            >
              <Icon
                v-if="item.icon"
                :name="item.icon"
                :class="[
                  isNotLastItem(i)
                    ? 'text-muted-foreground group-hover:text-foreground'
                    : 'text-app-secondary',
                ]"
              />
            </slot>
            <slot
              :item="item"
              :is-not-last-item="isNotLastItem"
              :index="i"
              name="link"
            >
              <NuxtLink
                v-if="item.label"
                :to="!item?.disabled ? item.link : ''"
                :class="[
                  item.link
                    && !item.disabled
                    && 'underline-offset-2 group-hover:underline',
                  isNotLastItem(i)
                    ? 'text-muted-foreground group-hover:text-foreground hidden md:inline-block'
                    : 'font-semibold text-app-secondary',
                ]"
                class="text-sm text-foreground transition-colors"
                @click="item?.click?.()"
              >
                {{ item.label }}
              </NuxtLink>
            </slot>
          </div>
        </div>
      </slot>
      <slot
        name="separator"
        :item="item"
        :index="i"
      >
        <Icon
          v-if="isNotLastItem(i)"
          :name="separator"
          class="h-3 w-3 text-muted-foreground !hidden md:!inline-block"
        />
      </slot>
    </template>
  </div>
</template>
