import { dynamicProductCateContent, StaticSEOContent } from '@/contents/SEO';
import { PaginationMetadata } from '@/types/common';
import type { Category, CategorySlug, Product, ProductSort } from '@/types/product';
import { HttpTypes } from '@medusajs/types';
import { Metadata } from 'next';

import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { ProductCategorySelect } from '@/components/molecules/ProductCategorySelect';
import { ProductCategorySidebar } from '@/components/organisms/ProductCategorySidebar';

import { listCategories } from '@/lib/data/categories';
import { listProducts } from '@/lib/data/products';
import { transformCategory } from '@/lib/medusa-adapter/category';
import { transformProduct } from '@/lib/medusa-adapter/product';

import ProductArea from './_components/ProductArea';

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;

  const defaultMeta = {
    title: StaticSEOContent.productsPage.title,
    description: StaticSEOContent.productsPage.desc,
    keywords: StaticSEOContent.productsPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products`
    }
  };

  let cate: string;
  if (Array.isArray(params.c)) {
    cate = params.c[0];
  } else if (typeof params.c === 'string') {
    cate = params.c;
  } else {
    cate = '';
  }

  if (cate && dynamicProductCateContent[cate]) {
    return {
      title: dynamicProductCateContent[cate].title,
      description: dynamicProductCateContent[cate].desc,
      keywords: dynamicProductCateContent[cate].keywords,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/products/${cate}`
      }
    };
  }

  return defaultMeta;
}

type PageNumber = number;

export type ProductPageParams = {
  p: PageNumber;
  c: CategorySlug;
  s: ProductSort;
  search: string;
};

// const getSortByOptionValue = (
//   value: string
// ): { sortField?: keyof Product; sortOrder?: 'asc' | 'desc' } => {
//   if (value === 'price-asc') {
//     return { sortField: 'price', sortOrder: 'asc' };
//   }
//   if (value === 'price-desc') {
//     return { sortField: 'price', sortOrder: 'desc' };
//   }

//   return { sortField: 'createdAt', sortOrder: 'desc' };
// };

export default async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<ProductPageParams>;
}) {
  const { c, search, s, p } = await searchParams;

  const sortedCategories = await listCategories();
  const transformedCategories: Category[] = sortedCategories.map(transformCategory);
  const cateId = transformedCategories.find((el: Category) => el.slug === c)?.id;
  let order = '-created_at';
  if (s) {
    switch (s) {
      case 'newest':
        order = '-created_at';
        break;
      case 'oldest':
        order = 'created_at';
        break;
      case 'title':
        order = 'title';
        break;
    }
  }

  const res = await listProducts({
    pageParam: p ?? 1,
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: {
      limit: 10,
      order: order.toString(),
      category_id: cateId,
      q: search
    }
  });

  const products: Product[] = res.response.products.map((el: HttpTypes.StoreProduct) => {
    return transformProduct(el);
  });

  const metadata: PaginationMetadata = {
    total: res.response.count,
    page: 1,
    take: 10,
    totalPages: Math.ceil(res.response.count / 10)
  };

  // const metadata = products.metadata;

  const categoryOptions = transformedCategories.map((cat) => ({
    value: cat.slug,
    label: cat.name
  }));

  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: 'Sản phẩm', href: '/products' }]} />
      <div className="mt-8 mx-4 lg:max-w-[83%] lg:mx-auto 2xl:max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="xl:w-[20%] relative z-[2]">
            <div className="hidden lg:block">
              <ProductCategorySidebar categories={transformedCategories} />
            </div>
            <div className="block lg:hidden">
              <ProductCategorySelect options={categoryOptions} value={c} />
            </div>
          </div>
          <div className="z-[1]">
            <ProductArea products={products} metadata={metadata} />
          </div>
        </div>
      </div>
    </div>
  );
}
