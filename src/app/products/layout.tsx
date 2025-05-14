import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Sản phẩm'
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductsLayout;
