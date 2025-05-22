import Image from 'next/image';

import GuidingCart from '@/components/organisms/GuidingCart/GuidingCart';
import IntroductionSection from '@/components/organisms/IntroductionSection';
import SectionContentItem from '@/components/organisms/SectionContentItem/SectionContentItem';

const descriptions = {
  developHistory: [
    {
      icon: 'LargerCalendarSVG',
      title: 'Thành lập (2005)',
      description:
        'Công ty ABC được thành lập với tầm nhìn trở thành đơn vị hàng đầu trong lĩnh vực. Chúng tôi bắt đầu với đội ngũ 10 nhân viên và một nhà máy nhỏ.'
    },
    {
      icon: 'DevelopSVG',
      title: 'Phát triển (2010-2015)',
      description:
        'Giai đoạn phát triển mạnh mẽ với việc mở rộng thị trường, tăng cường năng lực sản xuất và đầu tư công nghệ hiện đại.'
    },
    {
      icon: 'PriceSVG',
      title: 'Tầm nhìn',
      description:
        'Trở thành công ty hàng đầu trong lĩnh vực, được khách hàng tin tưởng và lựa chọn nhờ chất lượng sản phẩm và dịch vụ xuất sắc.'
    }
  ],
  guidingPrinciple: [
    {
      icon: 'EyeSVG',
      title: 'Sứ mệnh',
      description:
        'Cung cấp những sản phẩm và dịch vụ chất lượng cao, đáp ứng nhu cầu ngày càng tăng của khách hàng, đồng thời đóng góp vào sự phát triển bền vững của xã hội.'
    },
    {
      icon: 'TargetSVG',
      title: 'Phát triển (2010-2015)',
      description:
        'Giai đoạn phát triển mạnh mẽ với việc mở rộng thị trường, tăng cường năng lực sản xuất và đầu tư công nghệ hiện đại.'
    },
    {
      icon: 'DiamondSVG',
      title: 'Giá trị cốt lõi',
      description:
        'Chất lượng là ưu tiên hàng đầu <br/>Đổi mới và sáng tạo không ngừng <br/>Tôn trọng và hợp tác <br />Trách nhiệm với xã hội <br />Phát triển bền vững'
    }
  ]
};

const IntroductionContent = () => {
  return (
    <div className="flex justify-center flex-col">
      <IntroductionSection
        heading="Câu chuyện thương hiệu"
        subHeading="Quá trình hình thành và phát triển của chúng tôi qua các năm"
        className="lg:py-[70px] py-[36px] bg-[#F8F5F2] px-4 lg:px-0"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2">
            <div className="lg:grid lg:grid-cols-2 gap-[40px] flex lg:items-center lg:flex-row items-start flex-col mt-[36px]">
              <Image
                src="/images/introduction/product_1.png"
                alt="product"
                width={100}
                height={100}
                className="lg:col-span-1 w-full h-auto"
              />
              <div className="lg:col-span-1">
                {descriptions.developHistory.map((el, idx) => (
                  <SectionContentItem
                    key={idx}
                    title={el.title}
                    description={el.description}
                    icon={el.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </IntroductionSection>
      <IntroductionSection
        heading="Tầm nhìn - Sứ mệnh - Giá trị cốt lõi"
        subHeading="Những giá trị định hướng mọi hoạt động của chúng tôi"
        className="lg:py-[70px] py-[36px] px-4 lg:px-0"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2">
            <div className="lg:grid lg:grid-cols-3 lg:gap-[10px] mt-[42px] flex flex-col gap-[24px]">
              {descriptions.guidingPrinciple.map((el, idx) => (
                <GuidingCart
                  key={idx}
                  icon={el.icon}
                  title={el.title}
                  description={el.description}
                  className="lg:col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      </IntroductionSection>
    </div>
  );
};

export default IntroductionContent;
