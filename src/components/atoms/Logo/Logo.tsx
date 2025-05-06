import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo-light.webp" alt="Logo" width={85} height={76.62} />
    </Link>
  );
};

export default Logo;
