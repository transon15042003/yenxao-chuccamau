import { Star } from '@/svg/StarSVG/StarSVG';
import Image from 'next/image';

type QuoteProps = {
  className?: string;
  content: string;
  avatarSrc: string;
  username: string;
  rate: number;
};

export const Quote = (props: QuoteProps) => {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < props.rate; i++) {
      stars.push(<Star key={i} className="inline-block" />);
    }

    return stars;
  };

  return (
    <div className={`flex flex-col items-center ${props.className}`}>
      <p className="text-center mb-5">{props.content}</p>
      <div className="flex flex-row items-center justify-start">
        <Image
          className={`inline-block h-8 w-8 rounded-full ring-2 ring-white mr-2`}
          src={`/images/${props.avatarSrc}`}
          alt="avatar"
        />
        <p className="pb-0 mr-2 font-medium">{props.username}</p>
        <div className="flex items-center justify-center mr-2">
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
        <div>{renderRatingStars()}</div>
      </div>
    </div>
  );
};
