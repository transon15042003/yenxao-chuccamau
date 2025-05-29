'use client';

import { useRouter } from 'next/navigation';

import { Pagination } from '@/components/molecules/Pagination/Pagination';

interface BlogPaginationProps {
  pageCount: number;
  currentPage: number;
}

export function BlogPagination({ pageCount, currentPage }: BlogPaginationProps) {
  const router = useRouter();

  const handlePageChange = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    router.push(`/blog?page=${page}`);
  };

  return (
    <Pagination pageCount={pageCount} forcePage={currentPage - 1} onPageChange={handlePageChange} />
  );
}
