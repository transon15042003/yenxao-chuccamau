import Image from 'next/image';

type PanelProps = {
  width?: number;
  height?: number;
  imageSrc?: string;
  className?: string;
};

export const Panel = (props: PanelProps) => {
  const intrinsicWidth = props.width || 1440;
  const intrinsicHeight = props.height || 583;

  return (
    <div
      data-testid="panel-container"
      className={`relative w-full h-48 md:h-auto overflow-hidden ${props.className || ''}`}
    >
      <Image
        src={props.imageSrc || '/img_panel.svg'}
        alt="Panel background image"
        width={intrinsicWidth}
        height={intrinsicHeight}
        fill={false}
        className="object-cover md:object-none"
      />
    </div>
  );
};
