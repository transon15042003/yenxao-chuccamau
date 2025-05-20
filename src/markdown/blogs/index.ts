import { MDXProps } from 'mdx/types';

import Blog1Component from './blog_1.mdx';
import Blog10Component from './blog_10.mdx';
import Blog2Component from './blog_2.mdx';
import Blog3Component from './blog_3.mdx';
import Blog4Component from './blog_4.mdx';
import Blog5Component from './blog_5.mdx';
import Blog6Component from './blog_6.mdx';
import Blog7Component from './blog_7.mdx';
import Blog8Component from './blog_8.mdx';
import Blog9Component from './blog_9.mdx';

const mdxComponentsMap: Record<string, React.ComponentType<MDXProps>> = {
  'blog-1': Blog1Component,
  'blog-2': Blog2Component,
  'blog-3': Blog3Component,
  'blog-4': Blog4Component,
  'blog-5': Blog5Component,
  'blog-6': Blog6Component,
  'blog-7': Blog7Component,
  'blog-8': Blog8Component,
  'blog-9': Blog9Component,
  'blog-10': Blog10Component
};

export const getBlogMarkDown = (blogId: string) => {
  const markdownComponent = mdxComponentsMap[blogId];

  return markdownComponent || null;
};
