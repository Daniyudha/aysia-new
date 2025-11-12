import { z } from "zod";
import { ImageUploadSchema } from "~/utils/file-upload";

export const JourneyGalleryDetailSchema = z.object({
  mode: z.enum(["create", "update"]),
  type: z.enum(["image", "video"]),
  title: z.string("Title is required.").min(1, "Title is required."),
  description: z.string("Description is required.").min(1, "Description is required."),
  thumbnailUrl: z.string().optional(),
  thumbnail: z.any().optional(),
  videoUrl: z.string().optional(),
}).superRefine(async (data, ctx) => {
  // For image type, require thumbnail
  if (data.type === "image" && !data?.thumbnailUrl?.length) {
    ctx.addIssue({
      code: "custom",
      path: ["thumbnail"],
      message: "Thumbnail is required for image type.",
    });
  }
  
  // For video type, require videoUrl
  if (data.type === "video" && !data?.videoUrl?.length) {
    ctx.addIssue({
      code: "custom",
      path: ["videoUrl"],
      message: "Video URL is required for video type.",
    });
  }
  
  if (data.thumbnail) {
    const file = data.thumbnail as File;
    const isValidImage = await ImageUploadSchema.safeParseAsync(file);
    if (!isValidImage.success) {
      ctx.addIssue({
        code: "custom",
        path: ["thumbnail"],
        message: isValidImage.error?.message || "Invalid image file.",
      });
    }
  }
});

export type JourneyGalleryDetailFormType = z.infer<typeof JourneyGalleryDetailSchema>;
