'use client';
import { DirectionControl } from '@/components/atoms/DirectionControl';
import { Quote } from '@/components/atoms/Quote';
import { StyledHeading } from '@/components/atoms/StyledHeading';

export const QuoteSection = () => {
  const clickdemo = () => {
    console.warn('click click');
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
        {/* Thêm margin dọc cho hr để tạo khoảng cách */}
        <hr className="w-full h-0.5 bg-typo-1 my-4"></hr>
        <div className="w-full md:hidden inline-flex flex-row justify-start mb-7">
          <img src="/quotes/Vector.png" width={72} alt="Decorative quote icon" />{' '}
          {/* Thêm alt text mô tả hơn */}
        </div>
        <Quote
          className="mb-7"
          content="Mình đã thử nhiều loại yến trước đây, nhưng yến ở đây thực sự khác biệt. Sợi yến dày, thơm tự nhiên, ăn vào cảm nhận rõ độ ngọt thanh. Gia đình mình ai cũng khen ngon và hỏi mua thêm!"
          avatarSrc="/avatars/female.png"
          username="Chị Minh Anh"
          rate={5}
        />
        <div className="w-full md:hidden inline-flex flex-row justify-end">
          <img src="/quotes/Vector-1.png" width={72} alt="Decorative quote icon" />{' '}
          {/* Thêm alt text mô tả hơn */}
        </div>
        {/* Thêm margin top cho div controls để tạo khoảng cách */}
        <div className="flex flex-row mt-4">
          <DirectionControl direction={false} onClick={clickdemo} />
          <DirectionControl direction={true} onClick={clickdemo} />
        </div>
      </div>

      {/* *** Điều chỉnh div chứa Vector phải *** */}
      <div className="hidden md:inline-flex h-96 flex-col justify-end">
        <img src="/quotes/Vector-1.png" width={114} alt="Decorative quote icon" />{' '}
        {/* Thêm alt text mô tả hơn */}
      </div>
    </div>
  );
};
