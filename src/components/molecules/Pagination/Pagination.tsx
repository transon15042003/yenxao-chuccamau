'use client';
import { ChevronLeftSVG } from '@/svg/ChevronLeftSVG/ChevronLeftSVG';
import React, { useEffect, useState } from 'react';
import type { ReactPaginateProps } from 'react-paginate';
import ReactPaginate from 'react-paginate';
import { useWindowSize } from 'usehooks-ts';

const pageLinkItemClassName =
  'flex h-8 w-8 items-center justify-center font-semibold leading-[0px] text-[#212B36] outline-none text-md hover:text-primary-light';
const nextPreviousItemClassName =
  'flex h-8 w-8 items-center justify-center font-semibold leading-[0px] text-[#CDD5C4] outline-none  bg-white hover:text-primary-light';

export const Pagination = (props: ReactPaginateProps) => {
  const [paginateDisplayConfig, setPaginateDisplayConfig] = useState({
    pageRangeDisplayed: 2,
    marginPagesDisplayed: 2
  });
  const { width: screenWidth } = useWindowSize();

  // for pagination config when screen width changed
  useEffect(() => {
    const config = { pageRangeDisplayed: 2, marginPagesDisplayed: 2 };
    if (screenWidth < 1024) {
      config.pageRangeDisplayed = 1;
      config.marginPagesDisplayed = 1;
    }
    setPaginateDisplayConfig(config);
  }, [screenWidth]);

  return (
    <div className="w-fit border-b border-typo-1">
      <ReactPaginate
        pageRangeDisplayed={paginateDisplayConfig.pageRangeDisplayed}
        marginPagesDisplayed={paginateDisplayConfig.marginPagesDisplayed}
        containerClassName="mt-6 flex justify-center gap-x-2 lg:mt-10 "
        pageLinkClassName={pageLinkItemClassName}
        breakLinkClassName={pageLinkItemClassName}
        activeLinkClassName="text-primary"
        nextLabel={<ChevronLeftSVG className="text-typo-1 rotate-180" />}
        nextLinkClassName={nextPreviousItemClassName}
        previousLabel={<ChevronLeftSVG className="text-typo-1" />}
        previousLinkClassName={nextPreviousItemClassName}
        disabledLinkClassName="cursor-not-allowed !border-transparent !bg-cool-3 opacity-50 "
        {...props}
      />
    </div>
  );
};
