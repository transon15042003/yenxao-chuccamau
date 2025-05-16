import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import { Inbox } from '@/components/organisms/Inbox';

const ContactPage = () => {
  const overlayColor = 'rgba(255, 255, 255, 0.7)';

  return (
    <div
      className="w-full bg-cover bg-no-repeat flex flex-col items-center justify-between py-[70px] relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url('/images/backgrounds/newfeed.png')`
      }}
    >
      <SectionTitle
        heading="Thông tin liên hệ"
        subHeading="Liên hệ với chúng tôi để được tư vấn và hỗ trợ"
      />

      <Inbox />
    </div>
  );
};

export default ContactPage;
