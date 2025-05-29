type CategoryId = string;
export type CategorySlug = string;
export type Category = {
  id: CategoryId;
  name: string;
  slug: CategorySlug;
};

export type ProductSort = 'price-asc' | 'price-desc' | 'new';

export type ProductVariant = {
  sku: string;
  name?: string;
  thumbnail: string;
  specs: Record<string, string>;
  price: number;
  stock: number;
  isActive: boolean;
};

export type ProductSpecifications = {
  key: string;
  value: string[];
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
  variants: ProductVariant[];
  isNew: boolean;
  discountPercent?: number;
  discountAmount?: number;
  total?: number;
  totalSold?: number;
  createdAt: string;
};
