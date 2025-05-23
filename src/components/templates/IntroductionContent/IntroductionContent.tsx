'use client';

import { ContactType } from '@/types/contact';
import Image from 'next/image';
import { useState } from 'react';

import { LoadingOverlay } from '@/components/atoms/LoadingOverlay';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfoBlock } from '@/components/organisms/ContactInfoBlock';
import GuidingCart from '@/components/organisms/GuidingCart/GuidingCart';
import IntroductionSection from '@/components/organisms/IntroductionSection';
import SectionContentItem from '@/components/organisms/SectionContentItem/SectionContentItem';
import Step from '@/components/organisms/Step/Step';

import { cn } from '@/lib/utils';

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
  ],
  productionProcess: [
    {
      img: '/images/introduction/step_1.png',
      title: 'Nhập nguyên liệu',
      description:
        'Chúng tôi chỉ sử dụng nguyên liệu chất lượng cao từ các nhà cung cấp uy tín, đảm bảo nguồn gốc rõ ràng.'
    },
    {
      img: '/images/introduction/step_2.png',
      title: 'Sản xuất',
      description:
        'Quy trình sản xuất hiện đại, tự động hóa cao, được vận hành bởi đội ngũ kỹ thuật viên lành nghề.'
    },
    {
      img: '/images/introduction/step_3.png',
      title: 'Kiểm tra chất lượng',
      description:
        'Mỗi sản phẩm đều trải qua quy trình kiểm tra nghiêm ngặt, đảm bảo đáp ứng các tiêu chuẩn chất lượng cao nhất.'
    },
    {
      img: '/images/introduction/step_4.png',
      title: 'Đóng gói',
      description:
        'Sản phẩm được đóng gói cẩn thận, bảo vệ tối đa trong quá trình vận chuyển và bảo quản.'
    },
    {
      img: '/images/introduction/step_5.png',
      title: 'Bảo hành và hỗ trợ',
      description:
        'Chúng tôi cam kết cung cấp dịch vụ bảo hành và hỗ trợ kỹ thuật chuyên nghiệp sau bán hàng.'
    }
  ],
  achievement: [
    {
      icon: 'RankSVG',
      title: 'Top 10 Doanh nghiệp tiêu biểu 2022',
      description:
        'Được vinh danh trong Top 10 Doanh nghiệp tiêu biểu ngành hàng năm 2022 do Hiệp hội Doanh nghiệp Việt Nam bình chọn.'
    },
    {
      icon: 'MedalSVG',
      title: 'Giải thưởng Chất lượng Quốc gia',
      description:
        'Đạt Giải thưởng Chất lượng Quốc gia năm 2021, ghi nhận những nỗ lực không ngừng trong việc nâng cao chất lượng sản phẩm.'
    },
    {
      icon: 'CupSVG',
      title: 'Thương hiệu mạnh Việt Nam',
      description:
        'Được vinh danh là Thương hiệu mạnh Việt Nam liên tục trong 5 năm liền (2018-2022).'
    },
    {
      icon: 'LikeSVG',
      title: 'Sản phẩm tin cậy, Dịch vụ hoàn hảo',
      description:
        'Được người tiêu dùng bình chọn là "Sản phẩm tin cậy, Dịch vụ hoàn hảo" năm 2023.'
    }
  ],
  company: [
    '/images/introduction/company_1.png',
    '/images/introduction/company_2.png',
    '/images/introduction/company_3.png',
    '/images/introduction/company_4.png',
    '/images/introduction/company_5.png',
    '/images/introduction/company_6.png'
  ]
};

interface IntroductionContentProps {
  contactInfo: ContactType[];
}

