'use client';

import { Product } from '@/types/product';
import { ProductVariant } from '@/types/product';
import { useContext, createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface DetailProductType {
  product: Product;
  variants: ProductVariant[];
  selectedVariant: ProductVariant | null;
  setSelectedVariant: Dispatch<SetStateAction<ProductVariant>>;
}

const defaultProduct: Product = {
  id: '',
  name: '',
  slug: '',
  price: 0,
  thumbnail: '',
  description: '',
  categories: [],
  ingredient: [],
  specs: [],
  variants: [],
  options: [],
  isNew: false,
  createdAt: '',
  total: 1,
  totalSold: 0
};

const DetailProductContext = createContext<DetailProductType>({
  product: defaultProduct,
  variants: [],
  selectedVariant: null,
  setSelectedVariant: () => {}
});

export const DetailProductProvider = ({
  children,
  product
}: {
  children: React.ReactNode;
  product: Product;
}) => {
  const [, setViewedProducts] = useLocalStorage<Product['id'][]>('viewedProducts', []);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);

  useEffect(() => {
    if (product) {
      // note: save recent viewed products
      setViewedProducts((prev) => Array.from(new Set([product.id, ...prev])).slice(0, 12));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <DetailProductContext.Provider
      value={{
        product,
        variants: product.variants,
        selectedVariant,
        setSelectedVariant
      }}
    >
      {children}
    </DetailProductContext.Provider>
  );
};

export const useDetailProduct = () => {
  const ctx = useContext(DetailProductContext);

  if (!ctx) {
    throw new Error('useDetailProduct must be used within a DetailProductProvider');
  }

  return ctx;
};
