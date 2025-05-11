import Link from 'next/link';
import React from 'react';

type NavigationProps = {
  className?: string;
};

const NavigationMenu = (props: NavigationProps) => {
  return (
    <div className={`${props.className} flex items-center gap-4`}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/#">Item (atom)</Link>
      <Link href="/#">Item with dropdown (molecule)</Link>
    </div>
  );
};

export default NavigationMenu;
