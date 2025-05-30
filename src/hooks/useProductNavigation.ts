import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface UseProductNavigation {
  navigateToProductDetail: (slug: string) => void;
  isNavigating: boolean;
}

const useProductNavigation = (): UseProductNavigation => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const navigateToProductDetail = (slug: string) => {
    setIsNavigating(true);
    router.push(`/products/${slug}`);
  };

  return { navigateToProductDetail, isNavigating };
};

export default useProductNavigation;
