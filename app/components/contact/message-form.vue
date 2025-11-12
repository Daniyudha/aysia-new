<script setup lang="ts">
import { z } from "zod";

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z
        .string("Full name is required")
        .min(3, "Full name must be at least 3 characters"),
      email: z.email("Email must be a valid email"),
      phone: z
        .string()
        .transform(value => (!value ? null : value))
        .refine(value => !value || value.length === 10, {
          message: "Phone must be 10 digits",
        })
        .nullish(),
      inquiry: z.string("Inquiry is required").min(1, "Inquiry is required"),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  if (typeof window === "undefined")
    return;
  const recipient = "aysia-linggarwati@gmail.com";
  let subject = `${values.name} - ${values.email}`;
  if (values.phone?.length) {
    subject += ` - ${values.phone}`;
  }
  const body = encodeURIComponent(values.inquiry);
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailtoLink;
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <Field v-slot="{ componentField }" name="name">
      <UiFormFloatingItem label="NAME" class="mb-6">
        <UiInput
          v-bind="componentField"
          class="placeholder:text-app-secondary"
          placeholder="NAME"
        />
      </UiFormFloatingItem>
    </Field>
    <Field v-slot="{ componentField }" name="email">
      <UiFormFloatingItem label="EMAIL" class="mb-6">
        <UiInput
          v-bind="componentField"
          class="placeholder:text-app-secondary"
          placeholder="EMAIL"
        />
      </UiFormFloatingItem>
    </Field>
    <Field v-slot="{ componentField }" name="phone">
      <UiFormFloatingItem label="PHONE" class="mb-6">
        <UiInput
          v-bind="componentField"
          class="placeholder:text-app-secondary"
          placeholder="PHONE (OPTIONAL)"
        />
      </UiFormFloatingItem>
    </Field>
    <Field v-slot="{ componentField }" name="inquiry">
      <UiFormFloatingItem label="INQUIRY" class="mb-6">
        <UiTextarea
          v-bind="componentField"
          class="placeholder:text-app-secondary"
          placeholder="INQUIRY"
        />
      </UiFormFloatingItem>
    </Field>
    <div class="flex justify-end">
      <UiButton
        type="submit"
        class="link-with-icon relative space-x-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-0.5 after:bg-app-secondary after:hidden after:transition-all hover:after:block items-center bg-transparent text-app-secondary hover:bg-transparent hover:text-app-secondary"
      >
        <span class="inline-block text-2xl font-normal leading-[100%]">Send Inquiry!</span>
        <IconTelegram />
      </UiButton>
    </div>
  </form>
</template>
