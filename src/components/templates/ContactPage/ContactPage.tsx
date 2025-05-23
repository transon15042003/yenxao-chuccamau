'use client';
import { ContactType } from '@/types/contact';
import { useState } from 'react';
import { AppConfig } from 'src/AppConfig';

import { LoadingOverlay } from '@/components/atoms/LoadingOverlay';
import { MapEmbed } from '@/components/atoms/MapEmbed';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import { BranchList } from '@/components/organisms/BranchList';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfoBlock } from '@/components/organisms/ContactInfoBlock';

type ContactPage = {
  contactData: ContactType[];
};

export const ContactPage = (props: ContactPage) => {
  const overlayColor = 'rgba(255, 255, 255, 0.7)';

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative">
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
              <ContactForm className="md:w-1/2 w-full" setIsLoading={setIsLoading} />
            </div>
            <MapEmbed className="w-full h-[487px] my-8" embedUrl={AppConfig.embedUrl} />
          </div>
        </div>
        <div className="md:w-3/4 w-96 py-14">
          <SectionTitle heading="Danh Sách Chi Nhánh" />
          <div className="flex md:flex-row flex-col my-7">
            <MapEmbed
              className="md:w-1/2 w-full h-[810px] md:mb-0 mb-5"
              embedUrl={AppConfig.embedUrl}
            />
            <BranchList
              className="md:w-1/2 w-full md:h-[810px] h-auto"
              contactData={props.contactData}
            />
          </div>
        </div>
      </div>
      {isLoading && <LoadingOverlay />}
    </div>
  );
};
