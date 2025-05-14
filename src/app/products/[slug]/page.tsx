import React from 'react';
import { getProductBySlug, getProducts } from 'src/services/product.service';

import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { EmptyDataBlock } from '@/components/molecules/EmptyDataBlock';
import DetailProduct from '@/components/templates/DetailProduct/DetailProduct';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const products = await getProducts({
    page: 1,
    take: 9,
    categorySlug: '',
    ...{}
  });

  if (!product)
    return (
      <div className="flex-1 flex flex-col gap-y-7">
        <div className="max-w-[300px] mx-auto">
          <EmptyDataBlock />
        </div>
      </div>
    );

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Sản phẩm', href: 'products' },
          { label: product.name, href: product.slug }
        ]}
      />
      <DetailProduct product={product} products={products.data} />
    </div>
  );
};

export default ProductDetailPage;
