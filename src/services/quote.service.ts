import quoteData from '@/data/quote-mock.json';
import { PaginationMetadata, QueryResourceResponse } from '@/types/common';
import { Quote } from '@/types/quote';

const allQuotes: Quote[] = quoteData as Quote[];

export const getQuotes = async (params: {
  sortByDate?: 'asc' | 'desc';
  range?: {
    from: number;
    to: number;
  };
  limit?: number;
}): Promise<QueryResourceResponse<Quote>> => {
  // Bắt đầu với một bản sao của toàn bộ dữ liệu để không làm thay đổi mảng gốc
  let resultQuotes = [...allQuotes];

  // --- 1. Áp dụng Lọc theo Rate (sử dụng tham số 'range') ---
  // Xác định rate nhỏ nhất và lớn nhất từ params hoặc dùng giá trị mặc định (4 đến 5)
  const minRate = params.range?.from ?? 4;
  const maxRate = params.range?.to ?? 5;

  // Lọc các bản ghi theo khoảng rate
  resultQuotes = resultQuotes.filter((quote) => {
    return quote.rate >= minRate && quote.rate <= maxRate;
  });

  // Lưu lại tổng số bản ghi sau khi lọc (đây là tổng số bản ghi có thể có cho các tiêu chí lọc hiện tại)
  const totalAfterFiltering = resultQuotes.length;

  // --- 2. Áp dụng Sắp xếp theo Ngày ('createdAt') ---
  // Xác định thứ tự sắp xếp (mặc định: 'desc' - mới nhất đến cũ nhất)
  const sortOrder = params.sortByDate ?? 'desc';

  // Chỉ sắp xếp nếu có bản ghi và thuộc tính createdAt tồn tại
  if (resultQuotes.length > 0 && resultQuotes[0].createdAt !== undefined) {
    resultQuotes.sort((a, b) => {
      // Chuyển chuỗi ngày tháng ISO 8601 sang đối tượng Date hoặc timestamp để so sánh
      const dateA = new Date(a.createdAt).getTime(); // getTime() trả về timestamp (số mili giây)
      const dateB = new Date(b.createdAt).getTime();

      if (sortOrder === 'asc') {
        return dateA - dateB; // Tăng dần theo thời gian (cũ nhất trước)
      } else {
        return dateB - dateA; // Giảm dần theo thời gian (mới nhất trước)
      }
    });
  }
  // Ghi chú: Nếu createdAt không tồn tại hoặc không hợp lệ, sort() có thể hoạt động không như mong đợi.
  // Việc kiểm tra a.createdAt !== undefined và b.createdAt !== undefined trong hàm sort()
  // sẽ làm phức tạp code, nên giả định dữ liệu JSON hợp lệ.

  // --- 3. Áp dụng Giới hạn số lượng bản ghi ('limit') ---
  if (params.limit !== undefined) {
    // Sử dụng slice để lấy số lượng bản ghi mong muốn từ đầu mảng đã sắp xếp
    resultQuotes = resultQuotes.slice(0, params.limit);
  }
  // Ghi chú: Nếu bạn có cả range cho phân trang (page, take) và limit,
  // logic sẽ phức tạp hơn để xác định thứ tự áp dụng slice.
  // Với params hiện tại, 'range' được hiểu là lọc theo rate, 'limit' là giới hạn số kết quả.

  // --- 4. Chuẩn bị metadata cho Response ---
  // Dựa trên interface QueryResourceResponse<T> và PaginationMetadata
  // Metadata này phản ánh kết quả sau khi LỌC (không phải sau khi giới hạn/phân trang)
  const metadata: PaginationMetadata = {
    total: totalAfterFiltering, // Tổng số bản ghi sau khi lọc theo rate
    page: 1, // Giả định là trang đầu tiên trong cách triển khai đơn giản này
    take: params.limit ?? totalAfterFiltering, // Số lượng bản ghi 'lấy' mỗi trang (đặt bằng limit hoặc tổng sau lọc nếu không giới hạn)
    totalPages: 1 // Giả định chỉ có một trang trong cách triển khai đơn giản này
  };

  // --- Trả về kết quả theo định dạng QueryResourceResponse ---
  return {
    data: resultQuotes,
    metadata: metadata
  };
};
