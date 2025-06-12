import { Category } from '@/types/product';
import { useEffect, useState } from 'react';

import { listAllCategoriesWithSortedRank } from '@/lib/data/categories-hybrid';
import { transformCategory } from '@/lib/medusa-adapter/category';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await listAllCategoriesWithSortedRank();
      setCategories(categories.map(transformCategory));
    };
    fetchCategories();
  }, []);

  return categories;
};

export default useCategories;
