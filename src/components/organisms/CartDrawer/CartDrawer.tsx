'use client';
import { useCartProducts } from '@/hooks/useCartProducts';
import { CloseSVG } from '@/svg/CloseSVG/CloseSVG';
import { useRouter } from 'next/navigation';
import { Fragment, RefObject, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { CartItem } from '@/components/molecules/CartItem/CartItem';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { cn } from '@/lib/utils';
import { convertToVND } from '@/lib/utils/string/string-formater';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const router = useRouter();
  const cartContainerRef = useRef<HTMLDivElement>(null);

  const { productsData, isLoadingProducts } = useCartProducts(cart);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    closeCart();
    router.push('/order');
  };

  useOnClickOutside(cartContainerRef as RefObject<HTMLElement>, closeCart);

  const discount = 0;
  const shipping = 0;
  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={cn(
        'h-[100dvh] bg-black/50 fixed top-0 right-0 z-cart',
        isCartOpen ? 'w-full' : 'w-0'
      )}
    >
      <div
        ref={cartContainerRef}
        className={cn(
          'flex flex-col gap-4 h-full bg-white fixed top-0 right-0 ',
          'transition-[right] duration-500 ease-in-out w-[95%] md:w-[457px]',
          isCartOpen ? 'right-0' : '-right-full'
        )}
      >
        {/* Cart Header */}
        <div className="h-[75px] bg-[#ECECEC] pl-7 pr-6 flex items-center justify-between">
          <SectionHeading className="uppercase">Giỏ hàng của bạn</SectionHeading>
          <div
            role="button"
            className="cursor-pointer text-[#2A2A40] hover:text-primary-light"
            onClick={closeCart}
          >
            <CloseSVG />
          </div>
        </div>

        {cart.items.length === 0 && !isLoadingProducts && (
          <div className="flex items-center justify-center h-full">
            <div className="text-2xl font-bold">Giỏ hàng trống</div>
          </div>
        )}

        {isLoadingProducts && (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-typo-2">Đang tải sản phẩm...</p>
          </div>
        )}

        {!isLoadingProducts && cart.items.length > 0 && (
          <>
            {/* Cart Body */}
            <div className="py-5 px-7 flex-1 overflow-y-auto customscrollbar">
              <div className="flex flex-col">
                {cart.items.map((item) => {
                  const product = productsData.get(item.productId);

                  if (!product) return null;

                  return (
                    <Fragment key={item.sku}>
                      <CartItem
                        item={item}
                        product={product}
                        onIncrease={() => increaseQuantity(item.sku, 1)}
                        onDecrease={() => decreaseQuantity(item.sku, 1)}
                        onRemove={() => removeFromCart(item.sku)}
                      />
                      <div className="my-6 border-t border-dashed border-[rgba(0,0,0,0.1)]"></div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Cart Footer */}
        <div className="mx-7 mb-6">
          <div className="h-[150px] w-full flex flex-col justify-between">
            <div className="border border-black my-6"></div>

            <div className="flex flex-col gap-4 f">
              <div className="hidden items-center justify-between">
                <span>Giảm giá</span>
                <span>{convertToVND(discount)}</span>
              </div>

              <div className="hidden items-center justify-between">
                <span>Vận chuyển</span>
                <span>{convertToVND(shipping)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold">Tổng tiền</span>
                <span className="font-bold">{convertToVND(total)}</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                className="w-full uppercase text-xl font-bold py-[13px]"
                onClick={handleCheckout}
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
