import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string("Category name is required.").min(1, "Category name is required."),
});
