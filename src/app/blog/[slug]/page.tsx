import { getBlogMarkDown } from '@/markdown/blogs';
import { CalendarSVG } from '@/svg/CalendarSVG/CalendarSVG';
import { StackSVG } from '@/svg/StackSVG/StackSVG';
import { UserSVG } from '@/svg/UserSVG/UserSVG';
import { notFound } from 'next/navigation';
import { generateStaticParams, getBlogs, getBlogBySlug } from 'src/services/blog.service';

import { New } from '@/components/atoms/New';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';

// pre-render
export { generateStaticParams };

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params;

  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const BlogContentComponent = getBlogMarkDown(blog.id);

  if (!BlogContentComponent) notFound();

  const relatedBlogs = await getBlogs({
    filterByIds: blog.relation,
    limit: 3
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full mb-9">
        <Breadcrumb
          items={[
            {
              label: 'Blog',
              href: '/blog'
            },
            {
              label: slug,
              href: slug
            }
          ]}
        />
      </div>
      <div className="w-96 md:w-1/2 text-justify">
        <div className="flex flex-row flex-wrap items-center mb-3">
          <div className="flex flex-row items-center mr-6">
            <CalendarSVG className="mr-1.5" />
            <p>{blog.postedDate}</p>
          </div>
          <div className="flex flex-row items-center mr-6">
            <StackSVG className="mr-1.5" />
            <p>{blog.minRead} phút</p>
          </div>
          <div className="flex flex-row items-center">
            <UserSVG className="mr-1.5" />
            <p>{blog.viewer}</p>
          </div>
        </div>

        {<BlogContentComponent />}

        <hr className="mb-14 mt-[90px] border-2 border-black" />

        <SectionTitle heading="Bài viết liên quan" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-10 mt-9 mb-28">
          {relatedBlogs.map((relatedBlog) => (
            <New
              key={relatedBlog.id}
              imageUrl={
                relatedBlog.thumbnailUrl ? relatedBlog.thumbnailUrl : '/images/background/news.png'
              }
              date={relatedBlog.postedDate}
              readTime={`${relatedBlog.minRead} min`}
              title={relatedBlog.title}
              description={
                relatedBlog.description ? relatedBlog.description.substring(0, 100) + '...' : ''
              }
              linkUrl={`/blog/${relatedBlog.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
