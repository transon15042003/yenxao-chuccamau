import { Box, Image, Item } from 'react-html-email';

import { primaryColor } from './InitSetup';
import { backgroundStyle, EMAIL_DIVIDER, LOGO_IMAGE_URL } from './InitSetup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MailContent = ({ children }: any) => {
  return (
    <Box style={backgroundStyle}>
      <Item style={{ padding: '20px 30px' }}>
        <Box style={{ width: '100%' }}>
          {/* image */}
          <Item align="center" style={{ background: '#000000' }}>
            <Image alt="email-image" src={LOGO_IMAGE_URL} width={193} height={84.68} />
          </Item>
          {/* divider */}
          <Item align="center" style={{ padding: '20px 0px' }}>
            <Image
              alt="email-divider"
              height={10}
              src={EMAIL_DIVIDER}
              width={600}
              style={{ width: '100%' }}
            />
          </Item>
          {/* form content */}
          {children}
        </Box>
      </Item>
      <Item style={{ padding: '3px 0px', background: primaryColor }} />
    </Box>
  );
};
