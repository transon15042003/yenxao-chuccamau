import BlogData from '@/data/blog.json';
import { BlogPost } from '@/types/blog';

const allBlog: BlogPost[] = BlogData as BlogPost[];

interface GetBlogsOptions {
  /** Số lượng bài viết tối đa muốn lấy */
  limit?: number;
  /** Bỏ qua bao nhiêu bài viết từ đầu */
  offset?: number;
  /** Trường muốn sắp xếp ('postedDate', 'minRead', 'viewer', 'id', 'heading') */
  sortBy?: 'postedDate' | 'minRead' | 'viewer' | 'id' | 'heading';
  /** Thứ tự sắp xếp ('asc' - tăng dần, 'desc' - giảm dần). Mặc định là 'asc'. */
  sortOrder?: 'asc' | 'desc';
  /** Lọc chỉ lấy các bài viết có ID nằm trong mảng này */
  filterByIds?: number[];
  /** Lọc chỉ lấy các bài viết mà trong mảng 'relation' của chúng có chứa ID này */
  filterByRelation?: number;
  // Bạn có thể thêm các tùy chọn lọc khác tại đây nếu cấu trúc BlogPost có thêm trường (ví dụ: category, tags)
}

export const getBlogs = async (options?: GetBlogsOptions): Promise<BlogPost[]> => {
  let result: BlogPost[] = [...allBlog];

  if (options?.filterByIds) {
    result = result.filter((blog) => options.filterByIds!.includes(blog.id));
  }

  if (options?.filterByRelation !== undefined) {
    result = result.filter((blog) => blog.relation.includes(options.filterByRelation!));
  }

  if (options?.sortBy) {
    const { sortBy, sortOrder = 'asc' } = options;
    const direction = sortOrder === 'asc' ? 1 : -1;

    result.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return direction * aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return direction * (aValue - bValue);
      }

      return 0;
    });
  }

  if (options?.offset !== undefined && options?.limit !== undefined) {
    result = result.slice(options.offset, options.offset + options.limit);
  } else if (options?.offset !== undefined) {
    result = result.slice(options.offset);
  } else if (options?.limit !== undefined) {
    result = result.slice(0, options.limit);
  }

  return result;
};

export const getBlogById = async (id: number): Promise<BlogPost | undefined> => {
  const blog = allBlog.find((b) => b.id === id);

  return blog;
};

export async function generateStaticParams() {
  // Lấy tất cả bài viết (hoặc chỉ các trường cần thiết như ID)
  const blogs = allBlog;

  return blogs.map((blog) => ({
    slug: blog.id.toString()
  }));
}
