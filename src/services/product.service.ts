import categoryData from '@/data/product-categories.json';
import productData from '@/data/products.json';
import type { QueryResource, QueryResourceResponse } from '@/types/common';
import type { Product, Category } from '@/types/product';

import { isValidDateString, isValidNumberString } from '@/lib/utils';
import { sortByDateField, sortByStringField } from '@/lib/utils/collection';
import { sortByNumberField } from '@/lib/utils/collection';

const products = productData as unknown as Product[];
const categories = categoryData as unknown as Category[];

type QueryProduct = QueryResource<Product> & {
  categorySlug?: string;
};

export const getProducts = async (
  query?: QueryProduct
): Promise<QueryResourceResponse<Product>> => {
  const { page = 1, take = 10, sortField, sortOrder, search, categorySlug } = query || {};
  const result = {
    data: [],
    metadata: {
      page,
      take,
      total: 0,
      totalPages: 1
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchConditions = [];
    if (categorySlug) {
      const matchCategory = categories.find((c) => c.slug === categorySlug);
      if (!matchCategory) {
        matchConditions.push(false);
      } else {
        matchConditions.push(
          product.categories.some((c) => c === matchCategory.slug || c === matchCategory.id)
        );
      }
    }

    if (search) {
      matchConditions.push(product.name.toLowerCase().includes(search.toLowerCase()));
    }

    return matchConditions.every((condition) => condition);
  });

  if (!filteredProducts.length) {
    return result;
  }

  if (sortField) {
    const field = filteredProducts[0][sortField];
    if (field) {
      if (typeof field === 'string' && isValidDateString(field)) {
        sortByDateField(filteredProducts, sortField as keyof Product, sortOrder);
      }
      if (typeof field === 'number' || isValidNumberString(field.toString())) {
        sortByNumberField(filteredProducts, sortField as keyof Product, sortOrder);
      }
      if (typeof field === 'string') {
        sortByStringField(filteredProducts, sortField as keyof Product, sortOrder);
      }
    }
  }

  const total = filteredProducts.length;
  const totalPages = Math.ceil(total / take);

  return {
    data: filteredProducts.slice((page - 1) * take, page * take),
    metadata: {
      page,
      take,
      total,
      totalPages
    }
  };
};

export const getBestSellingProduct = async () => {
  return await getProducts({
    page: 1,
    take: 8,
    sortField: 'totalSold',
    sortOrder: 'desc'
  });
};

export const getProductById = async (id: string): Promise<Product | null> => {
  return products.find((product: Product) => product.id === id) as Product | null;
};

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  return products.find((product: Product) => product.slug === slug) as Product | null;
};

export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  return products.filter((product: Product) =>
    product.categories.some((cId) => cId === categoryId)
  );
};

export const getCategories = async (): Promise<Category[]> => {
  return categories;
};

export const getCategoryById = async (id: string): Promise<Category | null> => {
  return categories.find((category: Category) => category.id === id) as Category | null;
};
