import { ContactType } from '@/types/contact';

import { MapEmbed } from '@/components/atoms/MapEmbed';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import { BranchList } from '@/components/organisms/BranchList';
import { ContactInfoBlock } from '@/components/organisms/ContactInfoBlock';
import { Inbox } from '@/components/organisms/Inbox';

type ContactPage = {
  contactData: ContactType[];
};

export const ContactPage = (props: ContactPage) => {
  const overlayColor = 'rgba(255, 255, 255, 0.7)';

  return (
    <div className="flex flex-col items-center">
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

        <div className="flex md:flex-row flex-col flex-wrap items-start md:w-3/4 w-96 mt-12">
          <div className="flex md:flex-row flex-col-reverse flex-wrap items-start md:mb-5">
            <ContactInfoBlock className="md:w-1/2 w-full" contactData={props.contactData} />
            <Inbox className="md:w-1/2 w-full" />
          </div>
          <MapEmbed
            className="w-full h-[487px] my-8"
            embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5068944938616!2d106.69700687590593!3d10.772434959265583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f56a3de55%3A0x7c6107f1253d69c9!2zMTIzIMSQLiBMw6ogTOG7o2ksIFBoxrDhu51uZyBC4bq_biBUaMOgbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1747378888739!5m2!1svi!2s"
          />
        </div>
      </div>
      <div className="md:w-3/4 w-96 py-14">
        <SectionTitle heading="Danh Sách Chi Nhánh" />
        <div className="flex md:flex-row flex-col my-7">
          <MapEmbed
            className="md:w-1/2 w-full h-[810px] md:mb-0 mb-5"
            embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5068944938616!2d106.69700687590593!3d10.772434959265583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f56a3de55%3A0x7c6107f1253d69c9!2zMTIzIMSQLiBMw6ogTOG7o2ksIFBoxrDhu51uZyBC4bq_biBUaMOgbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1747378888739!5m2!1svi!2s"
          />
          <BranchList
            className="md:w-1/2 w-full md:h-[810px] h-auto"
            contactData={props.contactData}
          />
        </div>
      </div>
    </div>
  );
};
