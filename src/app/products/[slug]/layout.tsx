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
    }
  };
}

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductDetailLayout;
