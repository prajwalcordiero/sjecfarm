import { z } from "zod";

export const categoryEnum = z.enum(["bakery", "vegetables", "eggs"]);

const base = {
  name: z.string().min(2, "Name too short"),
  description: z.string().max(2000).optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  category: categoryEnum,
  imageUrl: z.string().url().optional(),
  publicId: z.string().optional(),
};

export const productCreateSchema = z.object({
  ...base,
  imageUrl: z.string().url(),
  publicId: z.string(),
});

export const productUpdateSchema = productCreateSchema.partial();

export const productSchema = productCreateSchema.extend({
      id: z.string(),
      createdAt: z.date().nullable(),
});

export type ProductCreateInput = z.infer<typeof productCreateSchema>;
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>;
export type Product = z.infer<typeof productSchema>;