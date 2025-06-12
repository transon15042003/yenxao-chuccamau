'use server';
import { HttpTypes } from '@medusajs/types';

import { sdk } from '@/lib/medusa/medusa-config';

export const listAllCategoriesWithSortedRank = async () => {
  return sdk.client
    .fetch<{ product_categories: HttpTypes.StoreProductCategory[] }>('/store/product-categories', {
      query: {
        fields:
          '*category_children, *products, *parent_category, *parent_category.parent_category, metadata'
      },
      cache: 'no-store'
    })
    .then(({ product_categories }) => {
      const sortedCategories = product_categories.sort(
        (a: HttpTypes.StoreProductCategory, b: HttpTypes.StoreProductCategory) => {
          return Number(a.rank) - Number(b.rank);
        }
      );

      return sortedCategories;
    });
};
