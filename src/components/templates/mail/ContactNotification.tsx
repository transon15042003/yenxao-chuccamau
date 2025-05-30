// import { Box, Email, Item, Span } from 'react-html-email'; */

// import { emailHeadCSS, labelStyle, contentStyle, rootStyle } from './InitSetup';
import { MailContent } from './MailContent';
import { MailFooter } from './MailFooter';

const HEADER_COLOR = '#B4071A';

type ContactFormData = {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message: string;
};

export const ContactNotification = (data: ContactFormData) => (
  <MailContent
    headerColor={HEADER_COLOR}
    title="Tin nhắn liên hệ mới,"
    messages={['Một tin nhắn mới vừa được gửi từ form liên hệ. Thông tin chi tiết như sau:']}
    infoItems={{
      labels: [
        'Họ và tên:',
        'Email:',
        'Số điện thoại:',
        ...(data.subject ? ['Tiêu đề:'] : []),
        'Nội dung:'
      ],
      values: [
        data.name,
        data.email ? (
          <a
            key="email"
            href={`mailto:${data.email}`}
            style={{ color: '#0085E2', textDecoration: 'none' }}
          >
            {data.email}
          </a>
        ) : null,
        data.phone,
        ...(data.subject ? [data.subject] : []),
        <span key="message" style={{ whiteSpace: 'pre-line' }}>
          {data.message}
        </span>
      ].filter(Boolean)
    }}
    highlightText="Vui lòng phản hồi tin nhắn này trong thời gian sớm nhất."
  >
    <tr>
      <td style={{ padding: 0 }}>
        <MailFooter />
      </td>
    </tr>
  </MailContent>
);
