import { dynamicBlogContent } from '@/contents/SEO';
import { getBlogMarkDown } from '@/markdown/blogs';
import { CalendarSVG } from '@/svg/CalendarSVG/CalendarSVG';
import { StackSVG } from '@/svg/StackSVG/StackSVG';
import { UserSVG } from '@/svg/UserSVG/UserSVG';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generateStaticParams as getStaticParamsFromService,
  getBlogs,
  getBlogBySlug
} from 'src/services/blog.service';

import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { NewFeed } from '@/components/molecules/NewFeed';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogContent = await dynamicBlogContent(params.slug);

  return {
    title: blogContent.title,
    description: blogContent.desc,
    keywords: blogContent.keywords,
    alternates: {
      canonical: blogContent.canonicalUrl
    }
  };
}

export async function generateStaticParams() {
  return await getStaticParamsFromService();
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

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
      <div className="w-96 md:w-3/4 lg:w-1/2 text-justify">
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
      </div>
      <div className="w-full flex flex-col items-center mb-28">
        <SectionTitle heading="Bài viết liên quan" />

        <NewFeed initialBlogs={relatedBlogs} />
      </div>
    </div>
  );
}
