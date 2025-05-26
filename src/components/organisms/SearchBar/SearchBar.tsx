import React from 'react';

const SearchBar = () => (
  <div className="relative flex items-center w-full md:w-2/3 max-w-[200px] md:max-w-xs">
    <input
      type="text"
      placeholder="Tìm kiếm"
      className="w-full bg-transparent border-b-2 border-white placeholder:text-white/70 pr-8 pl-2 py-1 focus:outline-none text-sm md:text-base appearance-none rounded-none"
    />
    <svg
      className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>
);

export default SearchBar;
