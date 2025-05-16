/* eslint-disable @next/next/no-page-custom-font */
import { Order } from '@/types/order';
import { Box, Email, Item } from 'react-html-email';

import { emailHeadCSS, containerStyle } from './InitSetup';
import { rootStyle } from './InitSetup';
import { MailContent } from './MailContent';
import { MailFooter } from './MailFooter';

export const CustomerOrderNotification = (orderCustomer: Order['customer']) => {
  return (
    <Box align="center" style={rootStyle}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
        rel="stylesheet"
      />

      <Item style={{ paddingTop: '10px' }}>
        <Box align="center" style={containerStyle}>
          <Item>
            <Email align="center" headCSS={emailHeadCSS} title="Thông báo đơn hàng">
              <MailContent>
                <Item align="center">
                  Đặt hàng thành công, chúng tôi sẽ liên hệ lại bạn trong thời gian sớm nhất.
                  <br />
                  Cảm ơn bạn đã đặt hàng.
                  <br />
                  {JSON.stringify(orderCustomer)}
                </Item>
              </MailContent>
              {/* footer */}
              <MailFooter />
            </Email>
          </Item>
        </Box>
      </Item>
    </Box>
  );
};
