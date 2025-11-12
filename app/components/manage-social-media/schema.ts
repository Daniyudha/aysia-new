import { z } from "zod";

export const SocialMediaSchema = z.object({
  facebook: z.url("Facebook link invalid."),
  instagram: z.url("Instagram link invalid."),
  tiktok: z.url("Tiktok link invalid."),
  twitter: z.url("Twitter link invalid."),
  youtube: z.url("Youtube link invalid."),
  whatsapp: z.url("Whatsapp link invalid."),
});
