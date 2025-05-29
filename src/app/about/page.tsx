import Image from 'next/image';
import { getContactInfo } from 'src/services/contact.service';

import IntroductionContent from '@/components/templates/IntroductionContent/IntroductionContent';

const IntroductionPage = async () => {
  const contactData = await getContactInfo();

  return (
    <div>
      <Image
        src="/images/introduction/bg.png"
        alt="panel"
        width={1500}
        height={600}
        className="w-full h-auto"
      />
      <IntroductionContent contactInfo={contactData} />
    </div>
  );
};

export default IntroductionPage;
