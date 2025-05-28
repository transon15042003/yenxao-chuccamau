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
    }
  };
}

const PaymentPolicyPage = () => {
  return <Policy title="Chính Sách Thanh Toán" content={paymentPolicyContent} />;
};

export default PaymentPolicyPage;
