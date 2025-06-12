import { Product } from '@/types/product';

import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';

import { listCollections } from '@/lib/data/collections';
import { listProducts } from '@/lib/data/products';
import { transformProduct } from '@/lib/medusa-adapter/product';

import LinkButton from './LinkButton';
import ProductList from './ProductList';

const HIGHLIGHT_PRODUCT_HANDLE = 'san-pham-noi-bat';

export const ProductSection = async () => {
  const listCollectionResponse = await listCollections();
  const highlightCollection = listCollectionResponse.collections?.find(
    (el) => el.handle === HIGHLIGHT_PRODUCT_HANDLE
  );

  const hightlightProductsResponse = await listProducts({
    pageParam: 1,
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
    queryParams: {
      limit: 999,
      offset: 0,
      collection_id: highlightCollection?.id
    }
  });

  const bestSellingProducts: Product[] =
    hightlightProductsResponse.response.products.map(transformProduct);

  return (
    <div
      className={`w-full py-[50px] bg-[url('/images/backgrounds/newfeed.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center`}
      style={{
        filter: 'brightness(1.1)'
      }}
    >
      <SectionTitle className="mb-2" heading="Sản phẩm nổi bật" />
      {/* <ChoiceGroup /> */} {/* please un-comment this line in release version */}
      <ProductList products={bestSellingProducts} />
      <LinkButton href="/products">Xem tất cả sản phẩm</LinkButton>
    </div>
  );
};
