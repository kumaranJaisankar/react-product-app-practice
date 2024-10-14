import * as z from "zod";

export const productFormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required").max(255),
  price: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price is required",
    })
    .min(1)
    .max(1000),
  categoryId: z.number({
    required_error: "Category is required",
  }),
});

export type ProductFormData = z.infer<typeof productFormSchema>;

export const ProductSchema = z.object({
  productID: z.number(),
  name: z.string().optional(),
  productNumber: z.string().optional(),
  makeFlag: z.boolean().optional(),
  finishedGoodsFlag: z.boolean().optional(),
  color: z.string().optional(),
  safetyStockLevel: z.number().optional(),
  reorderPoint: z.number().optional(),
  standardCost: z.number().optional(),
  listPrice: z.number().optional(),
  size: z.null().optional(),
  weight: z.number().optional(),
  daysToManufacture: z.number().optional(),
  productLine: z.null().optional(),
  class: z.null().optional(),
  style: z.null().optional(),
  productSubcategoryID: z.number().optional(),
  productModelID: z.number().optional(),
  sellStartDate: z.coerce.date().optional(),
  sellEndDate: z.null().optional(),
  discontinuedDate: z.null().optional(),
  rowguid: z.string().optional(),
  modifiedDate: z.coerce.date().optional(),
  sizeUnitMeasureID: z.null().optional(),
  weightUnitMeasureID: z.number().optional(),
  productModelName: z.string().optional(),
  productCategoryName: z.string().optional(),
  productSubcategoryName: z.string().optional(),
  sizeUnitMeasureName: z.null().optional(),
  weightUnitMeasureName: z.string().optional(),
});
export type ProductType = z.infer<typeof ProductSchema>;
