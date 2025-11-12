<template>
  <th
    v-bind="$attrs"
    class="px-6 py-2 text-left border-y text-dashboard-neutral-400 border-dashboard-neutral-100/50 bg-dashboard-neutral-100/10 font-medium text-sm whitespace-nowrap"
  >
    <slot />
  </th>
</template>
