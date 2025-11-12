<script setup lang="ts">
const router = useRouter();
const { setToken, userAuthName } = useAuthCookie();
const authUser = useAuthUser();

function handleSignOut() {
  setToken(null);
  userAuthName.value = null;
  authUser.value = {
    loading: false,
    error: false,
    auth: null,
  };
  router.push("/");
}
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <button type="button" class="inline-flex items-center space-x-2 w-[150px]">
        <img
          src="https://i.pravatar.cc/300"
          alt="Admin Avatar"
          width="40"
          height="40"
          class="w-10 h-10 rounded-full hover:ring-2 ring-dashboard-primary-50"
        >
        <div class="text-sm text-dashboard-accent-50 flex items-center justify-between gap-1 flex-1">
          <p class="font-medium whitespace-nowrap max-w-[80px] text-ellipsis overflow-hidden">
            {{ userAuthName?.name }}
          </p>
          <Icon name="mynaui:chevron-down" class="inline-block" />
        </div>
      </button>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent class="w-48">
      <UiDropdownMenuItem
        title="Sign out"
        icon="ph:sign-out"
        @select="handleSignOut"
      />
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
