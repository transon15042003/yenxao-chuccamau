import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import Image from 'next/image';
import { getContactInfo } from 'src/services/contact.service';

import IntroductionContent from '@/components/templates/IntroductionContent/IntroductionContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.introductionPage.title,
    description: StaticSEOContent.introductionPage.desc,
    keywords: StaticSEOContent.introductionPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/about`
    }
  };
}

const IntroductionPage = async () => {
  const contactData = await getContactInfo();

  return (
    <div>
      <Image
        src="/images/backgrounds/img_panel.svg"
        alt="panel"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <IntroductionContent contactInfo={contactData} />
    </div>
  );
};

export default IntroductionPage;
