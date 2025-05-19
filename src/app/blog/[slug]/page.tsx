// src/app/blog/[slug]/page.tsx

import { CalendarSVG } from '@/svg/CalendarSVG/CalendarSVG';
import { StackSVG } from '@/svg/StackSVG/StackSVG';
import { UserSVG } from '@/svg/UserSVG/UserSVG';
import parse from 'html-react-parser';
import { notFound } from 'next/navigation';
import { getBlogById, generateStaticParams } from 'src/services/blog.service';

import { New } from '@/components/atoms/New';

// pre-render
export { generateStaticParams };

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blogId = parseInt(params.slug, 10);

  const blog = await getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  const htmlContentString = blog.content.join('\n');

  return (
    <div className="w-full flex flex-row justify-center">
      <div className="w-3/4">
        <div className="flex flex-row items-center mb-3">
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

        {parse(htmlContentString)}

        <hr />

        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center relative z-10 my-9">
          <New
            imageUrl="news.png"
            date="May 13, 2025"
            readTime="5 min"
            title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
            description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
            linkUrl=""
          />
          <New
            imageUrl="news.png"
            date="May 13, 2025"
            readTime="5 min"
            title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
            description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
            linkUrl=""
          />
          <New
            imageUrl="news.png"
            date="May 13, 2025"
            readTime="5 min"
            title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
            description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
            linkUrl=""
          />
        </div>
      </div>
    </div>
  );
}
