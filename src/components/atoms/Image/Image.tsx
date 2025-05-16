import Image from 'next/image';

import { cn } from '@/lib/utils';

interface ImgProps {
  width?: number;
  height?: number;
  src: string;
  alt?: string;
  className?: string;
}

const Img = ({ width = 100, height = 100, className, alt = '', src }: ImgProps) => (
  <Image
    className={cn('w-full h-auto', className)}
    width={width}
    height={height}
    src={src}
    alt={alt}
  />
);

export default Img;
