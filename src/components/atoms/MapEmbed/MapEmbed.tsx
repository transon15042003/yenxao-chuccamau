import { forwardRef } from 'react';

type MapEmbedProps = {
  embedUrl: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const MapEmbed = forwardRef<HTMLDivElement, MapEmbedProps>((props, ref) => {
  const { embedUrl, className, ...restProps } = props;

  return (
    <div className={className} {...restProps} ref={ref}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
});

MapEmbed.displayName = 'MapEmbed';
