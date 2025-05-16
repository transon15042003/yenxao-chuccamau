type CertificateTitleProps = {
  title: string;
  fontSize?: number;
};
export const CertificateTitle = (props: CertificateTitleProps) => {
  const finalFontSize = props.fontSize || 30;

  return (
    <p
      className={`
      text-[${finalFontSize}px] 
      font-bold 
      bg-gradient-to-b
      from-[#E6B522]
      via-[#FFF788]
      to-[#FFE059]
      bg-clip-text
      text-transparent
      `}
    >
      {props.title}
    </p>
  );
};
