import { z } from "zod";
import { ImageUploadSchema } from "~/utils/file-upload";

export const JourneyGalleryDetailSchema = z.object({
  mode: z.enum(["create", "update"]),
  type: z.enum(["image", "video"]),
  title: z.string("Title is required.").min(1, "Title is required."),
  description: z.string("Description is required.").min(1, "Description is required."),
  gallery_category_id: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  thumbnail: z.any().optional(),
  videoUrl: z.string().optional(),
}).superRefine(async (data, ctx) => {
  // For image type, require thumbnail
  if (data.type === "image") {
    // Check if we have any thumbnails (single file or array)
    const hasThumbnails = Array.isArray(data.thumbnail)
      ? data.thumbnail.length > 0
      : !!data.thumbnail;
    
    const hasThumbnailUrl = !!data.thumbnailUrl?.length;
    
    if (!hasThumbnails && !hasThumbnailUrl) {
      ctx.addIssue({
        code: "custom",
        path: ["thumbnail"],
        message: "Thumbnail is required for image type.",
      });
    }
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
    // Handle both single file and array of files
    if (Array.isArray(data.thumbnail)) {
      // Skip validation for multiple files to allow backend processing
      // The backend will handle the actual file validation
    } else {
      // Single file validation
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
  }
});

export type JourneyGalleryDetailFormType = z.infer<typeof JourneyGalleryDetailSchema>;
