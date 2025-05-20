import { returnPage } from 'src/contents/returnPage';

import { SectionHeading } from '@/components/atoms/Heading';
import Img from '@/components/atoms/Image/Image';
import { OrderedList } from '@/components/atoms/OrderedList/OrderedList';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';
import { UnOrderedList } from '@/components/atoms/UnOrderedList/UnOderedList';

const ParagraphPolicy = () => (
  <div className="relative px-4 pt-[32px] pb-[48px] bg-white bg-opacity-50 rounded-[10px] lg:col-span-10 lg:col-start-2 lg:px-[82px]">
    <SectionHeading className="text-[40px] text-center mb-4 leading-[45px]">
      {returnPage.heading}
    </SectionHeading>
    {returnPage.contents.map((el, idx) => {
      switch (el.type) {
        case 'paragraph':
          return <Paragraph key={idx} content={el.value} />;
        case 'title':
          return (
            <SectionHeading
              key={idx}
              className="text-[20px] font-bold text-[#2A2A40] leading-[35px]"
            >
              {el.value}
            </SectionHeading>
          );
        case 'ul':
          return (
            <UnOrderedList items={el.value} key={idx} className="text-[#2A2A40] text-[18px]" />
          );
        case 'ol':
          return <OrderedList items={el.value} key={idx} className="text-[#2A2A40] text-[18px]" />;
      }
    })}
    <Img
      src="/images/policy/decorate.png"
      className="absolute bottom-4 right-4 min-w-[300px] max-w-[40vw] opacity-15"
    />
  </div>
);

export default ParagraphPolicy;
