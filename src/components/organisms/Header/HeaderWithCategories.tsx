import { Category } from '@/types/product';
import React from 'react';

import { listCategories } from '@/lib/data/categories';
import { transformCategory } from '@/lib/medusa-adapter/category';

import Header from './Header';

const HeaderWithCategories = async () => {
  const categories = await listCategories();
  const transformedCategories: Category[] = categories.map(transformCategory);

  return <Header categories={transformedCategories} />;
};

export default HeaderWithCategories;
