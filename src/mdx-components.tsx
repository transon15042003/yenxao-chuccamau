import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const MyTestImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={500} height={500} />;
};

export const MyTestHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-2xl font-bold text-primary">{children}</h1>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    MyTestImage,
    MyTestHeader
  };
}
