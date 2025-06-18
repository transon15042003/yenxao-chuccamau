import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
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
    },
    openGraph: {
      title: StaticSEOContent.introductionPage.title,
      description: StaticSEOContent.introductionPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/about`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/open_graph_img.png`,
          width: 1200,
          height: 630
        }
      ],
      type: 'website',
      siteName: 'Yến sào Chúc Cà Mau'
    }
  };
}

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
      <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
        <IntroductionContent contactInfo={contactData} />
      </ReCaptchaProvider>
    </div>
  );
};

export default IntroductionPage;
