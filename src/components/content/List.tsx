import React from 'react';

interface ListProps {
  type: 'ul' | 'ol';
  values: string[];
}

const List: React.FC<ListProps> = ({ type, values }) => {
  const ListTag = type;

  return (
    <ListTag className={`list-disc ml-6 mt-2 space-y-1`}>
      {values.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ListTag>
  );
};

export default List;
