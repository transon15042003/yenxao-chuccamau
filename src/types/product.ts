type CategoryId = string;
export type CategorySlug = string;
export type Category = {
  id: CategoryId;
  name: string;
  slug: CategorySlug;
};

export type ProductSort = 'price-asc' | 'price-desc' | 'new';

type ProductId = string;
export type Product = {
  id: ProductId;
  name: string;
  slug: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  categories: CategoryId[];
  isNew: boolean;
  discountPercent?: number;
  discountAmount?: number;
  total?: number;
  totalSold?: number;
  createdAt: string;
};
