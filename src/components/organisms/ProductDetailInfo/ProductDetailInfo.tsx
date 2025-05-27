'use client';

import { getProductMarkdown } from '@/markdown/products';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';

interface ProductDetailInfoProps {
  className?: string;
}

const ProductDetail = ({ className }: ProductDetailInfoProps) => {
  const { product } = useDetailProduct();
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const handleSetSeeAll = () => setSeeAll((prev) => !prev);

  return (
    <div
      className={cn(
        'relative px-3 lg:px-0 py-6 overflow-hidden my-[10px]  bg-white',
        seeAll ? 'h-auto' : 'h-[700px]',
        className
      )}
    >
      <SectionHeading className="text-[#2A2A40] text-[30px]">Chi tiết sản phẩm</SectionHeading>
      <div className="h-[4px] bg-[#2A2A40] mb-8 mt-4" />
      <div className="lg:col-span-10 lg:col-start-2 text-[18px] [&>*]:leading-[36px]">
        {getProductMarkdown(product.slug) ? getProductMarkdown(product.slug)({}) : null}
      </div>
      {seeAll ? (
        <Button
          variant="secondary"
          fill="outline"
          onClick={handleSetSeeAll}
          className="border-none w-full h-[46px] font-bold text-[#0085E2]"
        >
          Thu gọn
        </Button>
      ) : (
        <Button
          variant="secondary"
          fill="fill"
          onClick={handleSetSeeAll}
          className="w-full h-[200px] text-[#D93434] font-bold underline absolute bottom-0 bg-transparent [background-image:linear-gradient(to_top,white_40%,transparent_100%)] hover:opacity-100"
        >
          <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 underline">
            Xem thêm
          </span>
        </Button>
      )}
    </div>
  );
};

export default ProductDetail;
