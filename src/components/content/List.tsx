import React from 'react';

interface ListProps {
  type: 'ul' | 'ol';
  values: string[];
  className?: string;
}

const List: React.FC<ListProps> = ({ type, values, className = '' }) => {
  const ListTag = type;

  return (
    <ListTag className={`list-disc ml-6 mt-2 space-y-1 ${className}`}>
      {values.map((value, index) => (
        <li
          className="text-lg leading-[35px]"
          key={index}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ))}
    </ListTag>
  );
};

export default List;
