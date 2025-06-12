import { QueryResourceResponse } from '@/types/common';
import { Quote as QuoteType } from '@/types/quote';
import { getQuotes } from 'src/services/quote.service';

import { Panel } from '@/components/atoms/Panel';
import { AboutSection } from '@/components/organisms/AboutSection';
import { KnowledgeSection } from '@/components/organisms/KnowledgeSection';
import { ProductSection } from '@/components/organisms/ProductSection';
import { QuoteSection } from '@/components/organisms/QuoteSection';

const HomePage = async () => {
  const quotesResponse: QueryResourceResponse<QuoteType> = await getQuotes({ limit: 5 });

  return (
    <div className="min-h-[1000px]">
      <Panel />
      <AboutSection />
      <ProductSection />
      <QuoteSection initialQuotes={quotesResponse.data} />
      <KnowledgeSection />
    </div>
  );
};

export default HomePage;
