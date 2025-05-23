import { AppConfig } from 'src/AppConfig';

type TextSTackProps = {
  label: string;
  details?: string | string[];
  labelClassName?: string;
  detailClassName?: string;
};

export const TextStack = (props: TextSTackProps) => {
  const normalizedLabel = props.label.toLowerCase();

  const renderDetails = (detail: string, index?: number) => {
    switch (normalizedLabel) {
      case 'email':
        return (
          <a
            key={index}
            href={`mailto:${detail}`}
            className={`font-normal text-wrap text-base text-[#2A2A40] block hover:text-blue-600 ${props.detailClassName || ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {detail}
          </a>
        );
      case 'điện thoại':
        return (
          <a
            key={index}
            href={`tel:${detail}`}
            className={`font-normal text-base text-[#2A2A40] block hover:text-blue-600 ${props.detailClassName || ''}`}
          >
            {detail}
          </a>
        );
      case 'địa chỉ':
        return (
          <a
            key={index}
            href={AppConfig.addressURL}
            className={`font-normal text-base text-[#2A2A40] block hover:text-blue-600 ${props.detailClassName || ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {detail}
          </a>
        );
      default:
        return (
          <p
            key={index}
            className={`font-normal text-base text-[#2A2A40] ${props.detailClassName || ''}`}
          >
            {detail}
          </p>
        );
    }
  };

  return (
    <div>
      <p className={`font-semibold text-base text-[#2A2A40] ${props.labelClassName || ''}`}>
        {props.label}
      </p>
      {Array.isArray(props.details)
        ? props.details.map((detail, index) => renderDetails(detail, index))
        : props.details && renderDetails(props.details)}
    </div>
  );
};
