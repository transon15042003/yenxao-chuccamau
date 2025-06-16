import { Product, ProductOption, ProductSpecifications, ProductVariant } from '@/types/product';
import { HttpTypes } from '@medusajs/types';

export const getProductVariantThumbnail = (
  product: HttpTypes.StoreProduct,
  sku: string
): string => {
  const productThumbnailMetadataValue = product.metadata?.[sku];
  if (!productThumbnailMetadataValue) {
    const productThumbnail = product.thumbnail;
    if (productThumbnail) {
      return productThumbnail;
    }

    return '/images/placeholder.webp';
  }

  const matchThumbnail = (product.images || [])?.find(
    (el: HttpTypes.StoreProductImage) => el.rank + 1 === Number(productThumbnailMetadataValue)
  );

  return matchThumbnail?.url || product.thumbnail || '/images/placeholder.webp';
};

export const generateProductOptions = (product: HttpTypes.StoreProduct): ProductOption[] => {
  return (
    product.options?.map((option) => {
      return {
        key: option.id,
        label: option.title,
        options:
          option.values?.map((value) => {
            return {
              key: value.id,
              label: value.value,
              value: value.id
            };
          }) || []
      };
    }) || []
  );
};

// TODO: Implement data transformation for products
export const transformProduct = (product: HttpTypes.StoreProduct): Product => {
  const ingredientRaw = product.metadata?.ingredient;
  let ingredients;

  if (typeof ingredientRaw === 'string') {
    // TODO: implement parse json array from string
    try {
      ingredients = JSON.parse(ingredientRaw);
    } catch {
      ingredients = [];
    }
  } else {
    ingredients = [];
  }

  const specs: ProductSpecifications[] =
    product.options?.map((o) => {
      return {
        key: o.id,
        value: o.values?.map((v) => v.id) || []
      };
    }) || [];

  const variants: ProductVariant[] =
    product.variants?.map((variant: HttpTypes.StoreProductVariant): ProductVariant => {
      const varSpecs = specs.reduce(
        (acc, spec) => {
          const option = variant.options?.find((o) => o.option_id === spec.key);
          if (option) {
            acc[spec.key] = option.id;
          }

          return acc;
        },
        {} as Record<string, string>
      );

      return {
        id: variant.id,
        sku: variant.sku || '',
        name: variant.title || '',
        thumbnail: getProductVariantThumbnail(product, variant.sku || ''),
        specs: varSpecs,
        price: variant.calculated_price?.calculated_amount || 0,
        isActive: !variant.deleted_at
      };
    }) ?? [];

  return {
    id: product.id,
    name: product.title,
    slug: product.handle,
    price: variants && variants[0] ? variants[0].price : 0,
    categories: product.categories?.map((c) => c.id) || [],
    thumbnail: product.thumbnail ?? '',
    description: product.description ?? '',
    ingredient: ingredients,
    specs: specs,
    options: generateProductOptions(product),
    variants: variants,
    isNew: false,
    createdAt: product.created_at!,
    isOutOfStock: product.metadata?.outStock === true
  };
};
