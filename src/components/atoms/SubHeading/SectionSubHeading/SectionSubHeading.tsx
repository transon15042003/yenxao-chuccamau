import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionSubHeadingProps = {
  children: ReactNode;
  className?: string;
};

const SectionSubHeading = ({ children, className }: SectionSubHeadingProps) => {
  return <p className={cn('text-xl text-typo-1 text-center', className)}>{children}</p>;
};

export default SectionSubHeading;
