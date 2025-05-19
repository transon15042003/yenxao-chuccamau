'use client';
import { ContactType } from '@/types/contact';
import { useState } from 'react';

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
              <Inbox className="md:w-1/2 w-full" setIsLoading={setIsLoading} />
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
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
