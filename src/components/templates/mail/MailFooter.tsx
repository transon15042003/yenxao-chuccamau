// import { Box, Item, Span } from 'react-html-email';

import Facebook from '@/svg/EmailTemplateSVG/Facebook';
import Instagram from '@/svg/EmailTemplateSVG/Instagram';
import LinkedIn from '@/svg/EmailTemplateSVG/Linkedin';
import Phone from '@/svg/EmailTemplateSVG/Phone';
import Tiktok from '@/svg/EmailTemplateSVG/Tiktok';

import { footerContentStyle } from './InitSetup';
export const MailFooter = () => {
  return (
    <table
      style={{
        background: '#F5F5F5',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        padding: '10px 32px'
      }}
    >
      <tbody>
        {/* Địa chỉ công ty */}
        <tr style={footerContentStyle}>
          <td
            colSpan={2}
            style={{ color: '#707070', fontSize: 13, textAlign: 'center', padding: '8px 0 0 0' }}
          >
            Pasteur Tower, 139 Pasteur, Q.3, TP.HCM, Việt Nam.
            <br />
            VIT Tower, tầng 17, 519 Kim Mã, Ba Đình, Hà Nội, Việt Nam.
            <br />
            CareerViet.vn - Mang việc làm quốc tế chuyên biệt cho người Việt tìm việc.
          </td>
        </tr>
        {/* Line chia đôi */}
        <tr>
          <td colSpan={2} style={{ padding: '8px 24px' }}>
            <div style={{ borderTop: '1px solid #E0E0E0', width: '100%', margin: '0 auto' }}></div>
          </td>
        </tr>
        {/* Dòng cuối: phone + social */}
        <tr>
          <td style={{ textAlign: 'left', padding: '8px 0 20px 24px' }}>
            <a
              href="tel:02838221234"
              style={{
                color: '#3A3A3A',
                textDecoration: 'none'
              }}
            >
              <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }}>
                <Phone />
              </span>
              <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}>
                (028) 3822 1234
              </span>
            </a>
          </td>
          <td style={{ textAlign: 'right', padding: '8px 24px 20px 0' }}>
            <div style={{ display: 'inline-block' }}>
              <a href="https://facebook.com" style={{ margin: '0 6px', display: 'inline-block' }}>
                <Facebook />
              </a>
              <a href="https://instagram.com" style={{ margin: '0 6px', display: 'inline-block' }}>
                <Instagram />
              </a>
              <a href="https://linkedin.com" style={{ margin: '0 6px', display: 'inline-block' }}>
                <LinkedIn />
              </a>
              <a href="https://tiktok.com" style={{ margin: '0 6px', display: 'inline-block' }}>
                <Tiktok />
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
