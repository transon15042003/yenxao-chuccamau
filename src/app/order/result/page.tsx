'use client';
import { CartSVG } from '@/svg/CartSVG/CartSVG';
import { CheckSVG } from '@/svg/CheckSVG/CheckSVG';
import { WebPageSVG } from '@/svg/WebPageSVG.tsx/WebPageSVG';
import { Order } from '@/types/order';
import React, { useEffect, useState } from 'react';
import { renderEmail } from 'react-html-email';
import { sendMail } from 'src/services/mail.service';
import { useLocalStorage } from 'usehooks-ts';

import { Stepper } from '@/components/atoms/Step';
import { EmptyDataBlock } from '@/components/molecules/EmptyDataBlock';
import { CustomerOrderNotification } from '@/components/templates/mail/CustomerOrderNotification';
import { OwnerOrderNotification } from '@/components/templates/mail/OwnerOrderNotification';

const steps = [
  { label: '1. Giỏ hàng', icon: <CartSVG className="w-6 h-6" /> },
  { label: '2. Thanh toán', icon: <WebPageSVG className="w-6 h-6" /> },
  { label: '3. Hoàn tất', icon: <CheckSVG className="w-6 h-6" /> }
];

const OrderResultPage = () => {
  const [rendered, setRendered] = useState(false);
  const [order] = useLocalStorage<Order | null>('order', null, {
    initializeWithValue: false
  });

  const sendNotificationEmails = async (order: Order) => {
    try {
      // send mail to owner
      await sendMail({
        subject: `[Chúc Cà Mau] Đơn hàng mới từ ${order.customer.name} – Mã đơn: ${order.code}`,
        html: renderEmail(OwnerOrderNotification(order)),
        fromName: 'Chuc Ca Mau - Yen Sao'
      });

      if (order.customer.email) {
        await sendMail({
          subject: `[Chúc Cà Mau] Đơn hàng #${order.code} đã được ghi nhận`,
          html: renderEmail(CustomerOrderNotification(order)),
          fromName: 'Chuc Ca Mau - Yen Sao',
          emailTo: order.customer.email
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    if (rendered && order) {
      sendNotificationEmails(order);
    }
  }, [rendered, order]);

  if (!order) {
    return (
      <div>
        <EmptyDataBlock />
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7F7] pt-10 pb-20">
      <div className="w-[95%] lg:w-[85%] mx-auto 2xl:max-w-[1200px] ">
        <div className="bg-white px-5 py-6 flex flex-col md:flex-row justify-between md:items-center gap-6 rounded-[5px]">
          <h3 className="text-xl font-bold">Hoàn tất đơn hàng</h3>
          <div className="w-full md:w-fit">
            {/* Steps */}
            <Stepper steps={steps} currentStep={3} className="" />
          </div>
        </div>

        <div className="bg-white rounded-[5px] p-10 mt-10">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2 text-green-500">
              <CheckSVG className="w-20 h-20" />
            </div>
            <div className="flex flex-col gap-5  max-w-[600px] text-center">
              <h4 className="text-lg font-bold">
                Đơn hàng của bạn đã được đặt thành công, chúng tôi sẽ liên hệ với bạn trong thời
                gian sớm nhất.
              </h4>
              <p className="">
                Mã đơn hàng: <span className="text-primary font-bold">{order?.code}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderResultPage;
