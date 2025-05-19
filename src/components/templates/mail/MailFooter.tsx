import { Box, Item, Span } from 'react-html-email';

import { footerContactStyle, footerContentStyle, footerTitleStyle, numberStyle } from './InitSetup';

const firstOffice = {
  brandName: 'Cửa hàng 1',
  address: '123 Main St, Anytown, USA',
  phoneNumber: '123-456-7890'
};

export const MailFooter = () => {
  return (
    <Box align={'center'}>
      <Item align="center" style={{ padding: '20px 40px 0px 40px' }}></Item>

      <Item align="center">
        <Span style={footerTitleStyle}>{firstOffice.brandName?.toUpperCase()}</Span>
      </Item>
      <Item align="center" style={{ padding: '10px 0px' }}>
        <Span style={footerContactStyle}>{firstOffice?.address}</Span>
      </Item>
      <Item align="center" style={{ padding: '1px 0px' }}>
        <Span style={numberStyle}>{firstOffice?.phoneNumber}</Span>
      </Item>
      <Item align="center" style={{ padding: '10px 0px 0px 0px' }}></Item>
      <Item align="center" style={{ padding: '0px 0px 20px 0px' }}>
        <Span
          style={{
            ...footerContentStyle,
            color: '#707070',
            fontWeight: 'normal'
          }}
        >
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </Span>
      </Item>
    </Box>
  );
};
