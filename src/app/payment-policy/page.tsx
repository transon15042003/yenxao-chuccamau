import { paymentPolicyContent } from '@/contents/paymentPolicy';

import Policy from '@/components/templates/Policy/Policy';

const PaymentPolicyPage = () => {
  return <Policy title="Chính Sách Thanh Toán" content={paymentPolicyContent} />;
};

export default PaymentPolicyPage;
