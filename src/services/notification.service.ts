import { Order } from '@/types/order';
import { renderEmail } from 'react-html-email';

import { CustomerOrderNotification } from '@/components/templates/mail/CustomerOrderNotification';
import { OwnerOrderNotification } from '@/components/templates/mail/OwnerOrderNotification';

import { sendMail } from './mail.service';
export const fakeMailAddress = 'no-input@chuccamau.com';
const mailApi = process.env.NEXT_PUBLIC_APP_DOMAIN + '/api/send-mail';
export const sendOrderNotification = async (order: Order) => {
  try {
    // send mail to owner
    await sendMail(
      {
        subject: `[Chúc Cà Mau] Đơn hàng mới từ ${order.customer.name} – Mã đơn: ${order.code}`,
        html: renderEmail(OwnerOrderNotification(order)),
        fromName: 'Chuc Ca Mau - Yen Sao'
      },
      mailApi
    );

    if (order.customer.email && order.customer.email !== fakeMailAddress) {
      await sendMail(
        {
          subject: `[Chúc Cà Mau] Đơn hàng #${order.code} đã được ghi nhận`,
          html: renderEmail(CustomerOrderNotification(order)),
          fromName: 'Chuc Ca Mau - Yen Sao',
          emailTo: order.customer.email
        },
        mailApi
      );
    }
  } catch (error) {
    console.error(error);
  }
};
