import Image from 'next/image';

import { CertificateTitle } from '../CertificateTitle';

type CertificateProps = {
  certificateSrc: string;
  backgroundSrc?: string;
  title?: string;
  subTitle?: string;
  boxWidth?: number;
  boxHeight?: number;
  certificateWidth?: number;
  certificateHeight?: number;
  className?: string;
};

export const Certificate = (props: CertificateProps) => {
  const finalBoxWidth = props.boxWidth || 384,
    finalBoxHeight = props.boxHeight || 386,
    finalCertificateWidth = props.certificateWidth || 130,
    finalCertificateHeight = props.certificateHeight || Math.round(121.87);

  return (
    <div
      data-testid="certificate-container"
      className={`${props.className} bg-[url('/bg_certificate.png')] bg-cover bg-no-repeat bg-right flex flex-col items-center justify-center border border-4 border-yellow-500 rounded-lg m-2`}
      style={{
        width: `${finalBoxWidth}px`,
        height: `${finalBoxHeight}px`
      }}
    >
      <Image
        priority
        src={`${props.certificateSrc}`}
        width={`${finalCertificateWidth}`}
        height={`${finalCertificateHeight}`}
        alt="Certificate"
      />

      <CertificateTitle title={`${props.title}`} />
      <p className="w-[350px] text-center text-xl text-white">{props.subTitle || ''}</p>
    </div>
  );
};
