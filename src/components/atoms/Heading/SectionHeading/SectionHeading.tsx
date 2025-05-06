import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return <h2 className={cn('text-2xl font-bold text-primary', className)}>{children}</h2>;
};

export default SectionHeading;
