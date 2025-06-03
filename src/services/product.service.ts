import categoryData from '@/data/product-categories.json';
import productData from '@/data/products/chao-soup-yen-products.json';
import productData2 from '@/data/products/set-qua-yen-chung-tuoi-products.json';
import productData3 from '@/data/products/topping-products.json';
import productData4 from '@/data/products/yen-chung-tuoi-products.json';
import productData5 from '@/data/products/yen-sao-tho-products.json';
import productData6 from '@/data/products/yen-tinh-che-products.json';
import type { QueryResource, QueryResourceResponse } from '@/types/common';
import type { Product, Category, ProductVariant } from '@/types/product';
import Fuse from 'fuse.js';

import { isValidDateString, isValidNumberString } from '@/lib/utils';
import { sortByDateField, sortByStringField } from '@/lib/utils/collection';
import { sortByNumberField } from '@/lib/utils/collection';

const products = [
  ...productData,
  ...productData2,
  ...productData3,
  ...productData4,
  ...productData5,
  ...productData6
] as unknown as Product[];
const categories = categoryData as unknown as Category[];

type QueryProduct = QueryResource<Product> & {
  categorySlug?: string;
};

export const getProducts = async (
  query?: QueryProduct
): Promise<QueryResourceResponse<Product>> => {
  const { page = 1, take = 10, sortField, sortOrder, search, categorySlug, isAll } = query || {};
  const result = {
    data: [],
    metadata: {
      page,
      take,
      total: 0,
      totalPages: 1
    }
  };

  let productList = [...products];

  if (search) {
    const fuse = new Fuse(productList, {
      keys: ['name', 'description', 'categories', 'variants.specs.savour', 'variants.specs.size'],
      includeScore: true,
      threshold: 0.3
    });
    const results = fuse.search(search);
    productList = results.map((result) => result.item as Product);
  }

  if (sortField) {
    const field = productList[0][sortField];
    if (field) {
      if (typeof field === 'string' && isValidDateString(field)) {
        sortByDateField(productList, sortField as keyof Product, sortOrder);
      }
      if (typeof field === 'number' || isValidNumberString(field.toString())) {
        sortByNumberField(productList, sortField as keyof Product, sortOrder);
      }
      if (typeof field === 'string') {
        sortByStringField(productList, sortField as keyof Product, sortOrder);
      }
    }
  }

  const filteredProducts = productList.filter((product) => {
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

    return matchConditions.every((condition) => condition);
  });

  if (!filteredProducts.length) {
    return result;
  }

  if (isAll) {
    return {
      data: filteredProducts,
      metadata: {
        page,
        take,
        total: filteredProducts.length,
        totalPages: 1
      }
    };
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

export const getCategoryBySlug = async (slug: string): Promise<Category | null> => {
  return categories.find((category: Category) => category.slug === slug) as Category | null;
};

export const getProductSku = async (
  productId: string,
  size: string,
  savour: string
): Promise<string | null> => {
  const product = products.find((p) => p.id === productId);

  if (!product) return null;

  const foundVariant = product.variants.find((variant: ProductVariant) => {
    return variant.specs.size === size && variant.specs.savour === savour;
  });

  return foundVariant ? foundVariant.sku : null;
};
