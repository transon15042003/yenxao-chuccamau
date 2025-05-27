import { StaticSEOContent } from '@/contents/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: StaticSEOContent.productsPage.title,
  description: StaticSEOContent.productsPage.desc,
  keywords: StaticSEOContent.productsPage.keywords,
  alternates: {
    canonical: StaticSEOContent.productsPage.canonicalUrl
  }
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductsLayout;
