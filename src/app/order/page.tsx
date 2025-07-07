'use client';

import useRecaptchaLogic from '@/hooks/useRecaptchaLogic';
import { CartSVG } from '@/svg/CartSVG/CartSVG';
import { CheckSVG } from '@/svg/CheckSVG/CheckSVG';
import { WebPageSVG } from '@/svg/WebPageSVG.tsx/WebPageSVG';
import { PaymentGateway } from '@/types/payment';
import Link from 'next/link';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AreaInputGroup } from '@/components/atoms/AreaInputGroup';
import { Button } from '@/components/atoms/Button';
import { LoadingOverlay } from '@/components/atoms/LoadingOverlay/LoadingOverlay';
import { Stepper } from '@/components/atoms/Step';
import { CartItem } from '@/components/molecules/CartItem/CartItem';
import { InputGroup } from '@/components/molecules/InputGroup/InputGroup';
import { InvoiceForm } from '@/components/organisms/InvoiceForm';
import { ShippingInfomationForm } from '@/components/organisms/ShippingInformationForm';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { cn, convertToVND } from '@/lib/utils';

import { usePaymentPageProvider } from './_context/PaymentPageContext';

const steps = [
  { label: '1. Giỏ hàng', icon: <CartSVG className="w-6 h-6" /> },
  { label: '2. Thanh toán', icon: <WebPageSVG className="w-6 h-6" /> },
  { label: '3. Hoàn tất', icon: <CheckSVG className="w-6 h-6" /> }
];

const boxBaseClassName = 'bg-white rounded-[5px] px-4 py-5';

const CheckoutBoxHeading = ({ children }: PropsWithChildren) => {
  return <h3 className="text-xl font-bold">{children}</h3>;
};

type PaymentMethod = {
  id: PaymentGateway | 'COD';
  name: string;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: 'COD',
    name: 'Thanh toán khi nhận hàng (COD)'
  }
  // {
  //   id: 'VNPAY',
  //   name: 'VNPay'
  // },
  // {
  //   id: 'MOMO',
  //   name: 'Momo'
  // }
];

const PaymentPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const {
    isUseInvoiceForm,
    setIsUseInvoiceForm,
    isUseNoteForm,
    setIsUseNoteForm,
    orderNote,
    setOrderNote,
    paymentMethod,
    setPaymentMethod,
    placeOrder,
    shippingInfoForm,
    invoiceForm,
    shippingMethod,
    setShippingMethod,
    isSubmitting,
    setSubmitting
  } = usePaymentPageProvider();

  const [discountErrorMessage, setDiscountErrorMessage] = useState<string | undefined>(undefined);
  const [discountCode, setDiscountCode] = useState<string>('');
  const { verifyHuman } = useRecaptchaLogic();

  const shipping = 0;
  const discount = 0;
  const total = cart.items.reduce((acc, item) => acc + item?.price * item?.quantity, 0);

  const getTakeOrderStatus = () => {
    if (cart.items.length === 0) {
      return false;
    }

    if (shippingInfoForm.formState.submitCount > 0 && !shippingInfoForm.formState.isValid) {
      return false;
    }

    if (isUseInvoiceForm && !invoiceForm.formState.isValid) {
      return false;
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    setSubmitting(true);
    try {
      const verifyHumanResult = await verifyHuman('place_order');

      if (!verifyHumanResult || !verifyHumanResult.success) {
        throw new Error('Xác thực reCAPTCHA lỗi, vui lòng thử lại');
      }

      placeOrder(cart.items);
    } catch (error) {
      setSubmitting(false);
      toast.error('Xác thực reCAPTCHA lỗi, vui lòng thử lại');
      console.error(error);
    }
  };

  useEffect(() => {
    if (!discountCode) {
      setDiscountErrorMessage('');
    }
  }, [discountCode]);

  return (
    <>
      {isSubmitting && <LoadingOverlay />}
      <div className="bg-[#F7F7F7] pt-10 pb-20">
        <div className="w-[95%] lg:w-[85%] mx-auto 2xl:max-w-[1200px] ">
          <div className="bg-white px-5 py-6 flex flex-col md:flex-row justify-between md:items-center gap-6 rounded-[5px]">
            <CheckoutBoxHeading>Thanh toán</CheckoutBoxHeading>
            <div className="w-full md:w-fit">
              {/* Steps */}
              <Stepper steps={steps} currentStep={2} className="" />
            </div>
          </div>

          <div className="mt-3 flex flex-col md:flex-row gap-3">
            {/* Left: Form & Info */}
            <div className="flex flex-col gap-3 w-full md:w-2/3">
              {/* Shipping Info */}
              <div className={cn(boxBaseClassName)}>
                <CheckoutBoxHeading>Thông tin giao hàng</CheckoutBoxHeading>
                <div className="mt-1.5">
                  <ShippingInfomationForm formObject={shippingInfoForm} />
                </div>
              </div>

              {/* Shipping Method */}
              <div className={cn(boxBaseClassName)}>
                <CheckoutBoxHeading>Chọn hình thức giao hàng</CheckoutBoxHeading>
                <div className="mt-1.5">
                  <div className="flex flex-col md:flex-row gap-3">
                    <label className="flex gap-3 p-4 border rounded-lg cursor-pointer text-typo-1 w-full md:w-1/2">
                      <input
                        type="radio"
                        name="shipping"
                        className="w-4 h-4 accent-primary"
                        checked={shippingMethod === 'STANDARD'}
                        onChange={() => setShippingMethod('STANDARD')}
                      />
                      <div>
                        <p className="text-typo-1">
                          Giao hàng tiêu chuẩn <span className="text-primary ml-2">Miễn phí</span>
                        </p>
                        <p className="text-typo-1">
                          <span className="text-typo-1 font-bold">2h (nội thành HCM)</span>
                        </p>
                      </div>
                    </label>

                    <label className="flex gap-3 p-4 border rounded-lg cursor-pointer w-full md:w-1/2">
                      <input
                        type="radio"
                        name="shipping"
                        className="w-4 h-4 accent-primary"
                        checked={shippingMethod === 'WORKING_HOURS'}
                        onChange={() => setShippingMethod('WORKING_HOURS')}
                      />
                      <div>
                        <p className="text-typo-1">Giao hàng giờ hành chính từ </p>
                        <p className="text-typo-1 font-bold">Thứ 2 đến Thứ 7</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/*  Payment Method */}
              <div className={cn(boxBaseClassName)}>
                <CheckoutBoxHeading>Phương thức thanh toán</CheckoutBoxHeading>
                <div className="mt-1.5">
                  <div className="flex flex-col gap-y-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center gap-x-4 font-medium text-typo-1"
                      >
                        <input
                          type="radio"
                          name="payment_method"
                          id={method.id}
                          className="h-4 w-4 border-[#CCCCCC] accent-primary"
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                        />
                        <label
                          htmlFor={method.id}
                          className="flex items-center gap-x-2 hover:cursor-pointer"
                        >
                          <span className="font-medium text-[#212121]">{method.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Invoice Info */}
              <div className={cn(boxBaseClassName)}>
                <label htmlFor="invoice_info" className="flex items-center gap-x-4">
                  <input
                    type="checkbox"
                    id="invoice_info"
                    checked={isUseInvoiceForm}
                    onChange={(e) => setIsUseInvoiceForm(e.target.checked)}
                    className="h-6 w-6 rounded border-[#BDBDBD] accent-primary"
                  />
                  <span className="text-xl font-bold">Thông tin xuất hóa đơn</span>
                </label>
                <div className="mt-1.5">
                  <InvoiceForm formObject={invoiceForm} readonly={!isUseInvoiceForm} />
                </div>
              </div>

              {/* Order Note */}
              <div className={cn(boxBaseClassName)}>
                <label htmlFor="order_note" className="flex items-center gap-x-4">
                  <input
                    type="checkbox"
                    id="order_note"
                    checked={isUseNoteForm}
                    onChange={(e) => setIsUseNoteForm(e.target.checked)}
                    className="h-6 w-6 rounded border-[#BDBDBD] accent-primary"
                  />
                  <span className="text-xl font-bold">Ghi chú đơn hàng</span>
                </label>
                <div className="mt-1.5">
                  <AreaInputGroup
                    disabled={!isUseNoteForm}
                    maxLength={75}
                    placeholder="Lời nhắn viết lên thiệp, tối đa 75 từ..."
                    className="resize-none"
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    line={3}
                  />
                </div>
              </div>
            </div>

            {/* Right: Cart Summary & Place Order */}
            <div className="flex flex-col gap-3">
              {cart.items.length > 0 ? (
                <div className="flex flex-col gap-4 bg-white rounded-lg px-2 py-6 md:px-5 max-h-[300px] md:max-h-[450px] overflow-y-auto customscrollbar">
                  {cart.items?.map((item) => {
                    return (
                      <CartItem
                        key={item.sku}
                        item={item}
                        onIncrease={() => increaseQuantity(item.variantId, 1)}
                        onDecrease={() => decreaseQuantity(item.variantId, 1)}
                        onRemove={() => removeFromCart(item.variantId)}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-4 bg-white rounded-lg p-6 items-center">
                  <div className="flex flex-col gap-4">
                    <span className="text-typo-1 font-bold text-xl">Giỏ hàng trống</span>
                  </div>
                  <Link href="/products" className="text-smfont-bold text-primary">
                    Tiếp tục mua hàng
                  </Link>
                </div>
              )}

              {/* Discount Code */}
              <div className={cn(boxBaseClassName)}>
                <CheckoutBoxHeading>
                  Bạn có mã giảm giá? <span className="text-primary">Áp ngay!</span>
                </CheckoutBoxHeading>
                <div className="mt-1.5 flex gap-2 items-start">
                  <InputGroup
                    className="flex-1"
                    inputClassName="max-h-[46px]"
                    placeholder="Nhập mã phiếu giảm giá"
                    errorMessage={discountErrorMessage}
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button
                    onClick={() => setDiscountErrorMessage('Mã giảm giá không hợp lệ')}
                    className="bg-[#424B5A] text-white text-sm font-bold rounded-[5px] px-2 py-3 h-[46px] min-w-[60px] text-center hover:opacity-80 transition-all duration-75"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className={cn(boxBaseClassName)}>
                <div className="mt-1.5">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span>Tạm tính</span>
                      <span>{convertToVND(total)}</span>
                    </div>

                    <div className="hidden items-center justify-between">
                      <span>Phí vận chuyển</span>
                      <span>{convertToVND(shipping)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-bold ">Tổng cộng</span>
                      <span className="font-bold text-primary">
                        {convertToVND(total - discount + shipping)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full uppercase text-xl font-bold py-[13px] flex items-center justify-center gap-x-2"
                      disabled={!getTakeOrderStatus() || isSubmitting}
                      onClick={handlePlaceOrder}
                    >
                      Đặt hàng
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
