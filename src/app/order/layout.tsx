import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

import PaymentPageProvider from './_context/PaymentPageContext';

export const metadata: Metadata = {
  title: StaticSEOContent.orderPage.title,
  description: StaticSEOContent.orderPage.desc,
  keywords: StaticSEOContent.orderPage.keywords,
  alternates: {
    canonical: StaticSEOContent.orderPage.canonicalUrl
  }
};

const PaymentLayout = ({ children }: PropsWithChildren) => {
  return <PaymentPageProvider>{children}</PaymentPageProvider>;
};

export default PaymentLayout;
