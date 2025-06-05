'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const SearchBar = () => {
  const param = 'search';

  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const initialSearchTerm = searchParams.get(param) || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  useEffect(() => {
    setSearchTerm(searchParams.get(param) || '');
  }, [searchParams]);

  const handleSearch = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const currentParams = new URLSearchParams(Array.from(searchParams.entries()));

    if (searchTerm.trim()) {
      currentParams.set(param, searchTerm.trim());
    } else {
      currentParams.delete(param);
    }

    currentParams.delete('p');

    router.push(`/products?${currentParams.toString()}`);

    if (inputRef.current) {
      inputRef.current.blur(); // Ẩn bàn phím ảo
    }
  };

  return (
    <form onSubmit={handleSearch} method="get" className="relative flex items-center w-full mb-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Tìm kiếm"
        className="w-full bg-transparent border-b-2 border-white placeholder:text-white/70 pr-8 pl-2 py-1 focus:outline-none text-[18px] md:text-base [-webkit-appearance:none] rounded-none"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button type="submit" title="Tìm kiếm">
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
      </button>
    </form>
  );
};

export default SearchBar;
