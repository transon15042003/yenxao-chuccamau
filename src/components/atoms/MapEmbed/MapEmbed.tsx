type MapEmbedProps = {
  embedUrl: string;
  className?: string;
  width?: string | number;
  height?: string | number;
};

export const MapEmbed = (props: MapEmbedProps) => (
  <div className={props.className}>
    <iframe
      src={props.embedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);
