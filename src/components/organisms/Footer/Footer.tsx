import Image from 'next/image';
import React from 'react';

import FooterContent from './FooterContent';
import TopHighlight from './TopHighlight';

const Footer = () => {
  return (
    <footer className="w-full text-[#DBDBDB] bg-primary-dark-gradient-360 relative overflow-hidden">
      <TopHighlight />
      <FooterContent />
      {/* Decorative background */}
      <Image
        src="/images/footer/footer-background.png"
        alt="footer background"
        className="absolute w-full bottom-0 left-0 opacity-0 md:opacity-20 z-0 pointer-events-none"
        width={1000}
        height={1000}
      />
    </footer>
  );
};

export default Footer;
