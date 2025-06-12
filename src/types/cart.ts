import { ProductVariant } from './product';

export type CartItemOption = {
  key: string;
  value?: string;
  label: string;
  options?: CartItemOption[];
};

export type CartItem = {
  lineId?: string;
  productId: string;
  variantId: string;
  productSlug: string;
  sku: string;
  name?: string;
  price: number;
  quantity: number;
  specs: Record<string, string>;
  thumbnail: string;
  options: CartItemOption[];
  variants: ProductVariant[];
};

export type Cart = {
  id?: string;
  items: CartItem[];
  total: number;
};
