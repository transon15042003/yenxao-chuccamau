import { dynamicProductContent } from '@/contents/SEO';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const seoContent = await dynamicProductContent(slug);

  return {
    title: seoContent.title,
    description: seoContent.desc,
    keywords: seoContent.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products/${slug}`
    },
    openGraph: {
      title: seoContent.title,
      description: seoContent.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products/${slug}`,
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

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductDetailLayout;
