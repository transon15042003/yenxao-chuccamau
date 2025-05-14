import { QueryResourceResponse } from '@/types/common';
import { Quote as QuoteType } from '@/types/quote';
import { getQuotes } from 'src/services/quote.service';

import { Panel } from '@/components/atoms/Panel';
import { AboutSection } from '@/components/molecules/AboutSection';
import { KnowledgeSection } from '@/components/molecules/KnowledgeSection';
import { QuoteSection } from '@/components/molecules/QuoteSection';
import { ProductSection } from '@/components/organisms/ProductSection';

const HomePage = async () => {
  try {
    const quotesResponse: QueryResourceResponse<QuoteType> = await getQuotes({ limit: 5 });

    // Lấy mảng dữ liệu quotes từ response
    const initialQuotesData = quotesResponse.data;

    return (
      <div className="min-h-[1000px]">
        <Panel />
        <AboutSection />
        <ProductSection />
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
        <ProductSection />
        {/* Truyền mảng rỗng hoặc thông báo lỗi xuống QuoteSection */}
        <QuoteSection initialQuotes={[]} errorMessage="Lỗi tải dữ liệu trích dẫn." />
        <KnowledgeSection />
      </div>
    );
  }
};

export default HomePage;
