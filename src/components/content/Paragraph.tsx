import React from 'react';

interface ParagraphProps {
  value: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ value, className = '' }) => {
  return <p className={`mt-2 ${className}`} dangerouslySetInnerHTML={{ __html: value }} />;
};

export default Paragraph;
