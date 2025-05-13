import { Panel } from '@/components/atoms/Panel';
import { AboutSection } from '@/components/molecules/AboutSection';
import { KnowledgeSection } from '@/components/molecules/KnowledgeSection';
import { QuoteSection } from '@/components/molecules/QuoteSection';
import { ProductSection } from '@/components/organisms/ProductSection';

const HomePage = () => (
  <div className="min-h-[1000px]">
    <Panel />
    <AboutSection />
    <ProductSection />
    <QuoteSection />
    <KnowledgeSection />
  </div>
);

export default HomePage;
