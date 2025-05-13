import { Panel } from '@/components/atoms/Panel';
import { Certificates } from '@/components/molecules/Certificates';
import Intro from '@/components/organisms/Home/Intro/Intro';
import { ProductSection } from '@/components/organisms/ProductSection';

const HomePage = () => (
  <div className="min-h-[1000px]">
    <Panel />
    <Intro />
    <Certificates />
    <ProductSection />
  </div>
);

export default HomePage;
