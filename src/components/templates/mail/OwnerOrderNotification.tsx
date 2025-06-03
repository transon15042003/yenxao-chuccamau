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
    messages={[
      'Một đơn hàng mới vừa được tạo và đã hoàn tất thanh toán. Thông tin chi tiết như sau:'
    ]}
    infoItems={{
      labels: [
        'Mã đơn hàng:',
        'Tổng giá tiền:',
        'Khách hàng:',
        'Email:',
        'Số điện thoại:',
        'Địa chỉ:',
        'Thời gian đặt hàng:',
        'Ghi chú đơn hàng:',
        'Thông tin xuất hóa đơn:'
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
        order.paidAt ? new Date(order.paidAt).toLocaleString('vi-VN') : '',
        order.note || 'Không có',
        order.invoiceInfo ? (
          <div>
            <div>Tên công ty: {order.invoiceInfo.companyName}</div>
            <div>Mã số thuế: {order.invoiceInfo.taxCode}</div>
            <div>Địa chỉ: {order.invoiceInfo.address}</div>
          </div>
        ) : (
          'Không có'
        )
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
