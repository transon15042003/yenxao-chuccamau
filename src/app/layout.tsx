import '@/styles/globals.css';

import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import { CartProvider } from '@/components/providers/CartProvider/CartProvider';
import { MainProvider } from '@/components/providers/MainProvider';
import { MainLayout } from '@/components/templates/MainLayout';

import { cn } from '@/lib/utils';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: StaticSEOContent.homePage.title,
  description: StaticSEOContent.homePage.desc,
  keywords: StaticSEOContent.homePage.keywords,
  alternates: {
    canonical: StaticSEOContent.homePage.canonicalUrl
  }
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
          </CartProvider>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
