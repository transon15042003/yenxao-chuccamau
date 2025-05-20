'use client';
import { BlogPost } from '@/types/blog';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getLatestBlogs } from 'src/services/blog.service';

import { New } from '@/components/atoms/New';

import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

export const KnowledgeSection = () => {
  const router = useRouter();

  const [latestBlogs, setLatestBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogs = await getLatestBlogs();
        setLatestBlogs(blogs);
      } catch (error) {
        console.error('Lỗi khi tải bài viết mới nhất:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full h-auto md:h-[917px] flex flex-col items-center justify-between py-[70px] relative overflow-hidden">
      {/* Phần tử div riêng cho ảnh nền, xoay và làm mờ */}
      <div
        className="absolute w-full h-full
                   bg-[url('/images/backgrounds/scrath.png')] bg-contain bg-bottom bg-no-repeat opacity-[.07] z-0"
        style={{
          transform: 'rotate(65.33deg) scale(1.5)',
          top: '-120px',
          left: '-600px'
        }}
      >
        {/* Div này chỉ dùng cho hiệu ứng nền */}
      </div>

      <SectionTitle
        heading="Tin Tức & Hướng Dẫn"
        subHeading="Chia sẻ kiến thức và bí quyết sử dụng Yến hiệu quả mỗi ngày."
      />

      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center relative z-10 my-9">
        {loading ? (
          // Hiển thị trạng thái tải
          // <p>Đang tải bài viết mới nhất...</p>
          <div className="w-full flex items-center justify-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : latestBlogs.length > 0 ? (
          // Nếu có bài viết, map và hiển thị
          latestBlogs.map((blog) => (
            <New
              key={blog.id}
              imageUrl={blog.thumbnailUrl ? blog.thumbnailUrl : '/images/background/news.png'}
              date={blog.postedDate}
              readTime={`${blog.minRead} min`}
              title={blog.title}
              description={blog.description ? blog.description.substring(0, 100) + '...' : ''}
              linkUrl={`/blog/${blog.slug}`}
            />
          ))
        ) : (
          // Nếu không tìm thấy bài viết nào
          <p>Không tìm thấy bài viết mới nào.</p>
        )}
      </div>

      <button
        type="button"
        className="border-2 border-black px-4 py-2 rounded-lg text-[#2A2A40] font-semibold text-lg hover:bg-black hover:text-white relative z-10" // Thêm class z-index
        onClick={() => router.push('/products')}
      >
        Xem tất cả sản phẩm
      </button>
    </div>
  );
};