const IntroductionContent = ({ contactInfo }: IntroductionContentProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex justify-center flex-col">
      <div className="relative bg-[#F8F5F2] overflow-hidden">
        <Image
          src="/images/backgrounds/scrath.png"
          alt=""
          width={600}
          height={400}
          className="absolute left-0 top-[-200px] rotate-[65deg] opacity-20"
        />
        <IntroductionSection
          heading="Câu chuyện thương hiệu"
          subHeading="Quá trình hình thành và phát triển của chúng tôi qua các năm"
          className="lg:py-[70px] py-[36px] px-4 lg:px-0 z-2"
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
      </div>
      <div className="relative bg-[#F8F5F2] overflow-hidden">
        <Image
          src="/images/backgrounds/scrath.png"
          alt=""
          width={600}
          height={400}
          className="absolute left-0 top-[-200px] rotate-[65deg] opacity-20"
        />
        <IntroductionSection
          heading="Tầm nhìn - Sứ mệnh - Giá trị cốt lõi"
          subHeading="Những giá trị định hướng mọi hoạt động của chúng tôi"
          className="lg:py-[70px] py-[36px] px-4 lg:px-0 z-2"
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
      <IntroductionSection
        heading="Quy trình sản xuất"
        subHeading="Quy trình sản xuất chuyên nghiệp, đảm bảo chất lượng sản phẩm"
        className="lg:py-[70px] py-[36px] px-4 lg:px-0 bg-[url('/images/policy/bg.png')] bg-no-repeat bg-cover"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2 mt-[42px] relative">
            <span className="block w-[3px] bg-[#D93434] absolute bottom-0 top-0 lg:right-1/2 right-[100%] lg:translate-x-1/2 min-h-[1000px]" />
            {descriptions.productionProcess.map((el, idx) => (
              <div key={idx}>
                {idx % 2 === 1 && <div className="min-w-[50%] h-[208px] hidden lg:block" />}
                <Step
                  img={el.img}
                  title={el.title}
                  desc={el.description}
                  position={idx % 2 === 0 ? 'left' : 'right'}
                  display="inline"
                  className={cn(
                    'overflow-hidden max-h-0 lg:max-h-[208px]',
                    idx % 2 === 0
                      ? 'translate-x-[8px]'
                      : 'float-right translate-x-[-8px] translate-y-[-208px]'
                  )}
                />
              </div>
            ))}

            {descriptions.productionProcess.map((el, idx) => (
              <Step
                key={idx}
                img={el.img}
                title={el.title}
                desc={el.description}
                position={'right'}
                display="topdown"
                className="overflow-hidden max-h-none lg:max-h-0 translate-x-[-9px]"
              />
            ))}
          </div>
        </div>
      </IntroductionSection>
      <div className="relative bg-[#F8F5F2] overflow-hidden">
        <Image
          src="/images/backgrounds/scrath.png"
          alt=""
          width={600}
          height={400}
          className="absolute left-0 top-[-200px] rotate-[65deg] opacity-20"
        />
        <IntroductionSection
          heading="Chứng nhận & Thành tựu"
          subHeading="Những minh chứng cho chất lượng và uy tín của chúng tôi"
          className="lg:py-[70px] py-[36px] px-4 lg:px-0 bg-no-repeat bg-cover z-2"
        >
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-10 lg:col-start-2 mt-[42px] relative">
              <div className="grid grid-cols-2 p-1 mb-[36px] text-center bg-primary rounded-[5px]">
                <div className="col-span-1 text-white bg-primary">Chứng nhận</div>
                <div className="col-span-1 text-[#2A2A40] bg-white rounded-[5px]">Thành tựu</div>
              </div>

              <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-5">
                {descriptions.achievement.map((el, idx) => (
                  <SectionContentItem
                    key={idx}
                    title={el.title}
                    description={el.description}
                    icon={el.icon}
                    titleClass="text-[20px]"
                    descClass="text-[18px]"
                    className="col-span-1 items-center bg-[#F6F1EC] rounded-[10px] py-[20px] px-[30px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </IntroductionSection>
      </div>
      <IntroductionSection
        heading="Hình ảnh của công ty"
        subHeading="Khám phá không gian làm việc và cơ sở vật chất của chúng tôi"
        className="lg:py-[70px] py-[36px] px-4 lg:px-0 bg-no-repeat bg-cover"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2 mt-[42px] relative">
            <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-5">
              {descriptions.company.map((el, idx) => (
                <Image
                  key={idx}
                  src={el}
                  alt="company"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </IntroductionSection>
      <IntroductionSection
        heading="Thông tin liên hệ"
        subHeading="Liên hệ với chúng tôi để được tư vấn và hỗ trợ"
        className="lg:py-[70px] py-[36px] bg-[url('/images/policy/bg.png')] bg-no-repeat bg-cover"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2 mt-[42px] lg:flex lg:flex-row flex flex-col-reverse">
            <ContactInfoBlock className="md:w-1/2 w-full" contactData={contactInfo} />
            <ContactForm className="md:w-1/2 w-full px-4 lg:px-0" setIsLoading={setIsLoading} />
            {isLoading && <LoadingOverlay />}
          </div>
        </div>
      </IntroductionSection>
    </div>
  );
};

export default IntroductionContent;
