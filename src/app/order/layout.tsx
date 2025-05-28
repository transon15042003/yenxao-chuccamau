import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
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
  return <PaymentPageProvider>{children}</PaymentPageProvider>;
};

export default PaymentLayout;
