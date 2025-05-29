import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';

import { Certificates } from '../../molecules/Certificates';

export const AboutSection = () => (
  <div
    data-testid="aboutsection-box"
    className="w-full h-auto flex flex-col items-center justify-around py-[70px] relative overflow-hidden"
  >
    {/* Phần tử div riêng cho ảnh nền, xoay và làm mờ */}
    <div
      className="absolute w-full h-full
                   bg-[url('/images/backgrounds/scrath.png')] bg-contain bg-bottom bg-no-repeat opacity-[.07] z-0"
      style={{
        transform: 'rotate(65.33deg) scale(1.5)',
        top: '-120px',
        left: '-600px'
      }}
    >
      {/* Div này chỉ dùng cho hiệu ứng nền */}
    </div>

    <SectionTitle
      className="mb-[35px]"
      heading="Về Thương Hiệu Chúng Tôi"
      subHeading="Cam kết chất lượng, vệ sinh an toàn thực phẩm và giá trị dinh dưỡng cao"
    />
    <Certificates />
  </div>
);
