import { Product, ProductSpecifications, ProductVariant } from '@/types/product';
import { HttpTypes } from '@medusajs/types';

// TODO: Implement data transformation for products
export const transformProduct = (product: HttpTypes.StoreProduct): Product => {
  const ingredientRaw = product.metadata?.ingredient;
  let ingredients;

  if (typeof ingredientRaw === 'string') {
    try {
      ingredients = JSON.parse(ingredientRaw);
    } catch {
      ingredients = [];
    }
  } else {
    ingredients = [];
  }

  const specs: ProductSpecifications[] = [
    {
      key: 'size',
      value:
        product.options?.[1].values?.map((el: HttpTypes.StoreProductOptionValue) => el.value) ?? []
    },
    {
      key: 'savour',
      value:
        product.options?.[0].values?.map((el: HttpTypes.StoreProductOptionValue) => el.value) ?? []
    }
  ];

  const variants: ProductVariant[] =
    product.variants?.map((el: HttpTypes.StoreProductVariant, idx: number): ProductVariant => {
      let rank: number;
      if (el.variant_rank) {
        rank = el.variant_rank;
      } else if (el.sku) {
        if (el.sku) {
          rank = Number(product.metadata?.[el.sku]);
        } else {
          rank = idx;
        }
      }
      const specsVar: Record<string, string> = {
        size: String(el.options?.[0]?.value ?? ''),
        savour: String(el.options?.[1]?.value ?? '')
      };

      return {
        sku: el.sku,
        name: el.title,
        thumbnail:
          product.images?.find((el: HttpTypes.StoreProductImage) => el.rank + 1 === rank)?.url ??
          '',
        specs: specsVar,
        price: el.calculated_price?.calculated_amount,
        isActive: !el.deleted_at
      } as ProductVariant;
    }) ?? [];

  const result = {
    id: product.id,
    name: product.title,
    slug: product.handle,
    price: variants?.[0].price,
    categories: [product.collection_id],
    thumbnail: product.thumbnail,
    description: product.description,
    ingredient: ingredients,
    specs: specs,
    variants: variants,
    isNew: false,
    createdAt: product.created_at
  };

  return result as Product;
};
