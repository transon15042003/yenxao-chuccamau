import { dynamicProductContent } from '@/contents/SEO';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const seoContent = await dynamicProductContent(params.slug);

  return {
    title: seoContent.title,
    description: seoContent.desc,
    keywords: seoContent.keywords,
    alternates: {
      canonical: seoContent.canonicalUrl
    }
  };
}

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ProductDetailLayout;
