import { StaticSEOContent } from '@/contents/SEO';
import { shippingPolicyContent } from '@/contents/shippingPolicy';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.deliveryPolicyPage.title,
    description: StaticSEOContent.deliveryPolicyPage.desc,
    keywords: StaticSEOContent.deliveryPolicyPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/shipping-policy`
    },
    openGraph: {
      title: StaticSEOContent.deliveryPolicyPage.title,
      description: StaticSEOContent.deliveryPolicyPage.desc,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/shipping-policy`,
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

const ShippingPolicyPage = () => {
  return <Policy title="Chính Sách Vận Chuyển" content={shippingPolicyContent} />;
};

export default ShippingPolicyPage;
