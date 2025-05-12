import { Panel } from '@/components/atoms/Panel';
import { Certificates } from '@/components/molecules/Certificates';
import Intro from '@/components/organisms/Home/Intro/Intro';

const HomePage = () => (
  <div className="min-h-[1000px]">
    <Panel />
    <Intro />
    <Certificates />
  </div>
);

export default HomePage;
