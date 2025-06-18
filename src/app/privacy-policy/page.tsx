import { privacyPolicyContent } from '@/contents/privacyPolicy';
import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.privacyPolicyPage.title,
    description: StaticSEOContent.privacyPolicyPage.desc,
    keywords: StaticSEOContent.privacyPolicyPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/privacy-policy`
    },
    openGraph: {
      title: StaticSEOContent.privacyPolicyPage.title,
      description: StaticSEOContent.privacyPolicyPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/privacy-policy`,
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

const PrivacyPolicyPage = () => {
  return <Policy title="Chính Sách Bảo Mật" content={privacyPolicyContent} />;
};

export default PrivacyPolicyPage;
