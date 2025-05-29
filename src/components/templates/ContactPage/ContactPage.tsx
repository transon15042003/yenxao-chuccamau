'use client';
import { ContactType } from '@/types/contact';
import { useRef, useState } from 'react';
import { AppConfig } from 'src/AppConfig';

import { LoadingOverlay } from '@/components/atoms/LoadingOverlay';
import { MapEmbed } from '@/components/atoms/MapEmbed';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfoBlock } from '@/components/organisms/ContactInfoBlock';

import { cn } from '@/lib/utils';

type ContactPage = {
  contactData: ContactType[];
};

export const ContactPage = (props: ContactPage) => {
  const overlayColor = 'rgba(255, 255, 255, 0.7)';

  const [isLoading, setIsLoading] = useState(false);

  const mapViewRef = useRef<HTMLDivElement>(null);

  const scrollToMapView = () => {
    if (mapViewRef.current) {
      mapViewRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <div
          className="w-full bg-no-repeat flex flex-col items-center justify-between py-[70px] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url('/images/backgrounds/newfeed.png')`,
            backgroundPositionY: '-70px',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat'
          }}
        >
          <SectionTitle
            classNameHeading="text-[40px]"
            classNameSubHeading="text-typo-2 sm:w-full w-5/6"
            heading="Thông tin liên hệ"
            subHeading="Liên hệ với chúng tôi để được tư vấn và hỗ trợ"
          />

          <div
            className={cn(
              'flex lg:flex-row flex-col flex-wrap',
              'items-start',
              'md:w-3/4 w-full px-4',
              'mt-12'
            )}
          >
            <div className="w-full flex lg:flex-row flex-col-reverse flex-wrap items-start md:mb-5">
              <ContactInfoBlock
                className="lg:pt-0 lg:w-1/2 w-full"
                contactData={props.contactData}
                onScrollToMap={scrollToMapView}
              />
              <ContactForm className="lg:w-1/2 w-full" setIsLoading={setIsLoading} />
            </div>
            <MapEmbed
              id="mapView"
              className="w-full h-[487px] my-8"
              embedUrl={AppConfig.embedUrl}
              ref={mapViewRef}
              style={{
                scrollMarginTop: '105px'
              }}
            />
          </div>
        </div>
        {/* <div className="lg:w-3/4 md:w-5/6 w-96 py-14">
          <SectionTitle heading="Danh Sách Chi Nhánh" />
          <div className="w-full flex lg:flex-row flex-col my-7">
            <MapEmbed
              className="w-full h-[810px] lg:mb-0 mb-5"
              // className="lg:w-1/2 w-full h-[810px] lg:mb-0 mb-5" When allowing to display branch list, un-comment this line n remove/comment line above
              embedUrl={AppConfig.embedUrl}
            />
            <BranchList
              className="lg:w-1/2 w-full lg:h-[810px] h-auto"
              contactData={props.contactData}
            />
          </div>
        </div> */}
      </div>
      {isLoading && <LoadingOverlay />}
    </div>
  );
};
