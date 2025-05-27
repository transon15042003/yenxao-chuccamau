import { paymentPolicyContent } from '@/contents/paymentPolicy';
import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export const metadata: Metadata = {
  title: StaticSEOContent.paymentPolicyPage.title,
  description: StaticSEOContent.paymentPolicyPage.desc,
  keywords: StaticSEOContent.paymentPolicyPage.keywords,
  alternates: {
    canonical: StaticSEOContent.paymentPolicyPage.canonicalUrl
  }
};

const PaymentPolicyPage = () => {
  return <Policy title="Chính Sách Thanh Toán" content={paymentPolicyContent} />;
};

export default PaymentPolicyPage;
