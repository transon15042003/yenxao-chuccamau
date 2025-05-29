'use client';

import { descriptions } from '@/contents/introduction';
import { ContactType } from '@/types/contact';
import Image from 'next/image';
import { useState } from 'react';

import { LoadingOverlay } from '@/components/atoms/LoadingOverlay';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfoBlock } from '@/components/organisms/ContactInfoBlock';
import IntroductionSection from '@/components/organisms/IntroductionSection';
import ProductionStep from '@/components/organisms/ProductionStep/ProductionStep';
import SectionContentItem from '@/components/organisms/SectionContentItem/SectionContentItem';

import { cn } from '@/lib/utils';

interface IntroductionContentProps {
  contactInfo: ContactType[];
}

const IntroductionContent = ({ contactInfo }: IntroductionContentProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex justify-center flex-col">
      <div className="relative w-full overflow-hidden bg-[#F8F5F2]">
        <Image
          src="/images/backgrounds/scrath.png"
          alt=""
          width={600}
          height={400}
          className="absolute left-0 top-[-200px] rotate-[65deg] opacity-20 z-[1]"
        />
        <IntroductionSection
          heading="Câu chuyện thương hiệu"
          subHeading="Quá trình hình thành và phát triển của chúng tôi qua các năm"
          className="lg:py-[70px] py-[36px] px-4 lg:px-0 z-[2] bg-[#F8F5F2]"
        >
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-10 lg:col-start-2">
              <div className="lg:grid lg:grid-cols-2 gap-[40px] flex lg:items-center lg:flex-row items-start flex-col mt-[36px]">
                <Image
                  src="/images/introduction/product_1.webp"
                  alt="product"
                  width={520}
                  height={610}
                  className="lg:col-span-1 w-full h-auto"
                />
                <div className="lg:col-span-1">
                  {descriptions.developHistory.map((el, idx) => (
                    <SectionContentItem
                      key={idx}
                      title={el.title}
                      description={el.description}
                      icon={el.icon}
                      className="mt-[50px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </IntroductionSection>
      </div>
      <div className="relative bg-white overflow-hidden">
        <Image
          src="/images/backgrounds/scrath.png"
          alt=""
          width={600}
          height={400}
          className="absolute left-0 top-[-200px] rotate-[65deg] opacity-20 z-[1]"
        />
        <IntroductionSection
          heading="Tầm nhìn - Sứ mệnh - Giá trị cốt lõi"
          subHeading="Những giá trị định hướng mọi hoạt động của chúng tôi"
          className="lg:py-[70px] py-[36px] px-4 lg:px-0 z-[2]"
        >
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-10 lg:col-start-2">
              <div className="lg:grid lg:grid-cols-3 lg:gap-[10px] mt-[42px] flex flex-col gap-[24px]">
                {descriptions.guidingPrinciple.map((el, idx) => (
                  <Image
                    key={idx}
                    src={el}
                    alt=""
                    width={1000}
                    height={1000}
                    className="lg:col-span-1 w-full h-auto"
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
                <ProductionStep
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
              <ProductionStep
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
      <div className="relative bg-white overflow-hidden">
        <Image
          src="/images/backgrounds/scrath.png"
          alt=""
          width={600}
          height={400}
          className="absolute left-0 top-[-200px] rotate-[65deg] opacity-20 z-[1]"
        />
        <IntroductionSection
          heading="Chứng nhận & Thành tựu"
          subHeading="Những minh chứng cho chất lượng và uy tín của chúng tôi"
          className="lg:py-[70px] py-[36px] px-4 lg:px-0 z-[2]"
        >
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-10 lg:col-start-2 mt-[42px] relative">
              <div className="grid grid-cols-2 p-1 mb-[36px] text-center font-bold bg-primary rounded-[5px]">
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
        className="lg:py-[70px] py-[36px] px-4 lg:px-0"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-2 mt-[42px] relative">
            <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-5">
              {descriptions.company.map((el, idx) => (
                <Image
                  key={idx}
                  src={el}
                  alt="company"
                  width={400}
                  height={400}
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
