import { ReactNode } from 'react';

import { CartDrawer } from '@/components/organisms/CartDrawer/CartDrawer';
import Footer from '@/components/organisms/Footer/Footer';
import Header from '@/components/organisms/Header/Header';

import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      <Header />
      <main className="flex-1 mt-header-height">{children}</main>
      <Footer />

      {/* CartDrawer */}
      <CartDrawer />
    </div>
  );
};
