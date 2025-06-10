import { QueryResourceResponse } from '@/types/common';
import { Product } from '@/types/product';
import { Quote as QuoteType } from '@/types/quote';
import { HttpTypes } from '@medusajs/types';
import { getQuotes } from 'src/services/quote.service';

import { Panel } from '@/components/atoms/Panel';
import { AboutSection } from '@/components/organisms/AboutSection';
import { KnowledgeSection } from '@/components/organisms/KnowledgeSection';
import { ProductSection } from '@/components/organisms/ProductSection';
import { QuoteSection } from '@/components/organisms/QuoteSection';

import { listProducts } from '@/lib/data/products';
import { transformProduct } from '@/lib/medusa-adapter/product';

const HomePage = async () => {
  try {
    const quotesResponse: QueryResourceResponse<QuoteType> = await getQuotes({ limit: 5 });
    // const bestSellingProducts = await getBestSellingProduct();
    const res = await listProducts({
      pageParam: 1,
      countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
      queryParams: {
        limit: 8,
        order: '-created_at',
        offset: 0
      }
    });

    const bestSellingProducts: Product[] = res.response.products.map(
      (el: HttpTypes.StoreProduct) => {
        return transformProduct(el);
      }
    );

    return (
      <div className="min-h-[1000px]">
        <Panel />
        <AboutSection />
        <ProductSection initialBestSelling={bestSellingProducts} />
        <QuoteSection initialQuotes={quotesResponse.data} />
        <KnowledgeSection />
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch quotes on server:', error);

    return (
      <div className="min-h-[1000px]">
        <Panel />
        <AboutSection />
        <ProductSection initialBestSelling={[]} />
        <QuoteSection initialQuotes={[]} errorMessage="Lỗi tải dữ liệu trích dẫn." />
        <KnowledgeSection />
      </div>
    );
  }
};

export default HomePage;
