import Image from 'next/image';

type PanelProps = {
  imageSrc?: string;
  className?: string;
};

export const Panel = (props: PanelProps) => {
  return (
    <div data-testid="panel-container" className={`w-full ${props.className || ''}`}>
      <Image
        src={props.imageSrc || '/img_panel.svg'}
        alt="Panel background image"
        className="w-full h-auto"
        width={500}
        height={200}
        unoptimized={true}
      />
    </div>
  );
};
