import { Category } from '@/types/product';
import { ReactNode } from 'react';

import { CartDrawer } from '@/components/organisms/CartDrawer/CartDrawer';
import Footer from '@/components/organisms/Footer/Footer';
import Header from '@/components/organisms/Header/Header';

import { listCategories } from '@/lib/data/categories';
import { transformCategory } from '@/lib/medusa-adapter/category';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = async ({ children, className }: MainLayoutProps) => {
  const categories = await listCategories();
  const transformedCategories: Category[] = categories.map(transformCategory);

  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      <Header categories={transformedCategories} />
      <main className="flex-1 mt-header-height">{children}</main>
      <Footer />

      {/* CartDrawer */}
      <CartDrawer />
    </div>
  );
};
