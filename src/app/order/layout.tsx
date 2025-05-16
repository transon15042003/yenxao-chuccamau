import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

import PaymentPageProvider from './_context/PaymentPageContext';

export const metadata: Metadata = {
  title: 'Đặt hàng',
  description: 'Đặt hàng'
};

const PaymentLayout = ({ children }: PropsWithChildren) => {
  return <PaymentPageProvider>{children}</PaymentPageProvider>;
};

export default PaymentLayout;
