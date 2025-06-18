import { returnPolicyContent } from '@/contents/returnPolicy';
import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.returnPolicyPage.title,
    description: StaticSEOContent.returnPolicyPage.desc,
    keywords: StaticSEOContent.returnPolicyPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/return-policy`
    },
    openGraph: {
      title: StaticSEOContent.returnPolicyPage.title,
      description: StaticSEOContent.returnPolicyPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/return-policy`,
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

const ReturnPolicyPage = () => {
  return <Policy title="Chính Sách Kiểm Tra & Đổi Trả Hàng Hóa" content={returnPolicyContent} />;
};

export default ReturnPolicyPage;
