import z from "zod";

export const ManageAboutSchema = z.object({
  title: z.string("Title is required.").min(1, "Title is required."),
  description: z.string("Description is required.").min(1, "Description is required.").refine(val => htmlHasContent(val), {
    error: "Description is not valid.",
  }),
  thumbnailUrl: z.string("Thumbnail is required.").min(1, "Thumbnail is required."),
  thumbnail: z.any().optional(),
}).superRefine(async (data, ctx) => {
  if (!data?.thumbnailUrl) {
    ctx.addIssue({
      code: "custom",
      path: ["thumbnail"],
      message: "Thumbnail is required.",
    });
  }
  if (data.thumbnail) {
    const file = data.thumbnail as File;
    const isValidImage = await ImageUploadSchema.safeParseAsync(file);
    if (!isValidImage.success) {
      ctx.addIssue({
        code: "custom",
        path: ["thumbnail"],
        message: isValidImage.error?.message || "Invalid thumbnail file.",
      });
    }
  }
});
