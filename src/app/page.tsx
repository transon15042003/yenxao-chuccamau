import { QueryResourceResponse } from '@/types/common';
import { Quote as QuoteType } from '@/types/quote';
import { getProducts } from 'src/services/product.service';
import { getQuotes } from 'src/services/quote.service';

import { Panel } from '@/components/atoms/Panel';
import { AboutSection } from '@/components/organisms/AboutSection';
import { KnowledgeSection } from '@/components/organisms/KnowledgeSection';
import { ProductSection } from '@/components/organisms/ProductSection';
import { QuoteSection } from '@/components/organisms/QuoteSection';

const HomePage = async () => {
  try {
    const quotesResponse: QueryResourceResponse<QuoteType> = await getQuotes({ limit: 5 });
    const bestSellingProducts = await getProducts({
      page: 1,
      take: 8,
      sortField: 'totalSold',
      sortOrder: 'desc'
    });

    // Lấy mảng dữ liệu quotes từ response
    const initialQuotesData = quotesResponse.data;

    return (
      <div className="min-h-[1000px]">
        <Panel />
        <AboutSection />
        <ProductSection initialBestSelling={bestSellingProducts.data} />
        <QuoteSection initialQuotes={initialQuotesData} />
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
