'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/atoms/Button';

import { cn } from '@/lib/utils';

type LinkButtonProps = {
  className?: string;
  href: string;
  children: React.ReactNode;
};

const LinkButton = ({ href, className, children }: LinkButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className={cn(
        'border-2 border-black text-[#2A2A40] font-semibold py-2 hover:bg-black hover:text-white',
        className
      )}
      fill="outline"
      onClick={() => router.push(href)}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
