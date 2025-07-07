import { paymentPolicyContent } from '@/contents/paymentPolicy';
import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.paymentPolicyPage.title,
    description: StaticSEOContent.paymentPolicyPage.desc,
    keywords: StaticSEOContent.paymentPolicyPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/payment-policy`
    },
    openGraph: {
      title: StaticSEOContent.paymentPolicyPage.title,
      description: StaticSEOContent.paymentPolicyPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/payment-policy`,
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

const PaymentPolicyPage = () => {
  return <Policy title="Chính Sách Thanh Toán" content={paymentPolicyContent} />;
};

export default PaymentPolicyPage;
