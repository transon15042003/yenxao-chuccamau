/* eslint-disable @next/next/no-img-element */

import { AppConfig } from 'src/AppConfig';

import { footerContentStyle } from './InitSetup';
import { PHONE_IMAGE_URL } from './InitSetup';

// import {
//  FACEBOOK_IMAGE_URL,
//  INSTAGRAM_IMAGE_URL,
//  LINKEDIN_IMAGE_URL,
//  TIKTOK_IMAGE_URL,
//  PHONE_IMAGE_URL
//} from './InitSetup';

// interface SocialMedia {
//   name: string;
//   url: string;
//   imageUrl: string;
// }

// const socialMedias: SocialMedia[] = [
//   {
//     name: 'Facebook',
//     url: '/',
//     imageUrl: FACEBOOK_IMAGE_URL
//   },
//   {
//     name: 'Instagram',
//     url: '/',
//     imageUrl: INSTAGRAM_IMAGE_URL
//   },
//   {
//     name: 'LinkedIn',
//     url: '/',
//     imageUrl: LINKEDIN_IMAGE_URL
//   },
//   {
//     name: 'Tiktok',
//     url: '/',
//     imageUrl: TIKTOK_IMAGE_URL
//   }
// ];

export const MailFooter = () => {
  return (
    <table
      style={{
        background: '#F5F5F5',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        padding: '10px 12px'
      }}
    >
      <tbody>
        {/* Địa chỉ công ty */}
        <tr style={footerContentStyle}>
          <td
            colSpan={2}
            style={{ color: '#707070', fontSize: 13, textAlign: 'center', padding: '8px 0 0 0' }}
          >
            <a
              href={AppConfig.addressURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#707070', textDecoration: 'none' }}
            >
              {AppConfig.address}
            </a>
          </td>
        </tr>
        {/* Line chia đôi */}
        <tr>
          <td colSpan={2} style={{ padding: '8px 12px' }}>
            <div style={{ borderTop: '1px solid #E0E0E0', width: '100%', margin: '0 auto' }}></div>
          </td>
        </tr>
        {/* Dòng cuối: phone + social */}
        <tr>
          <td style={{ textAlign: 'center', padding: '8px 0 20px 12px' }}>
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
              <span
                style={{
                  display: 'inline-block',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  verticalAlign: 'middle',
                  marginLeft: 4
                }}
              >
                {AppConfig.phone}
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
