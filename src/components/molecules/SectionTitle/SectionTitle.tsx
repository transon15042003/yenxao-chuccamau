import React from 'react';

import { SectionHeading } from '@/components/atoms/Heading';
import { SectionSubHeading } from '@/components/atoms/SubHeading';

import { cn } from '@/lib/utils';

type SectionTitleProps = {
  heading: string;
  subHeading?: string;
  className?: string;
  headingClass?: string;
  subHeadingClass?: string;
};

const SectionTitle = ({
  heading,
  subHeading,
  className,
  headingClass,
  subHeadingClass
}: SectionTitleProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <SectionHeading
        className={cn(
          'capitalize font-bold text-center text-5xl text-primary md:mx-0 mx-4 mb-1',
          headingClass
        )}
      >
        {heading}
      </SectionHeading>
      <SectionSubHeading
        className={cn('font-normal text-xl text-typo-1 text-center', subHeadingClass)}
      >
        {subHeading}
      </SectionSubHeading>
    </div>
  );
};

export default SectionTitle;
