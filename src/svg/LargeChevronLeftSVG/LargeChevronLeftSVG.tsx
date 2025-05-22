import React from 'react';

export const LargeChevronLeftSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      width="22"
      height="43"
      className={className}
      viewBox="0 0 22 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 1L1 21.4268L21 41.8535"
        stroke="currentColor"
        // stroke="#424B5A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
