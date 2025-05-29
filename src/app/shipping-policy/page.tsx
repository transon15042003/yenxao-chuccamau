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
    }
  };
}

const ShippingPolicyPage = () => {
  return <Policy title="Chính Sách Vận Chuyển" content={shippingPolicyContent} />;
};

export default ShippingPolicyPage;
