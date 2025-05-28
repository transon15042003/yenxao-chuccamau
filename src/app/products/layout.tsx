import { StaticSEOContent } from '@/contents/SEO';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.productsPage.title,
    description: StaticSEOContent.productsPage.desc,
    keywords: StaticSEOContent.productsPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products`
    }
  };
}

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductsLayout;
