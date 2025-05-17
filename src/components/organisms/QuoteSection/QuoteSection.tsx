'use client';
import { Quote as QuoteType } from '@/types/quote';
import Image from 'next/image';
import { useState } from 'react';

import { DirectionControl } from '@/components/atoms/DirectionControl';
import { Quote } from '@/components/atoms/Quote';

import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

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
        <Image src="/quotes/Vector.png" width={150} alt="Decorative quote icon" />{' '}
      </div>

      <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-between px-4 md:px-0">
        <SectionTitle
          heading="Khách Hàng Nói Gì Về Chúng Tôi"
          subHeading="Trải nghiệm thực tế từ khách hàng đã sử dụng sản phẩm"
        />
        <hr className="w-full h-0.5 bg-typo-1 my-4" />
        <div className="w-full md:hidden inline-flex flex-row justify-start mb-7">
          <Image src="/quotes/Vector.png" width={72} alt="Decorative quote icon" />{' '}
        </div>
        {/* *** Hiển thị Trích dẫn hoặc thông báo rỗng/lỗi từ props *** */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}{' '}
        {/* Hiển thị lỗi nếu có từ Server Component */}
        {!errorMessage && currentQuote ? (
          <Quote
            content={currentQuote.content}
            avatarSrc={currentQuote.avatarSrc}
            username={currentQuote.username}
            rate={currentQuote.rate}
          />
        ) : (
          !errorMessage && quotes.length === 0 && <p>Không có trích dẫn nào.</p>
        )}
        <div className="w-full md:hidden inline-flex flex-row justify-end">
          <Image src="/quotes/Vector-1.png" width={72} alt="Decorative quote icon" />{' '}
        </div>
        {/* Chỉ hiển thị controls nếu có nhiều hơn 1 quote để xoay vòng */}
        {quotes.length > 1 && (
          <div className="flex flex-row mt-4">
            <DirectionControl direction={false} onClick={handlePrevious} />
            <DirectionControl direction={true} onClick={handleNext} />
          </div>
        )}
      </div>

      <div className="hidden md:inline-flex h-96 flex-col justify-end">
        <Image src="/quotes/Vector-1.png" width={114} alt="Decorative quote icon" />{' '}
      </div>
    </div>
  );
};
