import { returnPolicyContent } from '@/contents/returnPolicy';

import Policy from '@/components/templates/Policy/Policy';

const ReturnPolicyPage = () => {
  return <Policy title="Chính Sách Kiểm Tra & Đổi Trả Hàng Hóa" content={returnPolicyContent} />;
};

export default ReturnPolicyPage;
