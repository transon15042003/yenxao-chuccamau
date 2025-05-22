import { CertificateTitle } from '../CertificateTitle';

type CertificateProps = {
  SvgIconComponent?: React.ReactNode;
  title: string;
  subTitle: string;
  className?: string;
};

export const Certificate = (props: CertificateProps) => {
  const borderWidth = 4;

  return (
    <div
      data-testid="certificate-container"
      className={`
        w-[384px] h-[386px] 
        rounded-lg m-2 // Áp dụng bo góc cho thẻ ngoài
      `}
      style={{
        background: 'linear-gradient(to bottom, #E6B522 0%, #FFF788 47%, #FFE059 100%)',
        padding: `${borderWidth}px`
      }}
    >
      <div
        className={`
          w-full h-full // Đảm bảo thẻ bên trong lấp đầy thẻ bên ngoài (trừ phần padding)
          bg-[url('/bg_certificate.png')] bg-cover bg-no-repeat bg-right-2 bg-center // Ảnh nền
          rounded-[calc(0.5rem-1px)] // Bo góc cho thẻ bên trong, nhỏ hơn 1px so với thẻ ngoài
          flex flex-col items-center justify-center // Căn giữa nội dung
        `}
        style={{
          filter: 'brightness(1.2)'
        }}
      >
        {props.SvgIconComponent}

        <CertificateTitle title={`${props.title}`} />
        <p className="w-[350px] text-center text-xl text-white">{props.subTitle || ''}</p>
      </div>
    </div>
  );
};
