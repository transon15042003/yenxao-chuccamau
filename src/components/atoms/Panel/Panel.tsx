import Image from 'next/image';

type PanelProps = {
  imageSrc?: string;
  className?: string;
};

export const Panel = (props: PanelProps) => {
  return (
    <div
      data-testid="panel-container"
      className={`w-full overflow-hidden ${props.className || ''}`}
    >
      <Image
        src={props.imageSrc || '/images/backgrounds/img_panel.svg'}
        alt="Panel background image"
        className="scale-125 -translate-x-[40px] lg:translate-x-0 lg:scale-100 w-full h-auto"
        width={1440}
        height={583}
        unoptimized={true}
        style={
          {
            // transform:'scale(1.5)'
          }
        }
      />
    </div>
  );
};
