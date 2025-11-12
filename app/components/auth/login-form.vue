<script setup lang="ts">
import { z } from "zod";

const router = useRouter();
const { login, authUser } = useAuth();
const { handleSubmit, isFieldValid, resetForm } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string("Email is required").min(1, "Email is required"),
      password: z.string("Password is required").min(1, "Password is required"),
    }),
  ),
});
const showPassword = ref(false);

const isValidForm = computed(() => {
  return isFieldValid("email") && isFieldValid("password");
});

const onSubmit = handleSubmit((values) => {
  login(values).then(() => {
    resetForm();
    router.push("/dashboard");
  });
});
</script>

<template>
  <form class="px-6" @submit.prevent="onSubmit">
    <Field v-slot="{ componentField }" name="email">
      <UiFormFloatingItem label="EMAIL" class="mb-6">
        <UiInput
          v-bind="componentField"
          class="placeholder:text-app-secondary"
          placeholder="EMAIL"
        />
      </UiFormFloatingItem>
    </Field>
    <div class="relative">
      <Field v-slot="{ componentField }" name="password">
        <UiFormFloatingItem label="PASSWORD" class="mb-6">
          <UiInput
            v-bind="componentField"
            class="placeholder:text-app-secondary pr-10"
            placeholder="PASSWORD"
            :type="showPassword ? 'text' : 'password'"
          />
        </UiFormFloatingItem>
        <button
          type="button"
          class="absolute right-3 top-2.5 z-10"
          @click="showPassword = !showPassword"
        >
          <Icon :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'" />
        </button>
      </Field>
    </div>
    <UiButton
      type="submit"
      class="w-full bg-app-secondary hover:bg-app-secondary/90 cursor-pointer disabled:opacity-60"
      :disabled="!isValidForm || authUser?.loading"
    >
      SIGN IN
    </UiButton>
  </form>
</template>
