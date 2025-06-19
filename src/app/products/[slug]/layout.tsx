import { HttpTypes } from '@medusajs/types';
import { Metadata } from 'next';
import React from 'react';

import { listProducts } from '../../../lib/data/products';

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const originProduct: HttpTypes.StoreProduct = await listProducts({
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: { handle: slug }
  }).then(({ response }) => response.products[0]);

  return {
    title: originProduct.metadata.title,
    keywords: originProduct.metadata.keywords,
    description: originProduct.metadata.description,
    alternates: {
      canonical: originProduct.metadata?.['canonical URL']
    },
    openGraph: {
      title: originProduct.metadata.title,
      description: originProduct.metadata.description,
      url: originProduct.metadata?.['canonical URL'],
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
