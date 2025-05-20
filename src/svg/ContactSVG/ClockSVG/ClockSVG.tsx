export const ClockSVG = ({ className }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#E6B522" fillOpacity="0.2" />
    <path
      d="M16.5 24C20.6421 24 24 20.6421 24 16.5C24 12.3579 20.6421 9 16.5 9C12.3579 9 9 12.3579 9 16.5C9 20.6421 12.3579 24 16.5 24Z"
      stroke="#D62C35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16.5 12V16.5L19.5 18" stroke="#D62C35" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
