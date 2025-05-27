import { ProductCartSVG } from '@/svg/ProductCartSVG/ProductCartSVG';
import { Product } from '@/types/product';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/atoms/Badge/Badge';
import { Button } from '@/components/atoms/Button/Button';

import { cn, convertToVND } from '@/lib/utils';
interface ProductCardProps {
  className?: string;
  product: Product;
  badge?: string;
  progress?: {
    total: number;
    sold: number;
    label?: string;
  };
  button: {
    label: string;
    onClick?: (product: Product) => void;
    disabled?: boolean;
  };
  onAddToCart?: (product: Product) => void;
  onViewDetail?: (product: Product) => void;
}

export const ProductCard = ({
  className,
  badge,
  product,
  // progress,
  button,
  onAddToCart,
  onViewDetail
}: ProductCardProps) => {
  const { thumbnail, name, price } = product;

  const handleButtonClick = () => {
    button.onClick?.(product);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleViewDetail = () => {
    onViewDetail?.(product);
  };

  return (
    <div
      className={cn(
        'bg-white pt-4 lg:px-5 px-3 pb-5 md:pb-7 pt-[19px]',
        'border border-[#C2D1D9] hover:border-primary rounded-[5px]',
        'flex flex-col justify-between',
        className
      )}
    >
      <div
        className="relative w-full aspect-square flex items-center justify-center hover:cursor-pointer"
        onClick={handleViewDetail}
      >
        {/* Badge */}
        {badge ? (
          <Badge className="absolute top-0 left-0 z-50 shadow" content={badge} />
        ) : (
          <div className="absolute top-0 left-0" />
        )}
        <Image
          className={cn('max-h-full object-cover border border-slate-300', className)}
          src={thumbnail}
          alt={name}
          // width={254}
          // height={254}
          fill
          // style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Product Name */}
      <div
        className="text-sm lg:text-base font-semibold line-clamp-3 lg:line-clamp-2 mt-[18px] hover:cursor-pointer mb-1.5 md:mb-4"
        onClick={handleViewDetail}
      >
        {name}
      </div>

      {/* Product Price */}
      <div className="flex flex-wrap items-center justify-between md:justify-start md:gap-2 text-sm lg:text-base font-bold">
        {/* <span className="line-through text-[#929292]">{convertToVND(Number(price))}</span> */}
        <span className="text-primary-light">{convertToVND(Number(price))}</span>
      </div>

      {/* Product sold */}
      {/* {progress && (
        <div className="mt-3">
          <Progress
            value={progress.sold}
            max={progress.total}
            label={progress.label || `Đã bán ${progress.sold}`}
          />
        </div>
      )} */}

      {/* Add to Cart Button */}
      <div className="mt-6 flex justify-between">
        <Button
          className="hover:bg-primary-light flex-1 mr-2 md:mr-5 lg:mr-8 px-1 lg:px-4"
          variant="primary"
          onClick={handleButtonClick}
        >
          {button.label}
        </Button>
        <div
          role="button"
          className="p-2 border border-[#3E4249] text-[#3E4249] hover:cursor-pointer rounded-[5px] hover:border-primary hover:text-primary"
          onClick={handleAddToCart}
        >
          <ProductCartSVG />
        </div>
      </div>
    </div>
  );
};
