import { StaticSEOContent } from '@/contents/SEO';
import { getBlogs } from '@/services/blog.service';
import { BlogPost } from '@/types/blog';
import { Metadata } from 'next';

import { Breadcrumb } from '@/components/molecules/Breadcrumb/Breadcrumb';
import { BlogCard } from '@/components/organisms/BlogCard/BlogCard';
import { BlogPagination } from '@/components/organisms/BlogPagination/BlogPagination';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.blogsPage.title,
    description: StaticSEOContent.blogsPage.desc,
    keywords: StaticSEOContent.blogsPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/blog`
    }
  };
}

const POSTS_PER_PAGE = 6;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const currentPage = Math.max(1, Number(searchParams.page) || 1);
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  const allPosts = await getBlogs();
  const pageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const currentPosts = await getBlogs({
    limit: POSTS_PER_PAGE,
    offset: offset,
    sortBy: 'postedDate',
    sortOrder: 'desc'
  });

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumb disableLastChild={true} items={[{ label: 'Blog', href: '/blog' }]} />

      {/* Danh sách bài viết */}
      <div className="flex flex-col justify-center items-center my-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2.5 lg:gap-8">
          {currentPosts.map((post: BlogPost) => (
            <BlogCard
              key={post.id}
              thumbnailUrl={post.thumbnailUrl || ''}
              title={post.title || ''}
              description={post.description || ''}
              postedDate={post.postedDate || ''}
              minRead={post.minRead || 0}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <BlogPagination pageCount={pageCount} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}
