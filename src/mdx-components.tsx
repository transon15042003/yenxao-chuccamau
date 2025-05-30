import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

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
    <h1 className="font-semibold text-[40px] text-[#202020] mb-8" {...props}>
      {children}
    </h1>
  );
};

// Component cho H2
export const BlogHeading2 = ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => {
  return (
    <h2 className="font-semibold text-[24px] text-gray-900 mb-5" {...props}>
      {children}
    </h2>
  );
};

// Component cho Paragraph (P)
export const BlogParagraph = ({ children, ...props }: React.ComponentPropsWithoutRef<'p'>) => {
  return (
    <p className="font-normal text-lg text-[#202020] mb-4" {...props}>
      {children}
    </p>
  );
};

export const BlogImage = (props: React.ComponentProps<typeof Image>) => {
  const { src, alt, width, height, ...rest } = props;

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt || 'image'}
      width={width || 1400}
      height={height || 600}
      layout="responsive"
      objectFit="contain"
      className="rounded-lg shadow-md"
      {...rest}
    />
  );
};
