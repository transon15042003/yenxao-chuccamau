/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

// import { Box, Item, Span } from 'react-html-email';
import { AppConfig } from 'src/AppConfig';

import { footerContentStyle } from './InitSetup';
import {
  FACEBOOK_IMAGE_URL,
  INSTAGRAM_IMAGE_URL,
  LINKEDIN_IMAGE_URL,
  TIKTOK_IMAGE_URL,
  PHONE_IMAGE_URL
} from './InitSetup';

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
            {AppConfig.address}
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
              href={`tel:${AppConfig.phone}`}
              style={{
                color: '#3A3A3A',
                textDecoration: 'none'
              }}
            >
              <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }}>
                <img
                  src={PHONE_IMAGE_URL}
                  alt="Phone"
                  width={20}
                  height={20}
                  style={{ verticalAlign: 'middle' }}
                />
              </span>
              <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}>
                {AppConfig.phone}
              </span>
            </a>
          </td>
          <td style={{ textAlign: 'right', padding: '8px 24px 20px 0' }}>
            <div style={{ display: 'inline-block' }}>
              <a href="/" style={{ margin: '0 6px', display: 'inline-block' }}>
                <img
                  src={FACEBOOK_IMAGE_URL}
                  alt="Facebook"
                  width={25}
                  height={25}
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
              <a href="/" style={{ margin: '0 6px', display: 'inline-block' }}>
                <img
                  src={INSTAGRAM_IMAGE_URL}
                  alt="Instagram"
                  width={25}
                  height={25}
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
              <a href="/" style={{ margin: '0 6px', display: 'inline-block' }}>
                <img
                  src={LINKEDIN_IMAGE_URL}
                  alt="LinkedIn"
                  width={25}
                  height={25}
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
              <a href="/" style={{ margin: '0 6px', display: 'inline-block' }}>
                <img
                  src={TIKTOK_IMAGE_URL}
                  alt="Tiktok"
                  width={25}
                  height={25}
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
