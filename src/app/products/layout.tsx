import { StaticSEOContent } from '@/contents/SEO';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.productsPage.title,
    description: StaticSEOContent.productsPage.desc,
    keywords: StaticSEOContent.productsPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products`
    },
    openGraph: {
      title: StaticSEOContent.productsPage.title,
      description: StaticSEOContent.productsPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products`,
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

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductsLayout;
