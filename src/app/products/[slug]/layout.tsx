import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Chi tiết sản phẩm',
  description: 'Chi tiết sản phẩm'
};

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductDetailLayout;
