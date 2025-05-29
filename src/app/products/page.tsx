import { dynamicProductCateContent, StaticSEOContent } from '@/contents/SEO';
import type { CategorySlug, Product, ProductSort } from '@/types/product';
import { Metadata } from 'next';
import { getCategories, getProducts } from 'src/services/product.service';

import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { ProductCategorySelect } from '@/components/molecules/ProductCategorySelect';
import { ProductCategorySidebar } from '@/components/organisms/ProductCategorySidebar';

import ProductArea from './_components/ProductArea';

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;

  let cate: string;
  if (Array.isArray(params.c)) {
    cate = params.c[0];
  } else if (typeof params.c === 'string') {
    cate = params.c;
  } else {
    cate = '';
  }

  if (cate) {
    return {
      title: dynamicProductCateContent[cate].title,
      description: dynamicProductCateContent[cate].desc,
      keywords: dynamicProductCateContent[cate].keywords,
      alternates: {
        canonical: dynamicProductCateContent[cate].canonicalUrl
      }
    };
  } else {
    return {
      title: StaticSEOContent.productsPage.title,
      description: StaticSEOContent.productsPage.desc,
      keywords: StaticSEOContent.productsPage.keywords,
      alternates: {
        canonical: StaticSEOContent.productsPage.canonicalUrl
      }
    };
  }
}

type PageNumber = number;

export type ProductPageParams = {
  p: PageNumber;
  c: CategorySlug;
  s: ProductSort;
  search: string;
};

const getSortByOptionValue = (
  value: string
): { sortField?: keyof Product; sortOrder?: 'asc' | 'desc' } => {
  if (value === 'price-asc') {
    return { sortField: 'price', sortOrder: 'asc' };
  }
  if (value === 'price-desc') {
    return { sortField: 'price', sortOrder: 'desc' };
  }

  return { sortField: 'createdAt', sortOrder: 'desc' };
};

export default async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<ProductPageParams>;
}) {
  const { c, s, p, search } = await searchParams;

  const categories = await getCategories();
  const products = await getProducts({
    page: p || 1,
    take: 9,
    categorySlug: c,
    search: search,
    ...(s ? getSortByOptionValue(s) : {})
  });

  const metadata = products.metadata;

  const categoryOptions = categories.map((cat) => ({
    value: cat.slug,
    label: cat.name
  }));

  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: 'Sản phẩm', href: '/products' }]} />
      <div className="mt-8 mx-4 lg:max-w-[83%] lg:mx-auto 2xl:max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="xl:w-[20%]">
            <div className="hidden lg:block">
              <ProductCategorySidebar categories={categories} />
            </div>
            <div className="block lg:hidden">
              <ProductCategorySelect options={categoryOptions} value={c} />
            </div>
          </div>
          <ProductArea products={products.data} metadata={metadata} />
        </div>
      </div>
    </div>
  );
}
