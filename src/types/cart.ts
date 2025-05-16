export type CartItem = {
  productId: string;
  sku: string;
  name?: string;
  price: number;
  quantity: number;
  specs: Record<string, string>;
  thumbnail: string;
};

export type Cart = {
  items: CartItem[];
};
