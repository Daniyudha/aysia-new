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
  // For image type, require thumbnail only in create mode
  if (data.type === "image" && data.mode === "create") {
    // Check if we have any thumbnails (single file or array)
    const hasThumbnails = Array.isArray(data.thumbnail)
      ? data.thumbnail.length > 0
      : !!data.thumbnail;
    
    const hasThumbnailUrl = !!data.thumbnailUrl?.length;
    
    if (!hasThumbnails && !hasThumbnailUrl) {
      ctx.addIssue({
        code: "custom",
        path: ["thumbnail"],
        message: "Thumbnail is required for image type in create mode.",
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
  
  // Validate thumbnail file if it's provided and it's a File object (new upload)
  // This applies to both create and update modes when a new file is selected
  if (data.thumbnail) {
    // Handle both single file and array of files
    if (Array.isArray(data.thumbnail)) {
      // For multiple files, validate each file that is a File object
      for (const file of data.thumbnail) {
        if (file instanceof File) {
          const isValidImage = await ImageUploadSchema.safeParseAsync(file);
          if (!isValidImage.success) {
            // Extract just the first error message from the validation errors
            const firstError = isValidImage.error.issues[0]?.message || "Invalid image file.";
            ctx.addIssue({
              code: "custom",
              path: ["thumbnail"],
              message: firstError,
            });
            break; // Stop after first error
          }
        }
      }
    } else {
      // Single file validation - only validate if it's a File object
      if (data.thumbnail instanceof File) {
        const isValidImage = await ImageUploadSchema.safeParseAsync(data.thumbnail);
        if (!isValidImage.success) {
          // Extract just the first error message from the validation errors
          const firstError = isValidImage.error.issues[0]?.message || "Invalid image file.";
          ctx.addIssue({
            code: "custom",
            path: ["thumbnail"],
            message: firstError,
          });
        }
      }
      // If it's a string (existing image URL), skip validation
    }
  }
});

export type JourneyGalleryDetailFormType = z.infer<typeof JourneyGalleryDetailSchema>;
