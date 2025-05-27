import { returnPolicyContent } from '@/contents/returnPolicy';
import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export const metadata: Metadata = {
  title: StaticSEOContent.returnPolicyPage.title,
  description: StaticSEOContent.returnPolicyPage.desc,
  keywords: StaticSEOContent.returnPolicyPage.keywords,
  alternates: {
    canonical: StaticSEOContent.returnPolicyPage.canonicalUrl
  }
};

const ReturnPolicyPage = () => {
  return <Policy title="Chính Sách Kiểm Tra & Đổi Trả Hàng Hóa" content={returnPolicyContent} />;
};

export default ReturnPolicyPage;
