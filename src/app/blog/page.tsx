'use client';

import blogData from '@/data/blog.json';
import React, { useState, useEffect } from 'react';

import { Breadcrumb } from '@/components/molecules/Breadcrumb/Breadcrumb';
import { Pagination } from '@/components/molecules/Pagination/Pagination';
import { BlogCard } from '@/components/organisms/BlogCard/BlogCard';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const posts = blogData;
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />

      {/* Danh sách bài viết */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogCard
              key={post.id}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
              description={post.description}
              postedDate={post.postedDate}
              minRead={post.minRead}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination
            pageCount={pageCount}
            forcePage={currentPage}
            onPageChange={({ selected }) => setCurrentPage(selected)}
          />
        </div>
      </div>
    </div>
  );
}
