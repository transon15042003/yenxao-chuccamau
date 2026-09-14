import { Order } from '@/types/order';
import { renderEmail } from 'react-html-email';

import { CustomerOrderNotification } from '@/components/templates/mail/CustomerOrderNotification';
import { OwnerOrderNotification } from '@/components/templates/mail/OwnerOrderNotification';

import { sendMail } from './mail.service';
export const fakeMailAddress = 'no-input@chuccamau.com';
const mailApi = process.env.NEXT_PUBLIC_APP_DOMAIN + '/api/send-mail';

function orderTextSummary(order: Order, forCustomer: boolean): string {
  const lines = order.items.map((i) => `- ${i.name || i.sku || 'SP'} x${i.quantity}`).join('\n');
  const total = order.items
    .reduce((sum, i) => sum + i.price * i.quantity, 0)
    .toLocaleString('vi-VN');
  if (forCustomer) {
    return (
      `Xin chào ${order.customer.name},\n\n` +
      `Đơn hàng #${order.code} đã được ghi nhận.\n\n` +
      `${lines}\n\nTổng: ${total} VND\n`
    );
  }

  return (
    `Đơn mới #${order.code}\n` +
    `Khách: ${order.customer.name}\nSĐT: ${order.customer.phone}\n` +
    `Email: ${order.customer.email || '—'}\n\n${lines}\n\nTổng: ${total} VND\n`
  );
}

/** Legacy/manual notify — primary path is Medusa order.placed on backend. */
export const sendOrderNotification = async (order: Order) => {
  try {
    await sendMail(
      {
        subject: `[Chúc Cà Mau] Đơn hàng mới từ ${order.customer.name} – Mã đơn: ${order.code}`,
        html: renderEmail(OwnerOrderNotification(order)),
        text: orderTextSummary(order, false),
        fromName: 'Chuc Ca Mau - Yen Sao'
      },
      mailApi
    );

    if (order.customer.email && order.customer.email !== fakeMailAddress) {
      await sendMail(
        {
          subject: `[Chúc Cà Mau] Đơn hàng #${order.code} đã được ghi nhận`,
          html: renderEmail(CustomerOrderNotification(order)),
          text: orderTextSummary(order, true),
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
