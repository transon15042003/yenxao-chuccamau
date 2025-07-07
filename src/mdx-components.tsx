import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

import { cn } from './lib/utils';

export const MyImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={500} height={500} />;
};

export const MyHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-[30px] font-bold text-[#2A2A40]">{children}</h1>;
};

export const EmptyLine = ({ count = 1 }: { count?: number }) => {
  return <div style={{ height: `${count * 10}px` }} />;
};

export function useMDXComponents(): MDXComponents {
  return {
    ul: (props) => <ul className="list-disc ml-6" {...props} />,
    ol: (props) => <ol className="list-decimal ml-6" {...props} />,
    MyImage,
    MyHeader,
    BlogHeading1,
    BlogHeading2,
    BlogParagraph,
    BlogImage,
    table: (props) => <table className="w-full border-collapse" {...props} />,
    th: (props) => <th className="px-4 py-2 text-left border border-gray-200" {...props} />,
    td: (props) => <td className="px-4 py-2 text-left border border-gray-200" {...props} />,
    EmptyLine
  };
}

export const BlogHeading1 = ({ children, ...props }: React.ComponentPropsWithoutRef<'h1'>) => {
  return (
    <p
      className={cn(
        'text-left',
        'font-semibold text-[40px]',
        'leading-[48px]',
        'text-blog-1',
        'mb-1 md:mb-8'
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// Component cho H2
export const BlogHeading2 = ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => {
  return (
    <h2
      className={cn('text-left', 'font-semibold text-2xl', 'leading-[32px]', 'text-blog-2', 'mb-5')}
      {...props}
    >
      {children}
    </h2>
  );
};

export const BlogHeading3 = ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => {
  return (
    <h3 className="text-left font-medium text-xl leading-[32px] text-blog-3" {...props}>
      {children}
    </h3>
  );
};

// Component cho Paragraph (P)
export const BlogParagraph = ({ children, ...props }: React.ComponentPropsWithoutRef<'p'>) => {
  return (
    <p className="text-left font-normal text-lg leading-[30px] text-blog-1 mb-5 md:mb-7" {...props}>
      {children}
    </p>
  );
};

interface BlogImageProps extends React.ComponentProps<typeof Image> {
  caption?: string;
  captionDirection?: 'flex-col' | 'flex-row' | 'flex-col-reverse' | 'flex-row-reverse';
  captionClass?: string;
  containerClass?: string;
  imageClass?: string;
}

export const BlogImage = (props: BlogImageProps) => {
  const {
    src,
    alt,
    width,
    height,
    caption,
    captionDirection = 'flex-col',
    captionClass,
    containerClass,
    imageClass,
    ...rest
  } = props;

  if (!src) return null;

  return (
    <div
      className={cn(
        'flex',
        'items-center justify-start',
        captionDirection,
        'mb-[46px] md:mb-[42px]',
        containerClass
      )}
    >
      <div className={cn('w-full rounded-lg shadow overflow-hidden', imageClass)}>
        <Image
          src={src}
          alt={alt || 'image'}
          width={width || 1400}
          height={height || 600}
          layout="responsive"
          objectFit="contain"
          {...rest}
        />
      </div>

      {caption && (
        <p
          className={cn(
            'text-left text-lg text-blog-3',
            captionDirection.includes('col') ? 'mx-2 mt-1' : 'my-2 mx-1',
            captionClass
          )}
        >
          {caption}
        </p>
      )}
    </div>
  );
};
