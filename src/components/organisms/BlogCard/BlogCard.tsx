import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    <div className="bg-white rounded shadow-sm flex flex-col">
      <Link href={href} className="relative w-full h-48 rounded-t-[10px] overflow-hidden block">
        <Image src={thumbnailUrl} alt={title} fill className="object-cover h-[260px] w-[380px]" />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-gray-500 mb-1">
          {new Date(postedDate).toLocaleDateString('vi-VN')} &nbsp;•&nbsp; {minRead} min read
        </div>
        <Link href={href} className="hover:underline">
          <h2 className="font-semibold text-base mb-2 line-clamp-2">{title}</h2>
        </Link>
        <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-2">{description}</p>
        <Link
          href={href}
          className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline mt-auto"
        >
          Xem Thêm <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
};
