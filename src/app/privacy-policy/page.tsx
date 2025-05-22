import { privacyPolicyContent } from '@/contents/privacyPolicy';

import Policy from '@/components/templates/Policy/Policy';

const PrivacyPolicyPage = () => {
  return <Policy title="Chính Sách Bảo Mật" content={privacyPolicyContent} />;
};

export default PrivacyPolicyPage;
