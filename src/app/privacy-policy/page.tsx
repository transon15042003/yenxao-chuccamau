import { privacyPolicyContent } from '@/content/privacyPolicy';
import Image from 'next/image';

import Heading from '@/components/content/Heading';
import List from '@/components/content/List';
import Paragraph from '@/components/content/Paragraph';

const PrivacyPolicyPage = () => {
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
        className="relative bg-white/60 rounded-[10px] shadow-lg max-w-7xl w-full p-6"
        style={{ zIndex: 1 }}
      >
        <Heading
          as="h1"
          value="Chính sách bảo mật"
          className="text-center text-[40px] leading-[33px] font-bold text-primary mb-6"
        />
        <div className="text-base md:text-lg text-typo-2">
          {privacyPolicyContent.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <Heading
                  as="h2"
                  value={section.heading}
                  className="block mt-6 font-bold text-[20px] leading-[35px]"
                />
              )}
              {section.contents.map((content, contentIndex) => {
                if (content.type === 'paragraph') {
                  return (
                    <Paragraph
                      key={contentIndex}
                      value={content.value || ''}
                      className="text-lg leading-[35px]"
                    />
                  );
                }
                if (content.type === 'ul' || content.type === 'ol') {
                  const listContent = content as { type: 'ul' | 'ol'; values: string[] };

                  // Ensure the listContent is defined and has values
                  return (
                    <List key={contentIndex} type={listContent.type} values={listContent.values} />
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

export default PrivacyPolicyPage;
