import '@/styles/globals.css';

import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { CartProvider } from '@/components/providers/CartProvider/CartProvider';
import { MainProvider } from '@/components/providers/MainProvider';
import { MainLayout } from '@/components/templates/MainLayout';

import 'react-toastify/dist/ReactToastify.css';

import { cn } from '@/lib/utils';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Trang chủ | Chuc Ca Mau',
  description: 'seo description'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cn(nunitoSans.variable, 'font-primary customscrollbar')}
        suppressHydrationWarning
      >
        <MainProvider>
          <CartProvider>
            <MainLayout>
              <main>{children}</main>
            </MainLayout>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </CartProvider>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
