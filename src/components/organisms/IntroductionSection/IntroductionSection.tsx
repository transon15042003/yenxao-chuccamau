import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';

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
  <section className={className}>
    <SectionTitle
      heading={heading}
      subHeading={subHeading}
      headingClass="normal-case text-[40px] leading-[50px]"
      subHeadingClass="text-[#2A2A40]"
    />
    <div>{children}</div>
  </section>
);

export default IntroductionSection;
