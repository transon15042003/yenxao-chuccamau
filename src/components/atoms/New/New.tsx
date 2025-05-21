import { ArrowRightSVG } from '@/svg/ArrowRightSVG/ArrowRightSVG';
import Image from 'next/image';
import Link from 'next/link'; // Import Link từ next/link cho việc định tuyến
import React from 'react';

// Định nghĩa kiểu props cho component New
type NewProps = {
  imageUrl: string; // Đường dẫn đến ảnh bài viết
  date: string; // Ngày đăng
  readTime: string; // Thời gian đọc ước tính (ví dụ: "5 min read")
  title: string; // Tiêu đề bài viết
  description: string; // Mô tả ngắn hoặc đoạn trích
  linkUrl: string; // URL mà liên kết "Xem thêm" sẽ dẫn tới
  className?: string; // Class tùy chọn cho container chính của component
};

export const New = (props: NewProps) => {
  // Định nghĩa màu sắc tùy chỉnh dựa trên giá trị hex
  const metadataColor = 'text-[#5E6971]'; // Màu cho ngày và thời gian đọc, mô tả
  const titleColor = 'text-[#121314]'; // Màu cho tiêu đề

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden shadow-md my-1
                 w-4/5 md:w-[380px] h-[492px] mx-auto
                 ${props.className || ''}`}
    >
      <div className="w-full h-[262px] relative">
        <Image
          src={`/images/backgrounds/${props.imageUrl}`}
          alt={props.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-4 flex flex-col">
        <div className={`flex items-center text-base font-normal mb-2 ${metadataColor}`}>
          <span>{props.date}</span>
          <span
            className={`mx-2 w-1 h-1 rounded-full ${metadataColor.replace('text-', 'bg-')}`}
          ></span>{' '}
          <span>{props.readTime}</span>
        </div>
        <p className={`font-semibold text-xl mb-2 ${titleColor} truncate`}>{props.title}</p>
        <p className={`font-normal text-base leading-relaxed ${metadataColor} line-clamp-3 mb-4`}>
          {' '}
          {props.description}
        </p>
        <Link className="flex flex-row items-center hover:opacity-80" href={props.linkUrl} passHref>
          <p className={`text-lg font-bold leading-6 text-primary mr-3 inline`}>Xem Thêm</p>
          <ArrowRightSVG />
        </Link>
      </div>
    </div>
  );
};
