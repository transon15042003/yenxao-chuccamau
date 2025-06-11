import { Order } from '@/types/order';
import { renderEmail } from 'react-html-email';

import { CustomerOrderNotification } from '@/components/templates/mail/CustomerOrderNotification';
import { OwnerOrderNotification } from '@/components/templates/mail/OwnerOrderNotification';

import { sendMail } from './mail.service';
export const fakeMailAddress = 'no-input@chuccamau.com';
export const sendOrderNotification = async (order: Order) => {
  try {
    // send mail to owner
    await sendMail({
      subject: `[Chúc Cà Mau] Đơn hàng mới từ ${order.customer.name} – Mã đơn: ${order.code}`,
      html: renderEmail(OwnerOrderNotification(order)),
      fromName: 'Chuc Ca Mau - Yen Sao'
    });

    if (order.customer.email && order.customer.email !== fakeMailAddress) {
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
