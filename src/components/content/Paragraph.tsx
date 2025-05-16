import React from 'react';

interface ParagraphProps {
  value: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ value }) => {
  return <p className="mt-2">{value}</p>;
};

export default Paragraph;
