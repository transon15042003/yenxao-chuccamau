import quoteData from '@/data/quote-mock.json';
import { PaginationMetadata, QueryResourceResponse } from '@/types/common';
import { Quote } from '@/types/quote';

const allQuotes: Quote[] = quoteData as Quote[];

/**
 * Retrieves a list of quotes with optional filtering, sorting, and limiting.
 * It filters by rate range, sorts by creation date, and limits the number of results.
 * @param params - Parameters for filtering, sorting, and limiting the quotes.
 * @returns A promise that resolves to an object containing the list of quotes and pagination metadata.
 */
export const getQuotes = async (params: {
  sortByDate?: 'asc' | 'desc';
  range?: {
    from: number;
    to: number;
  };
  limit?: number;
}): Promise<QueryResourceResponse<Quote>> => {
  let resultQuotes = [...allQuotes];

  const minRate = params.range?.from ?? 4;
  const maxRate = params.range?.to ?? 5;

  resultQuotes = resultQuotes.filter((quote) => {
    return quote.rate >= minRate && quote.rate <= maxRate;
  });

  const totalAfterFiltering = resultQuotes.length;

  const sortOrder = params.sortByDate ?? 'desc';

  if (resultQuotes.length > 0 && resultQuotes[0].createdAt !== undefined) {
    resultQuotes.sort((a, b) => {
      // Chuyển chuỗi ngày tháng ISO 8601 sang đối tượng Date hoặc timestamp để so sánh
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      if (sortOrder === 'asc') {
        return dateA - dateB; // Tăng dần theo thời gian
      } else {
        return dateB - dateA; // Giảm dần theo thời gian
      }
    });
  }

  if (params.limit !== undefined) {
    resultQuotes = resultQuotes.slice(0, params.limit);
  }

  const metadata: PaginationMetadata = {
    total: totalAfterFiltering,
    page: 1,
    take: params.limit ?? totalAfterFiltering,
    totalPages: 1
  };

  return {
    data: resultQuotes,
    metadata: metadata
  };
};
