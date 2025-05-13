import React from 'react';

import { SectionHeading } from '@/components/atoms/Heading';
import { SectionSubHeading } from '@/components/atoms/SubHeading';

type SectionTitleProps = {
  heading: string;
  subHeading?: string;
};

const SectionTitle = ({ heading, subHeading }: SectionTitleProps) => {
  return (
    <div>
      <SectionHeading className="text-center">{heading}</SectionHeading>
      <SectionSubHeading>{subHeading}</SectionSubHeading>
    </div>
  );
};

export default SectionTitle;
