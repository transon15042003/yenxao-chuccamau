import { shippingPolicyContent } from '@/contents/shippingPolicy';

import Policy from '@/components/templates/Policy/Policy';

const ShippingPolicyPage = () => {
  return <Policy title="Chính Sách Vận Chuyển" content={shippingPolicyContent} />;
};

export default ShippingPolicyPage;
