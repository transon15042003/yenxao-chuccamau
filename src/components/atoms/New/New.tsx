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

  // Bỏ biến cardWidth cố định

  return (
    // Container chính của thẻ tin tức
    // *** Điều chỉnh lớp chiều rộng và căn giữa trên mobile ***
    // w-4/5: Chiếm 80% chiều ngang container cha trên mobile
    // md:w-[279.75px]: Chiều rộng cố định trên desktop
    // mx-auto: Căn giữa thẻ New trong container cha trên mobile
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden shadow-md my-1
                 w-4/5 md:w-[279.75px] mx-auto
                 ${props.className || ''}`}
    >
      {/* Phần ảnh bài viết */}
      {/* w-full h-[262px] relative: Ảnh chiếm hết chiều ngang của thẻ New và có chiều cao cố định 262px */}
      <div className="w-full h-[262px] relative">
        <Image
          src={props.imageUrl}
          alt={props.title} // Sử dụng tiêu đề làm alt text cho ảnh
          layout="fill" // Ảnh sẽ lấp đầy kích thước của div cha (w-full h-[262px])
          objectFit="cover" // Giữ tỷ lệ khung hình và cắt ảnh nếu cần để lấp đầy
          className="rounded-t-lg" // Áp dụng bo góc trên cho ảnh
        />
      </div>

      {/* Phần nội dung bên dưới ảnh */}
      <div className="p-4 flex flex-col">
        {/* Metadata: Ngày và Thời gian đọc */}
        <div className={`flex items-center text-base font-normal mb-2 ${metadataColor}`}>
          <span>{props.date}</span>
          {/* Dấu chấm phân cách */}
          <span
            className={`mx-2 w-1 h-1 rounded-full ${metadataColor.replace('text-', 'bg-')}`}
          ></span>{' '}
          {/* Sử dụng màu metadata cho dấu chấm */}
          <span>{props.readTime}</span>
        </div>
        {/* Tiêu đề bài viết */}
        {/* Áp dụng style và truncate cho tiêu đề dài */}
        <p className={`font-semibold text-xl mb-2 ${titleColor} truncate`}>{props.title}</p>
        {/* Mô tả ngắn / Đoạn trích */}
        {/* Áp dụng style, line height và line-clamp cho mô tả dài */}
        <p className={`font-normal text-base leading-relaxed ${metadataColor} line-clamp-3 mb-4`}>
          {' '}
          {/* line-clamp-3 giới hạn 3 dòng */}
          {props.description}
        </p>
        {/* Liên kết "Xem Thêm" */}
        {/* Sử dụng Link từ next/link cho định tuyến */}
        {/* w-1/2 ở đây là w-1/2 của phần nội dung bên dưới ảnh */}
        <Link
          className="w-1/2 flex flex-row justify-between items-center"
          href={props.linkUrl}
          passHref
        >
          {/* Sử dụng span hoặc div làm phần tử con của Link, flex để căn giữa chữ và icon */}
          <p className={`text-lg font-bold leading-6 text-primary`}>Xem Thêm</p>
          {/* <Image src="/icon_arrow_right.svg" width={24} height={24} alt="" /> */}
          <ArrowRightSVG />
        </Link>
      </div>
    </div>
  );
};
