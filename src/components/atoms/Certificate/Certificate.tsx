import { CertificateTitle } from '../CertificateTitle';

type CertificateProps = {
  SvgIconComponent?: React.ReactNode;
  title: string;
  subTitle: string;
  className?: string;
};

export const Certificate = (props: CertificateProps) => {
  return (
    <div
      data-testid="certificate-container"
      className={`w-[384px] h-[386px] ${props.className} bg-[url('/bg_certificate.png')] bg-cover bg-no-repeat bg-right flex flex-col items-center justify-center border border-4 border-yellow-500 rounded-lg m-2`}
    >
      {props.SvgIconComponent}

      <CertificateTitle title={`${props.title}`} />
      <p className="w-[350px] text-center text-xl text-white">{props.subTitle || ''}</p>
    </div>
  );
};
