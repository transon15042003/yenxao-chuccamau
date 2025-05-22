import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';

import { cn } from '@/lib/utils';

interface IntroductionSectionProps {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  className?: string;
}

const IntroductionSection = ({
  children,
  heading,
  subHeading,
  className
}: IntroductionSectionProps) => (
  <section className={cn('relative', className)}>
    {/* <Image
      src="/images/backgrounds/scrath.png"
      alt=""
      width={100}
      height={100}
      className="w-auto h-[600px] max-w-[100vw] absolute lg:top-0 -top-[80px] left-0 rotate-[65deg] opacity-10"
      style={{ zIndex: '0' }}
    /> */}
    <SectionTitle
      heading={heading}
      subHeading={subHeading}
      headingClass="normal-case text-[40px] leading-[50px]"
      subHeadingClass="text-[#2A2A40]"
      className="relative z-20"
    />
    <div>{children}</div>
  </section>
);

export default IntroductionSection;
