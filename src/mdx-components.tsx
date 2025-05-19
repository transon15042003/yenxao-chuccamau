import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const MyImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={500} height={500} />;
};

export const MyHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-[30px] font-bold text-[#2A2A40]">{children}</h1>;
};

export function useMDXComponents(): MDXComponents {
  return {
    ul: (props) => <ul className="list-disc ml-6" {...props} />,
    ol: (props) => <ol className="list-decimal ml-6" {...props} />,
    MyImage,
    MyHeader
  };
}
