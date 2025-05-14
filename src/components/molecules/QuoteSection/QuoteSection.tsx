'use client';
import { Quote as QuoteType } from '@/types/quote';
import { useState } from 'react';

import { DirectionControl } from '@/components/atoms/DirectionControl';
import { Quote } from '@/components/atoms/Quote';
import { StyledHeading } from '@/components/atoms/StyledHeading';

export const QuoteSection = ({
  initialQuotes,
  errorMessage
}: {
  initialQuotes: QuoteType[];
  errorMessage?: string;
}) => {
  const [quotes] = useState<QuoteType[]>(() => initialQuotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // *** Xác định quote hiện tại cần hiển thị ***
  // Lấy quote từ mảng quotes dựa vào currentQuoteIndex
  // Đảm bảo mảng quotes không rỗng trước khi truy cập phần tử
  const currentQuote = quotes.length > 0 ? quotes[currentQuoteIndex] : null;

  // *** Hàm xử lý khi click nút điều hướng Trước đó ***
  const handlePrevious = () => {
    setCurrentQuoteIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      const finalIndex = newIndex < 0 ? quotes.length - 1 : newIndex;

      return finalIndex;
    });
  };

  // *** Hàm xử lý khi click nút điều hướng Tiếp theo ***
  const handleNext = () => {
    setCurrentQuoteIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      const finalIndex = newIndex >= quotes.length ? 0 : newIndex;

      return finalIndex;
    });
  };

  return (
    <div className="w-full min-h-[674px] bg-[url('/quotes/image.png')] bg-cover bg-bottom bg-no-repeat py-5 flex flex-col md:flex-row items-center justify-center">
      <div className="hidden md:inline-flex h-96 flex-col justify-start">
        <img src="/quotes/Vector.png" width={150} alt="Decorative quote icon" />{' '}
        {/* Thêm alt text mô tả hơn */}
      </div>

      <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-between px-4 md:px-0">
        {/* StyledHeading, hr, Quote, DirectionControl giữ nguyên cấu trúc bên trong */}
        <StyledHeading
          title="Khách Hàng Nói Gì Về Chúng Tôi"
          subTitle="Trải nghiệm thực tế từ khách hàng đã sử dụng sản phẩm"
        />
        <hr className="w-full h-0.5 bg-typo-1 my-4" />
        <div className="w-full md:hidden inline-flex flex-row justify-start mb-7">
          <img src="/quotes/Vector.png" width={72} alt="Decorative quote icon" />{' '}
          {/* Thêm alt text mô tả hơn */}
        </div>
        {/* *** Hiển thị Trích dẫn hoặc thông báo rỗng/lỗi từ props *** */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}{' '}
        {/* Hiển thị lỗi nếu có từ Server Component */}
        {!errorMessage && currentQuote ? ( // Nếu không có lỗi và có quote hiện tại
          <Quote
            content={currentQuote.content}
            avatarSrc={currentQuote.avatarSrc}
            username={currentQuote.username}
            rate={currentQuote.rate}
          />
        ) : (
          // Nếu không có lỗi và không có quote hiện tại (mảng rỗng)
          !errorMessage && quotes.length === 0 && <p>Không có trích dẫn nào.</p>
        )}
        <div className="w-full md:hidden inline-flex flex-row justify-end">
          <img src="/quotes/Vector-1.png" width={72} alt="Decorative quote icon" />{' '}
          {/* Thêm alt text mô tả hơn */}
        </div>
        {/* *** Khối chứa Direction Controls *** */}
        {/* Chỉ hiển thị controls nếu có nhiều hơn 1 quote để xoay vòng */}
        {quotes.length > 1 && (
          <div className="flex flex-row mt-4">
            {/* Gắn hàm xử lý vào sự kiện onClick */}
            <DirectionControl direction={false} onClick={handlePrevious} />
            <DirectionControl direction={true} onClick={handleNext} />
          </div>
        )}
      </div>

      {/* *** Điều chỉnh div chứa Vector phải *** */}
      <div className="hidden md:inline-flex h-96 flex-col justify-end">
        <img src="/quotes/Vector-1.png" width={114} alt="Decorative quote icon" />{' '}
        {/* Thêm alt text mô tả hơn */}
      </div>
    </div>
  );
};
