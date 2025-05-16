import React from 'react';

interface HeadingProps {
  value: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ value, as = 'b', className = '' }) => {
  const Tag = as;

  return <Tag className={className}>{value}</Tag>;
};

export default Heading;
