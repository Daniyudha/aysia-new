import { z } from "zod";

export const JourneySchema = z.object({
  mode: z.enum(["create", "update"]),
  title: z.string("Title is required.").min(1, "Title is required."),
  gallery_category_id: z.string("Category is required.").min(1, "Category is required."),
  gallery_category_name: z.string("Category is required.").min(1, "Category is required."),
  description: z.string("Content is required.").min(1, "Content is required.").max(1000000, "Content must not exceed 1000000 characters."),
  tag: z.string().optional(),
  imageUrl: z.string().optional(),
  image: z.any().optional(),
}).superRefine(async (data, ctx) => {
  if (!data?.imageUrl) {
    ctx.addIssue({
      code: "custom",
      path: ["image"],
      message: "Image is required.",
    });
  }
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
