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
