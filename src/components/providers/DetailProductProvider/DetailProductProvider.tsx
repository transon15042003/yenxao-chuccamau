'use client';

import { Product } from '@/types/product';
import { ProductVariant } from '@/types/product';
import { useContext, createContext, useState, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface DetailProductType {
  product: Product;
  products: Product[];
  variants: ProductVariant[];
  curThumbnail: string;
  curSize: string;
  curFlavor: string;
  name: string;
  price: number;
  handleSetThumbnail: (thumbnailUrl: string) => void;
  handleSetSize: (size: string) => void;
  handleSetFlavor: (flavor: string) => void;
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
  isNew: false,
  createdAt: '',
  total: 1,
  totalSold: 0
};

const DetailProductContext = createContext<DetailProductType>({
  product: defaultProduct,
  products: [],
  variants: [],
  curThumbnail: '',
  curSize: '',
  curFlavor: '',
  name: '',
  price: 0,
  handleSetThumbnail: () => {},
  handleSetSize: () => {},
  handleSetFlavor: () => {}
});

export const DetailProductProvider = ({
  children,
  product,
  products
}: {
  children: React.ReactNode;
  product: Product;
  products: Product[];
}) => {
  const [, setViewedProducts] = useLocalStorage<Product['id'][]>('viewedProducts', []);
  const [curThumbnail, setCurThumbnail] = useState<string>('');
  const [curSize, setCurSize] = useState<string>('');
  const [curFlavor, setCurFlavor] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const handleSetThumbnail = (thumbnailUrl: string): void => {
    setCurThumbnail(thumbnailUrl);
  };

  const handleSetSize = (size: string): void => {
    setCurSize(size);
  };

  const handleSetFlavor = (flavor: string): void => {
    setCurFlavor(flavor);
  };

  useEffect(() => {
    if (product) {
      if (curSize === '' || curFlavor === '') {
        setCurThumbnail(product.thumbnail);
      } else {
        const variant = product.variants.find(
          (el) => el.specs.size === curSize && el.specs.savour === curFlavor
        );

        if (variant === undefined) {
          setCurThumbnail(product.thumbnail);
          setName(product.name);
          setPrice(product.price);
        } else {
          setCurThumbnail(variant.thumbnail);
          setName(variant.name || '');
          setPrice(variant.price);
        }
      }
    }
  }, [curSize, curFlavor, product]);

  useEffect(() => {
    if (product) {
      // note: save recent viewed products
      setViewedProducts((prev) => Array.from(new Set([product.id, ...prev])).slice(0, 12));

      const size: string = product.specs.find((el) => el?.key === 'size')?.value[0] || '';
      const flavor: string = product.specs.find((el) => el?.key === 'savour')?.value[0] || '';

      setCurSize(size);
      setCurFlavor(flavor);

      if (size === '' || flavor === '') {
        setCurThumbnail(product.thumbnail);
      } else {
        const thumbnail: string =
          product.variants.find((el) => el.specs.size === size && el.specs.savour === flavor)
            ?.thumbnail || '';

        if (!thumbnail) {
          setCurThumbnail(product.thumbnail);
        } else {
          setCurThumbnail(thumbnail);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <DetailProductContext.Provider
      value={{
        product,
        products,
        variants: product.variants,
        curThumbnail,
        curSize,
        curFlavor,
        name,
        price,
        handleSetThumbnail,
        handleSetSize,
        handleSetFlavor
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
