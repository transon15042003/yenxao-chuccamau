import { Order } from '@/types/order';
// import { Box, Email, Item, Span } from 'react-html-email';

// import { emailHeadCSS, labelStyle, contentStyle, rootStyle } from './InitSetup';
import { MailContent } from './MailContent';
import { MailFooter } from './MailFooter';

const HEADER_COLOR = '#B4071A';

export const OwnerOrderNotification = (order: Order) => (
  <MailContent
    headerColor={HEADER_COLOR}
    title="Thông báo đơn hàng mới,"
    messages={['Một đơn hàng mới vừa được tạo. Thông tin chi tiết như sau:']}
    infoItems={{
      labels: [
        'Mã đơn hàng:',
        'Tổng giá tiền:',
        'Khách hàng:',
        'Email:',
        'Số điện thoại:',
        'Địa chỉ:',
        'Thời gian đặt hàng:',
        'Thông tin xuất hóa đơn:',
        'Ghi chú đơn hàng:'
      ],
      values: [
        order.code,
        `${order.items
          .reduce((sum, i) => sum + i.price * i.quantity, 0)
          .toLocaleString('vi-VN')} VND`,
        order.customer.name,
        order.customer.email ? (
          <a
            href={`mailto:${order.customer.email}`}
            style={{ color: '#0085E2', textDecoration: 'none' }}
          >
            {order.customer.email}
          </a>
        ) : null,
        order.customer.phone,
        `${order.customer.address}${
          order.customer.district ? `, ${order.customer.district}` : ''
        }${order.customer.province ? `, ${order.customer.province}` : ''}`,
        order.orderAt ? new Date(order.orderAt).toLocaleString('vi-VN') : 'No information',
        order.invoice ? (
          <div>
            <div>Tên công ty: {order.invoice.name}</div>
            <div>Mã số thuế: {order.invoice.taxCode}</div>
            <div>Email: {order.invoice.email}</div>
            <div>Địa chỉ: {order.invoice.address}</div>
          </div>
        ) : (
          'Không có'
        ),
        order.note && order.note.trim() !== '' ? order.note : 'Không có'
      ].filter(Boolean)
    }}
    highlightText="Vui lòng kiểm tra và xử lý đơn hàng trong thời gian sớm nhất."
  >
    <tr>
      <td style={{ padding: 0 }}>
        <MailFooter />
      </td>
    </tr>
  </MailContent>
);
