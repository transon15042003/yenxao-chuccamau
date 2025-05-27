import { privacyPolicyContent } from '@/contents/privacyPolicy';
import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';

import Policy from '@/components/templates/Policy/Policy';

export const metadata: Metadata = {
  title: StaticSEOContent.privacyPolicyPage.title,
  description: StaticSEOContent.privacyPolicyPage.desc,
  keywords: StaticSEOContent.privacyPolicyPage.keywords,
  alternates: {
    canonical: StaticSEOContent.privacyPolicyPage.canonicalUrl
  }
};

const PrivacyPolicyPage = () => {
  return <Policy title="Chính Sách Bảo Mật" content={privacyPolicyContent} />;
};

export default PrivacyPolicyPage;
