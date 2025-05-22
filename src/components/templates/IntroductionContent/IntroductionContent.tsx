import Image from 'next/image';

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
      title: 'Hiện tại',
      description:
        'Ngày nay, Công ty ABC tự hào là đối tác tin cậy của hàng nghìn khách hàng trong và ngoài nước, với hệ thống sản xuất hiện đại và đội ngũ nhân viên chuyên nghiệp.'
    }
  ]
};

const IntroductionContent = () => {
  return (
    // <div className="lg:grid lg:grid-cols-12">
    //   <IntroductionSection
    //     heading="Câu chuyện thương hiệu"
    //     subHeading="Quá trình hình thành và phát triển của chúng tôi qua các năm"
    //     className="lg:col-span-10 lg:col-start-2 py-[70px] bg-[#F8F5F2]"
    //   >
    //     <div className="lg:grid lg:grid-cols-2 gap-[40px] flex items-center mt-[36px]">
    //       <Image
    //         src="/images/introduction/product_1.png"
    //         alt="product"
    //         width={100}
    //         height={100}
    //         className="lg:col-span-1 w-full h-auto"
    //       />
    //       <div className="lg:col-span-1">
    //         {descriptions.developHistory.map((el, idx) => (
    //           <SectionContentItem
    //             key={idx}
    //             title={el.title}
    //             description={el.description}
    //             icon={el.icon}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </IntroductionSection>
    // </div>
    <div className="flex justify-center flex-col lg:flex-row">
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
    </div>
  );
};

export default IntroductionContent;
