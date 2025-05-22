import React from 'react';

import { SectionHeading } from '@/components/atoms/Heading';
import { SectionSubHeading } from '@/components/atoms/SubHeading';

type SectionTitleProps = {
  heading: string;
  subHeading?: string;
  className?: string;
};

const SectionTitle = ({ heading, subHeading, className }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <SectionHeading className="capitalize font-bold text-center text-5xl text-primary md:mx-0 mx-4 mb-1">
        {heading}
      </SectionHeading>
      <SectionSubHeading className="font-normal text-xl text-typo-1 text-center">
        {subHeading}
      </SectionSubHeading>
    </div>
  );
};

export default SectionTitle;
