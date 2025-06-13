'use client';

import useBuyNowLogic from '@/hooks/useBuyNowLogic';
import { BoxSVG } from '@/svg/BoxSVG/BoxSVG';
import { MinusSVG } from '@/svg/MinusSVG/MinusSVG';
import { PlusSVG } from '@/svg/PlusSVG/PlusSVG';
import { ReloadSVG } from '@/svg/ReloadSVG/ReloadSVG';
import { Star } from '@/svg/StarSVG/StarSVG';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { UnOrderedList } from '@/components/atoms/UnOrderedList/UnOderedList';
import { useCart } from '@/components/providers/CartProvider/CartProvider';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn, convertToVND } from '@/lib/utils';
import { convertProductToCartItem } from '@/lib/utils/product';

interface ProductSummaryProps {
  className?: string;
}

const ProductSummary = ({ className }: ProductSummaryProps) => {
  const { product, selectedVariant, setSelectedVariant } = useDetailProduct();
  const { addToCart } = useCart();
  const { handleBuyNow } = useBuyNowLogic();

  const listOptions = product.options;
  const [quantity, setQuantity] = useState<number>(1);
  const [seeAll, setSeeAll] = useState<boolean>(false);

  const handleOptionChange = (key: string, value: string) => {
    const newVariantSpecs = { ...selectedVariant?.specs, [key]: value };
    const variant = product.variants.find((el) =>
      Object.entries(newVariantSpecs).every(([key, value]) => el.specs[key] === value)
    );
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const handleChangeAmount = (type: 'increase' | 'decrease') => {
    if (quantity === 0) return;
    switch (type) {
      case 'increase':
        setQuantity((prev) => prev + 1);
        break;
      case 'decrease':
        setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
        break;
      default:
        console.warn(`Do not have ${type}`);
    }
  };

  const handleAddToCart = async () => {
    const sku = selectedVariant?.sku;

    if (!sku) return;

    addToCart(convertProductToCartItem(product, sku, quantity));
  };
  const handleToggleSeeAll = () => {
    setSeeAll((prev) => !prev);
  };

  const handleBuyNowClick = () => {
    if (selectedVariant) {
      handleBuyNow(product, selectedVariant.sku, quantity);
    }
  };

  const { name, price } = selectedVariant || {};
  const isOutOfStock = product.isOutOfStock;

  return (
    <div className={cn('px-3 pb-5 pt-4 lg:pt-0 text-[#2A2A40] bg-white', className)}>
      <SectionHeading className="text-[#2A2A40] text-[25px]">{name}</SectionHeading>
      <div className="flex items-center py-2 border-b border-dashed border-[#DADADA]">
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        {/* <p className="pl-4">(124 reviews) | Đã bán {product.totalSold}</p> */}
      </div>
      <div className="flex items-center border-b border-dashed border-[#DADADA] py-2 text-[25px]">
        <div className={cn(isOutOfStock && 'line-through')}>
          <SectionHeading className="text-[25px]">{convertToVND(price!)}</SectionHeading>
        </div>
        {/* <SectionHeading className="pl-4 font-light text-[20px] leading-[32px] line-through text-[#2A2A40]">
          12.000.000đ
        </SectionHeading> */}
      </div>
      <div className="border-b border-dashed border-[#DADADA] py-2">
        <b className="mr-1">Thành phần:</b>

        <UnOrderedList
          items={product.ingredient}
          className={cn(seeAll ? 'max-h-auto' : 'max-h-[70px] overflow-hidden')}
        />

        <Button
          variant="secondary"
          fill="outline"
          onClick={handleToggleSeeAll}
          className={cn('text-[#0085E2] font-bold border-none p-0 bg-white w-auto')}
        >
          {seeAll ? 'Thu gọn' : 'Xem thêm'}
        </Button>
      </div>
      {listOptions.map((option) => (
        <div key={option.key} className="border-b border-dashed border-[#DADADA] py-2">
          <b> {option.label.trim()}:</b>
          {option.options?.map((optionItem, idx) => (
            <Button
              key={idx}
              variant="secondary"
              fill="outline"
              onClick={() => handleOptionChange(option.key, optionItem.value!)}
              className={cn(
                'py-1 ml-2 mt-2 text-center w-auto px-1 border-[#2A2A40]',
                optionItem.value === selectedVariant?.specs[option.key] &&
                  'border-[#D62C35] text-[#D62C35]'
              )}
            >
              {optionItem.label}
            </Button>
          ))}
        </div>
      ))}

      <div className="py-2">
        <div className="flex flex-row items-center">
          <b>Số lượng:</b>
          <Button
            variant="secondary"
            fill="outline"
            onClick={() => handleChangeAmount('decrease')}
            className="p-0 w-10 ml-2 h-[30px] flex justify-center items-center text-[#2A2A40] border-typo-1"
            disabled={isOutOfStock}
          >
            <MinusSVG />
          </Button>
          <span className="px-3">{quantity}</span>
          <Button
            variant="secondary"
            fill="outline"
            onClick={() => handleChangeAmount('increase')}
            className="p-0 w-10 h-[30px] text-[#2A2A40] flex justify-center items-center border-typo-1"
            disabled={isOutOfStock}
          >
            <PlusSVG />
          </Button>
        </div>
      </div>

      <div className="py-2 lg:grid lg:grid-cols-12 lg:gap-2">
        <Button
          variant="secondary"
          className="w-full h-[46px] font-bold bg-primary text-white lg:col-span-6"
          onClick={handleBuyNowClick}
          disabled={isOutOfStock}
        >
          Mua ngay
        </Button>
        <Button
          variant="secondary"
          fill="outline"
          onClick={handleAddToCart}
          className="w-full h-[46px] font-bold border-[#2A2A40] text-[#2A2A40] mt-3 lg:col-span-6 lg:mt-0"
          disabled={isOutOfStock}
        >
          Thêm giỏ hàng
        </Button>
      </div>
      <div className="border rounded-[5px] border-dashed border-primary p-4 mt-3">
        <div className="flex flex-row content-start items-start ">
          <div className="w-6 h-6">
            <BoxSVG />
          </div>
          <div className="ml-4">
            <b className="leading-[16px]">Giao hàng</b>
            <p className="leading-[16px]">Miễn phí giao hàng cho đơn từ 100.000đ</p>
          </div>
        </div>
        <div className="flex flex-row content-start items-start mt-2">
          <div className="w-6 h-6">
            <ReloadSVG />
          </div>
          <div className="ml-4">
            <b className="leading-[16px]">Đổi trả</b>
            <p className="">
              Sản phẩm yến chưng không áp dụng đổi trả. Yến thô và tinh chế hỗ trợ đổi trả hàng
              trong 3 ngày nếu còn seal và không bể vỡ.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row content-start items-start mt-2">
          <NoticeSVG />
          <div className="ml-4">
            <b className="leading-[18px]">Bảo quản</b>
            <p className="leading-[18px]">Bảo quản lạnh, uống trong vòng 12h</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductSummary;
