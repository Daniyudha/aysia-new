import { z } from "zod";

import { ImageUploadSchema } from "~/utils/file-upload";

export const JourneySchema = z.object({
  mode: z.enum(["create", "update"]),
  title: z.string().min(1, "Title is required."),
  tag: z.string().optional(),
  description: z.string().min(1, "Description is required.").max(1000000, "Description must not exceed 1000000 characters."),
  imageUrl: z.string().optional(),
  image: z.any().optional(),
}).superRefine(async (data, ctx) => {
  // At least one image is required
  if (!data?.imageUrl && !data?.image) {
    ctx.addIssue({
      code: "custom",
      path: ["image"],
      message: "Hero image is required.",
    });
  }
  // Validate uploaded file
  if (data.image) {
    const file = data.image as File;
    const isValidImage = await ImageUploadSchema.safeParseAsync(file);
    if (!isValidImage.success) {
      ctx.addIssue({
        code: "custom",
        path: ["image"],
        message: isValidImage.error?.message || "Invalid image file.",
      });
    }
  }
});

export type JourneySchemaFormType = z.infer<typeof JourneySchema>;
