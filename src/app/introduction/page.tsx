import Image from 'next/image';

import IntroductionContent from '@/components/templates/IntroductionContent/IntroductionContent';

const IntroductionPage = () => (
  <div>
    <Image
      src="/images/backgrounds/img_panel.svg"
      alt="panel"
      width={100}
      height={100}
      className="w-full h-auto"
    />
    <IntroductionContent />
  </div>
);

export default IntroductionPage;
