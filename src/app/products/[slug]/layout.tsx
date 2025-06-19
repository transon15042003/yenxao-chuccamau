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

  const {
    title = '',
    keywords = '',
    description = '',
    ['canonical URL']: canonicalUrl = ''
  } = originProduct.metadata;

  return {
    title: title,
    keywords: keywords,
    description: description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      images:
        originProduct.images && originProduct.images?.length > 0
          ? [
              {
                url: originProduct.thumbnail,
                width: 1200,
                height: 630
              },
              ...originProduct.images.map((el) => ({
                url: el.url,
                width: 1200,
                height: 630
              }))
            ]
          : [
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
