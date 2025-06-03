import { formatDate } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

export type BlogCardProps = {
  thumbnailUrl: string;
  title: string;
  description: string;
  postedDate: string;
  minRead: number;
  href: string;
};

export const BlogCard = ({
  thumbnailUrl,
  title,
  description,
  postedDate,
  minRead,
  href
}: BlogCardProps) => {
  return (
    <div className={cn('w-[379.8px] h-[492px]', 'bg-white rounded-[10px] shadow-sm flex flex-col')}>
      <Link
        href={href}
        className="relative w-full h-[262px] rounded-t-[10px] overflow-hidden block mb-4"
      >
        <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
      </Link>
      <div className="flex flex-col flex-1">
        <div className="text-base text-typo-3 mb-1.5">
          {formatDate(new Date(postedDate), 'dd-MM-yyyy')} &nbsp;•&nbsp; {minRead} min read
        </div>
        <Link href={href} className="hover:underline mb-1.5">
          <h2 className="font-semibold text-[22px] line-clamp-2">{title}</h2>
        </Link>
        <div className="flex-1">
          <p className="text-base text-typo-3 line-clamp-3">{description}</p>
        </div>
        <Link
          href={href}
          className="text-primary font-semibold text-lg flex items-center gap-1 hover:underline"
        >
          Xem Thêm <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
};
