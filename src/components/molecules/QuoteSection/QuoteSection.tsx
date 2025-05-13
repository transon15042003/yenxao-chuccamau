'use client';
import { DirectionControl } from '@/components/atoms/DirectionControl';
import { Quote } from '@/components/atoms/Quote';
import { StyledHeading } from '@/components/atoms/StyledHeading';

export const QuoteSection = () => {
  const clickdemo = () => {
    console.warn('click click');
  };

  return (
    <div className="w-full h-[674px] bg-[url('/quotes/image.png')] bg-cover bg-bottom bg-no-repeat py-5 flex flex-row items-center justify-center">
      <div className="h-96 flex flex-col justify-start">
        <img src="/quotes/Vector.png" width={150} alt="" />
      </div>
      <div className="w-1/2 h-96 flex flex-col items-center justify-between">
        <StyledHeading
          title="Khách Hàng Nói Gì Về Chúng Tôi"
          subTitle="Trải nghiệm thực tế từ khách hàng đã sử dụng sản phẩm"
        />
        <hr className="w-full h-0.5 bg-[#2A2A40]"></hr>
        <Quote
          content="Mình đã thử nhiều loại yến trước đây, nhưng yến ở đây thực sự khác biệt. Sợi yến dày, thơm tự nhiên, ăn vào cảm nhận rõ độ ngọt thanh. Gia đình mình ai cũng khen ngon và hỏi mua thêm!"
          avatarSrc="/avatars/female.png"
          username="Chị Minh Anh"
          rate={5}
        />
        <div className="flex flex-row">
          <DirectionControl direction={false} onClick={clickdemo} />
          <DirectionControl direction={true} onClick={clickdemo} />
        </div>
      </div>
      <div className="h-96 flex flex-col justify-end">
        <img src="/quotes/Vector-1.png" width={114} alt="" />
      </div>
    </div>
  );
};
