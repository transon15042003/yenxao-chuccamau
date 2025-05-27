import { getBlogs } from '@/services/blog.service';
import { BlogPost } from '@/types/blog';

import { Breadcrumb } from '@/components/molecules/Breadcrumb/Breadcrumb';
import { BlogCard } from '@/components/organisms/BlogCard/BlogCard';
import { BlogPagination } from '@/components/organisms/BlogPagination/BlogPagination';

const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
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
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />

      {/* Danh sách bài viết */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
