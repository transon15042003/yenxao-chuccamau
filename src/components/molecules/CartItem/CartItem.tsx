import useProductNavigation from '@/hooks/useProductNavigation';
import { CloseSVG } from '@/svg/CloseSVG/CloseSVG';
import { CartItem as TCartItem } from '@/types/cart';
import { Product, ProductSpecifications, ProductVariant } from '@/types/product';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { cn, convertToVND } from '@/lib/utils';

import { SelectInput } from '../SelectInput';

export type CartItemProps = {
  product: Product;
  item: TCartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export const CartItem: React.FC<CartItemProps> = ({
  item,
  product,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  const { updateCartItemVariant } = useCart();
  const { navigateToProductDetail, isNavigating } = useProductNavigation();

  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>(item.specs);

  const selectedVariant = useMemo(() => {
    return product.variants.find((variant: ProductVariant) => {
      return Object.keys(selectedSpecs).every((key) => variant.specs[key] === selectedSpecs[key]);
    });
  }, [selectedSpecs, product.variants]);

  useEffect(() => {
    if (JSON.stringify(selectedSpecs) !== JSON.stringify(item.specs)) {
      setSelectedSpecs(item.specs);
    }
  }, [item.specs, selectedSpecs]);

  useEffect(() => {
    if (selectedVariant && selectedVariant.sku !== item.sku) {
      updateCartItemVariant(item.productId, item.sku, selectedVariant);
    }
  }, [selectedVariant, item.productId, item.sku, updateCartItemVariant]);

  const productSpecs = product.specs;

  const handleSpecChange = (key: string, value: string) => {
    setSelectedSpecs((prevSpecs) => ({
      ...prevSpecs,
      [key]: value
    }));
  };

  const handleProductClick = () => {
    if (!isNavigating) navigateToProductDetail(product.slug);
  };

  const cursorClass = isNavigating ? 'cursor-wait' : 'cursor-pointer';

  const displayPrice = selectedVariant?.price || item.price;
  const displayName = selectedVariant?.name || item.name;
  const displayThumbnail = selectedVariant?.thumbnail || item.thumbnail;

  return (
    <div className="flex w-full items-stretch py-4 bg-white rounded-lg">
      {/* Product Image */}
      <div
        className={cn(
          'relative w-[115px] md:w-[130px] h-[99px] flex-shrink-0 flex items-center justify-center ',
          cursorClass
        )}
        onClick={handleProductClick}
      >
        <Image
          className="rounded-[5px] object-cover"
          src={displayThumbnail}
          alt={displayName || 'product thumnail'}
          fill
        />
      </div>
      <div className="flex-auto flex flex-col gap-3 mx-4 min-w-0">
        {/* Product Info */}
        <div className="min-w-0">
          <div
            className={cn('font-semibold leading-[1.36] text-typo-1 line-clamp-1', cursorClass)}
            onClick={handleProductClick}
          >
            {displayName}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-semibold text-sm text-primary-dark">
              {convertToVND(displayPrice)}
            </span>
            {/* <span className="text-sm line-through text-[#C1C1C1]">
              {convertToVND(displayPrice)}
            </span> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          {productSpecs.map((spec: ProductSpecifications) => (
            <div className="w-fit md:w-1/2" key={spec.key}>
              <SelectInput
                key={spec.key}
                options={spec.value.map((val) => ({ label: val, value: val }))}
                value={selectedSpecs[spec.key] || ''}
                onChange={(newValue) => handleSpecChange(spec.key, newValue)}
                className="w-full md:flex-1 min-w-0 text-sm"
                menuWidth={120}
              />
            </div>
          ))}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrease}
            disabled={item.quantity === 1}
            className={cn(
              'w-8 h-8 flex items-center justify-center border border-[#B2BCCA] rounded-[3px] text-typo-1',
              item.quantity === 1 && 'opacity-50'
            )}
            aria-label="Decrease quantity"
          >
            {/* Minus Icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <rect x="3" y="7.25" width="10" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </button>
          <span className="w-8 text-center font-normal text-[16px] text-typo-1">
            {item.quantity}
          </span>
          <button
            onClick={onIncrease}
            className="w-8 h-8 flex items-center justify-center border border-[#B2BCCA] rounded-[3px] text-typo-1"
            aria-label="Increase quantity"
          >
            {/* Plus Icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <rect x="7.25" y="3" width="1.5" height="10" rx="0.75" fill="currentColor" />
              <rect x="3" y="7.25" width="10" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <div
        className="w-fi self-stretch flex-shrink-0 flex items-center justify-center bg-[#F3F3F3] md:bg-inherit cursor-pointer"
        role="button"
        onClick={onRemove}
      >
        <button className="text-typo-1 hover:text-red-500" aria-label="Remove item">
          {/* Trash Icon */}
          <CloseSVG className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
