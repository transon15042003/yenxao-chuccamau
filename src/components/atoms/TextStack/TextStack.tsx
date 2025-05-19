type TextSTackProps = {
  label: string;
  details?: string | string[];
  labelClassName?: string;
  detailClassName?: string;
};

export const TextStack = (props: TextSTackProps) => (
  <div>
    <p className={`font-semibold text-base text-[#2A2A40] ${props.labelClassName || ''}`}>
      {props.label}
    </p>{' '}
    {/* Ví dụ style mặc định + class từ prop */}
    {Array.isArray(props.details) ? (
      props.details.map((detail, index) => (
        <p
          key={index}
          className={`font-normal text-base text-[#2A2A40] ${props.detailClassName || ''}`}
        >
          {detail}
        </p>
      ))
    ) : (
      <p className={`font-normal text-base text-[#2A2A40] ${props.detailClassName || ''}`}>
        {props.details}
      </p>
    )}
  </div>
);
