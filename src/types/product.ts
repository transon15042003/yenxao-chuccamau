type CategoryId = string;
export type CategorySlug = string;
export type Category = {
  id: CategoryId;
  name: string;
  slug: CategorySlug;
};

export type ProductSort = 'price-asc' | 'price-desc' | 'newest' | 'title' | 'oldest';

export type ProductVariant = {
  id: string;
  sku: string;
  name?: string;
  thumbnail: string;
  specs: Record<string, string>;
  price: number;
  stock?: number;
  isActive: boolean;
};

export type ProductSpecifications = {
  key: string;
  value: string[];
};

export type ProductOption = {
  key: string;
  value?: string;
  label: string;
  options?: ProductOption[];
};

type ProductId = string;
export type Product = {
  id: ProductId;
  name: string;
  slug: string;
  price: number;
  thumbnail: string;
  description: string;
  categories: CategoryId[];
  ingredient: string[];
  specs: ProductSpecifications[];
  options: ProductOption[];
  variants: ProductVariant[];
  isNew: boolean;
  discountPercent?: number;
  discountAmount?: number;
  total?: number;
  totalSold?: number;
  createdAt: string;
};
