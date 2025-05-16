export const primaryColor = '#3C2552';

export const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
  .social-wrapper{
    display:flex;
    justify-content:center;
    align-items:center;
    column-gap:10.5px;
    padding: 20px 0px;
  }
  img[alt="email-divider"]{
    width:100%;
  }
`.trim();

export const rootStyle = {
  width: '100%',
  background: '#F3F3F3'
};

export const backgroundStyle = {
  backgroundColor: '#FFF',
  width: '100%'
};

export const containerStyle = {
  padding: '10px 0px',
  backgroundColor: '#F3F3F3',
  width: '600px'
};

export const formItemWrapper = {
  width: '100%'
};

export const formItemStyle = {
  width: '50%',
  padding: '10px 0px'
};

export const labelStyle = {
  fontSize: '16px',
  padding: '20px 0',
  fontWeight: '700',
  color: '#2A2A40',
  lineHeight: '25px',
  fontFamily: 'Nunito Sans'
};

export const contentStyle = {
  fontSize: '16px',
  color: '#2A2A40',
  fontWeight: '500',
  lineHeight: '26px',
  fontFamily: 'Nunito Sans'
};

export const highLightStyle = {
  fontSize: '16px',
  color: '#D62C35',
  fontWeight: '500',
  lineHeight: '26px',
  fontFamily: 'Nunito Sans'
};

export const footerContentStyle = {
  fontSize: '14px',
  color: '#2A2A40',
  fontWeight: '500',
  fontFamily: 'Nunito Sans'
};

export const footerTitleStyle = {
  fontSize: '20px',
  color: '#D62C35',
  fontWeight: 'bold',
  fontFamily: 'Nunito Sans',
  lineHeight: '25px'
};
export const footerContactStyle = {
  fontSize: '15px',
  color: '#D62C35',
  fontWeight: '500',
  fontFamily: 'Nunito Sans',
  lineHeight: '25px'
};
export const numberStyle = {
  fontSize: '18px',
  color: '#D62C35',
  fontWeight: 'bold',
  fontFamily: 'Nunito Sans',
  lineHeight: '25px'
};

export const HOST = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const imageUrl = `${HOST}/images`;
export const LOGO_IMAGE_URL = `${imageUrl}/logo-light.webp`;
export const EMAIL_DIVIDER = `${imageUrl}/mail/ic_email_line.png`;
