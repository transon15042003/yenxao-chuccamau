export const LocationSVG = ({
  className,
  background
}: {
  className?: string;
  background?: string;
}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill={background || '#E6B522'} fillOpacity="0.2" />
    <path
      d="M22 15C22 19.5 16 24 16 24C16 24 10 19.5 10 15C10 13.4087 10.6321 11.8826 11.7574 10.7574C12.8826 9.63214 14.4087 9 16 9C17.5913 9 19.1174 9.63214 20.2426 10.7574C21.3679 11.8826 22 13.4087 22 15Z"
      stroke="#D62C35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17.25C17.2426 17.25 18.25 16.2426 18.25 15C18.25 13.7574 17.2426 12.75 16 12.75C14.7574 12.75 13.75 13.7574 13.75 15C13.75 16.2426 14.7574 17.25 16 17.25Z"
      stroke="#D62C35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
