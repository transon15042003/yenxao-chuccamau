import { Category } from '@/types/product';
import { HttpTypes } from '@medusajs/types';

// TODO: Implement data transformation for category
export const transformCategory = (category: HttpTypes.StoreProductCategory): Category => {
  const result: Category = {
    id: category.id,
    name: category.name,
    slug: category.handle
  };

  return result as Category;
};

// TODO: Implement generate menu from categories
export const generateMenuFromCategories = (categories: Category[]): unknown => {
  return categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug
  }));
};
