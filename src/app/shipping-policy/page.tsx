import { StaticSEOContent } from '@/contents/SEO';
import { shippingPolicyContent } from '@/contents/shippingPolicy';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export const metadata: Metadata = {
  title: StaticSEOContent.deliveryPolicyPage.title,
  description: StaticSEOContent.deliveryPolicyPage.desc,
  keywords: StaticSEOContent.deliveryPolicyPage.keywords,
  alternates: {
    canonical: StaticSEOContent.deliveryPolicyPage.canonicalUrl
  }
};

const ShippingPolicyPage = () => {
  return <Policy title="Chính Sách Vận Chuyển" content={shippingPolicyContent} />;
};

export default ShippingPolicyPage;
