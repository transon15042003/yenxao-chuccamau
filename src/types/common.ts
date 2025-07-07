export type Option = {
  label: string;
  value: string;
};

export type QueryPage = {
  page: number;
  take?: number;
};

export type QueryResource<T> = QueryPage & {
  sortField?: keyof T;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  isAll?: boolean;
};

export type PaginationMetadata = {
  total: number;
  page: number;
  take: number;
  totalPages: number;
};

export type QueryResourceResponse<T> = {
  data: T[];
  metadata: PaginationMetadata;
};
