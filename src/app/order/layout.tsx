import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import React, { PropsWithChildren } from 'react';

import PaymentPageProvider from './_context/PaymentPageContext';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.orderPage.title,
    description: StaticSEOContent.orderPage.desc,
    keywords: StaticSEOContent.orderPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/order`
    },
    openGraph: {
      title: StaticSEOContent.orderPage.title,
      description: StaticSEOContent.orderPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/order`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/open_graph_img.png`,
          width: 1200,
          height: 630
        }
      ],
      type: 'website',
      siteName: 'Yến sào Chúc Cà Mau'
    }
  };
}

const PaymentLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <PaymentPageProvider>{children}</PaymentPageProvider>
    </ReCaptchaProvider>
  );
};

export default PaymentLayout;
