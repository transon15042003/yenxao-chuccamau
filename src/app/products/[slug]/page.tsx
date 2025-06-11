import React from 'react';

import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { EmptyDataBlock } from '@/components/molecules/EmptyDataBlock';
import { DetailProductProvider } from '@/components/providers/DetailProductProvider/DetailProductProvider';
import DetailProduct from '@/components/templates/DetailProduct/DetailProduct';

import { listCategories } from '@/lib/data/categories';
import { listProducts } from '@/lib/data/products';
import { transformCategory } from '@/lib/medusa-adapter/category';
import { transformProduct } from '@/lib/medusa-adapter/product';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// export async function generateStaticParams() {
//   const listProductsResponse = await listProducts({
//     pageParam: 1,
//     queryParams: { limit: 9999 },
//     countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE
//   });
//   const products = listProductsResponse.response.products.map(transformProduct);

//   return products.map((product) => ({
//     slug: product.slug
//   }));
// }

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { slug } = await params;
  const originProduct = await listProducts({
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: { handle: slug }
  }).then(({ response }) => response.products[0]);
  const product = transformProduct(originProduct);

  const originCategories = await listCategories();
  const categories = originCategories.map(transformCategory);
  const category = categories.find((category) => category.slug === slug);

  const listProductsByCategory = await listProducts({
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: {
      limit: 9999,
      offset: 0,
      order: '-created_at',
      category_id: category?.id
    }
  });
  const relatedProducts = listProductsByCategory.response.products.map(transformProduct);

  if (!product)
    return (
      <div className="flex-1 flex flex-col gap-y-7">
        <div className="max-w-[300px] mx-auto">
          <EmptyDataBlock />
        </div>
      </div>
    );

  return (
    <DetailProductProvider product={product}>
      <div>
        <Breadcrumb
          disableLastChild={true}
          items={[
            { label: 'Sản phẩm', href: '/products' },
            ...(category ? [{ label: category.name, href: `/products?c=${category.slug}` }] : []),
            { label: product.name, href: product.slug }
          ]}
        />
        <div className="flex justify-center">
          <DetailProduct relatedProducts={relatedProducts} />
        </div>
      </div>
    </DetailProductProvider>
  );
};

export default ProductDetailPage;
