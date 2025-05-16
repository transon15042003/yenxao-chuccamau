import { shippingPolicyContent } from '@/content/shippingPolicy';
import Image from 'next/image';

import Heading from '@/components/content/Heading';
import List from '@/components/content/List';
import Paragraph from '@/components/content/Paragraph';

const ShippingPolicyPage = () => {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-start py-12 px-2 md:px-0 relative"
      style={{
        backgroundImage: 'url(/images/chinhsach/chinhsach-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left top'
      }}
    >
      <div
        className="relative bg-white/60 rounded-xl shadow-lg max-w-6xl w-full p-8 md:p-12"
        style={{ zIndex: 1 }}
      >
        <Heading
          as="h1"
          value="Chính sách vận chuyển"
          className="text-center text-3xl md:text-4xl font-bold text-primary mb-8"
        />
        <Paragraph value="Chính sách vận chuyển này cung cấp thông tin về phương thức vận chuyển, thời gian giao hàng và phí vận chuyển khi bạn mua sắm tại website của chúng tôi." />
        <div className="text-base md:text-lg text-typo-1 space-y-6">
          {shippingPolicyContent.map((section, index) => (
            <div key={index}>
              <Heading as="h2" value={section.heading} className="block mt-6 font-bold" />
              {section.contents.map((content, contentIndex) => {
                if (content.type === 'paragraph') {
                  return <Paragraph key={contentIndex} value={content.value || ''} />;
                }
                if (content.type === 'ul' || content.type === 'ol') {
                  return (
                    <List key={contentIndex} type={content.type} values={content.values || []} />
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>
        <Image
          src="/images/chinhsach/chinhsach-2.png"
          alt="Decorative corner"
          width={300}
          height={120}
          className="absolute right-0 bottom-0 pointer-events-none select-none"
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
