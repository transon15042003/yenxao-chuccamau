'use client';

import { BoxSVG } from '@/svg/BoxSVG/BoxSVG';
import { NoticeSVG } from '@/svg/NoticeSVG/NoticeSVG';
import { ReloadSVG } from '@/svg/ReloadSVG/ReloadSVG';
import { Star } from '@/svg/StarSVG/StarSVG';
import { CartItem } from '@/types/cart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { useCart } from '@/components/providers/CartProvider/CartProvider';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';

interface ProductSummaryProps {
  className?: string;
}

const ProductSummary = ({ className }: ProductSummaryProps) => {
  const { product, curSize, curFlavor, name, curThumbnail, price, handleSetSize, handleSetFlavor } =
    useDetailProduct();
  const { addToCart } = useCart();
  const router = useRouter();

  const listSize = product.specs.find((el) => el.key === 'size');
  const listFlavor = product.specs.find((el) => el.key === 'savour');
  const [amount, setAmount] = useState<number>(1);
  const [seeAll, setSeeAll] = useState<boolean>(false);

  const handleChangeSize = (e: React.MouseEvent<HTMLElement>) => {
    handleSetSize(e.currentTarget.innerText);
  };
  const handleChangeFlavor = (e: React.MouseEvent<HTMLElement>) => {
    handleSetFlavor(e.currentTarget.innerText);
  };
  const handleChangeAmount = (type: 'increase' | 'decrease') => {
    if (amount === 0) return;
    switch (type) {
      case 'increase':
        setAmount((prev) => prev + 1);
        break;
      case 'decrease':
        setAmount((prev) => (prev === 1 ? 1 : prev - 1));
        break;
      default:
        console.warn(`Do not have ${type}`);
    }
  };
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: product.id,
      sku: '',
      name: name,
      price: price || 0,
      quantity: amount,
      specs: { size: curSize, savour: curFlavor },
      thumbnail: curThumbnail
    };

    addToCart(cartItem);
  };
  const handleToggleSeeAll = () => {
    setSeeAll((prev) => !prev);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/order');
  };

  return (
    <div className={cn('px-3 pb-5 pt-4 lg:pt-0 text-[#2A2A40] bg-white', className)}>
      <SectionHeading className="text-[#2A2A40] text-[25px]">{name}</SectionHeading>
      <div className="flex items-center py-2 border-b border-dashed border-[#DADADA]">
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <Star className="w-[20px] h-[20px]" />
        <p className="pl-4">(124 reviews) | Đã bán {product.totalSold}</p>
      </div>
      <div className="flex items-center border-b border-dashed border-[#DADADA] py-2 text-[25px]">
        <SectionHeading className="text-[25px]">{price}đ</SectionHeading>
        {/* <SectionHeading className="pl-4 font-light text-[20px] leading-[32px] line-through text-[#2A2A40]">
          12.000.000đ
        </SectionHeading> */}
      </div>
      <div className="border-b border-dashed border-[#DADADA] py-2">
        <b className="mr-1">Thành phần:</b>

        <div className="relative">
          <span
            className={cn(
              'mr-1 block transition-all',
              seeAll ? 'line-clamp-none max-h-none' : 'line-clamp-2 max-h-[48px] overflow-hidden'
            )}
          >
            {product.ingredient?.join(' ')}
          </span>

          <Button
            variant="secondary"
            fill="outline"
            onClick={handleToggleSeeAll}
            className={cn(
              'text-[#0085E2] font-bold border-none p-0 bg-white',
              seeAll ? 'static w-auto' : 'absolute bottom-0 right-0 w-[100px] hover:opacity-100'
            )}
          >
            {seeAll ? 'Thu gọn' : 'Xem thêm'}
          </Button>
        </div>
      </div>
      <div className="border-b border-dashed border-[#DADADA] py-2">
        <b>Size:</b>
        {listSize?.value.map((el, idx) => (
          <Button
            key={idx}
            variant="secondary"
            fill="outline"
            onClick={(e) => handleChangeSize(e)}
            className={cn(
              'py-1 ml-2 mt-2 px-0 text-center w-auto px-2 border-[#2A2A40]',
              el === curSize && 'border-[#D62C35] text-[#D62C35]'
            )}
          >
            {el}
          </Button>
        ))}
      </div>
      <div className="border-b border-dashed border-[#DADADA] py-2">
        <b>Hương vị:</b>
        {listFlavor?.value.map((el, idx) => (
          <Button
            key={idx}
            variant="secondary"
            fill="outline"
            onClick={(e) => handleChangeFlavor(e)}
            className={cn(
              'py-1 ml-2 mt-2 px-0 text-center w-auto px-2 border-[#2A2A40]',
              el === curFlavor && 'border-[#D62C35] text-[#D62C35]'
            )}
          >
            {el}
          </Button>
        ))}
      </div>
      <div className="py-2">
        <p>
          <b>Số lượng:</b>
        </p>
        <div className="mt-1">
          <Button
            variant="secondary"
            fill="outline"
            onClick={() => handleChangeAmount('decrease')}
            className="p-0 w-10 h-[24px] text-center text-[#2A2A40] border-typo-1"
          >
            -
          </Button>
          <span className="px-3">{amount}</span>
          <Button
            variant="secondary"
            fill="outline"
            onClick={() => handleChangeAmount('increase')}
            className="p-0 w-10 h-6 text-[#2A2A40] border-typo-1"
          >
            +
          </Button>
        </div>
      </div>
      <div className="py-2 lg:grid lg:grid-cols-12 lg:gap-2">
        <Button
          variant="secondary"
          className="w-full h-[46px] font-bold bg-primary text-white lg:col-span-6"
          onClick={handleBuyNow}
        >
          Mua ngay
        </Button>
        <Button
          variant="secondary"
          fill="outline"
          onClick={handleAddToCart}
          className="w-full h-[46px] font-bold border-[#2A2A40] text-[#2A2A40] mt-3 lg:col-span-6 lg:mt-0"
        >
          Thêm giỏ hàng
        </Button>
      </div>
      <div className="border rounded-[5px] border-dashed border-[#DADADA] p-4 mt-3">
        <div className="flex flex-row content-start items-start ">
          <BoxSVG />
          <div className="ml-4">
            <b className="leading-[18px]">Giao hàng</b>
            <p className="leading-[18px]">Miễn phí giao hàng cho đơn từ 100.000đ</p>
          </div>
        </div>
        <div className="flex flex-row content-start items-start mt-2">
          <ReloadSVG />
          <div className="ml-4">
            <b className="leading-[18px]">Đổi trả</b>
            <p className="leading-[18px]">Đổi trả miễn phí trong vòng 7 ngày</p>
          </div>
        </div>
        <div className="flex flex-row content-start items-start mt-2">
          <NoticeSVG />
          <div className="ml-4">
            <b className="leading-[18px]">Bảo quản</b>
            <p className="leading-[18px]">Bảo quản lạnh, uống trong vòng 12h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
