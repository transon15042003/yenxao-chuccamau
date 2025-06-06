/* eslint-disable no-console*/
import React from 'react';

import { listCategories } from '@/lib/data/categories';
import { listProducts } from '@/lib/data/products';
import { transformCategory } from '@/lib/medusa-adapter/category';

const TestDataPage = async () => {
  // categories
  const categories = await listCategories();
  const transformedCategories = categories.map(transformCategory);
  console.log('========== transformedCategories ==========');
  console.log(transformedCategories);
  console.log('========== transformedCategories ==========');

  // products with pagination, sort and search
  const getProductsResponse = await listProducts({
    pageParam: 1,
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_REGION,
    queryParams: {
      limit: 10, // page size
      order: '-created_at',
      offset: 0,
      q: 'Chưng'
      // fields: 'id,title,handle,price,thumbnail,description,categories,ingredient'
    }
  });
  console.log('========== products ==========');
  console.log(getProductsResponse);
  console.log('========== products ==========');

  // product by category with pagination and search
  const getProductsByCategoryResponse = await listProducts({
    pageParam: 1,
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: {
      limit: 10, // page size
      order: '-created_at',
      offset: 0,
      // q: 'Chưng',
      // fields: 'id,title,handle,price,thumbnail,description,categories,ingredient'
      category_id: 'pcat_01JWX6TYTX4KVM0YC44BP2Q5Z0'
    }
  });
  console.log('========== products by category ==========');
  console.log(getProductsByCategoryResponse);
  console.log('========== products by category ==========');

  // product by slug
  const product = await listProducts({
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: { handle: 'ky-tu' }
  }).then(({ response }) => response.products[0]);

  console.log('========== product ==========');
  console.log(product);
  console.log('========== product ==========');

  // cart

  // order (create, get by id)

  return (
    <div className="min-h-screen">
      <pre>{JSON.stringify(transformedCategories, null, 2)}</pre>
    </div>
  );
};

export default TestDataPage;
