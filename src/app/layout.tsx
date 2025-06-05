import '@/styles/globals.css';

import { StaticSEOContent } from '@/contents/SEO';
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.homePage.title,
    description: StaticSEOContent.homePage.desc,
    keywords: StaticSEOContent.homePage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    }
  };
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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
