import React from 'react';

interface HeadingProps {
  value: string;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ value, as = 'b', className = '' }) => {
  const Tag = as;

  return <Tag className={className}>{value}</Tag>;
};

export default Heading;
