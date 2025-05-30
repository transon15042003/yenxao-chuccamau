import { OrderCustomer } from '@/types/order';
// import { Box, Email, Item, Span } from 'react-html-email';

// import { emailHeadCSS, labelStyle, contentStyle, rootStyle } from './InitSetup';

import { MailContent } from './MailContent';
import { MailFooter } from './MailFooter';

const HEADER_COLOR = '#B4071A';

export const CustomerOrderNotification = (customer: OrderCustomer) => (
  <MailContent
    headerColor={HEADER_COLOR}
    title={`Kính chào ${customer.name},`}
    messages={[
      'Cảm ơn Anh/Chị đã đặt hàng tại Chúc Cà Mau.',
      'Chúng tôi đã nhận được đơn hàng của Anh/Chị và sẽ xử lý trong thời gian sớm nhất.'
    ]}
    infoItems={{
      labels: ['Khách hàng:', 'Email:', 'Số điện thoại:', 'Địa chỉ:'],
      values: [
        customer.name,
        customer.email ? (
          <a href={`mailto:${customer.email}`} style={{ color: '#0085E2', textDecoration: 'none' }}>
            {customer.email}
          </a>
        ) : null,
        customer.phone,
        `${customer.address}${customer.district ? `, ${customer.district}` : ''}${
          customer.province ? `, ${customer.province}` : ''
        }`
      ].filter(Boolean)
    }}
    highlightText="Chúng tôi sẽ liên hệ với Anh/Chị để xác nhận đơn hàng và thông báo thời gian giao hàng."
  >
    <tr>
      <td style={{ padding: 0 }}>
        <MailFooter />
      </td>
    </tr>
  </MailContent>
);
