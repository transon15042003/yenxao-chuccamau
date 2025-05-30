import React from 'react';
import { getCategoryBySlug, getProductBySlug, getProducts } from 'src/services/product.service';

import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { EmptyDataBlock } from '@/components/molecules/EmptyDataBlock';
import { DetailProductProvider } from '@/components/providers/DetailProductProvider/DetailProductProvider';
import DetailProduct from '@/components/templates/DetailProduct/DetailProduct';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const products = await getProducts({
    page: 1,
    isAll: true
  });
  const category = await getCategoryBySlug(product?.categories[0] ?? '');

  if (!product)
    return (
      <div className="flex-1 flex flex-col gap-y-7">
        <div className="max-w-[300px] mx-auto">
          <EmptyDataBlock />
        </div>
      </div>
    );

  return (
    <DetailProductProvider product={product} products={products.data}>
      <div>
        <Breadcrumb
          disableLastChild={true}
          items={[
            { label: 'Sản phẩm', href: '/products' },
            ...(category ? [{ label: category.name, href: `/products?c=${category.slug}` }] : []),
            { label: product.name, href: product.slug }
          ]}
        />
        <DetailProduct />
      </div>
    </DetailProductProvider>
  );
};

export default ProductDetailPage;
