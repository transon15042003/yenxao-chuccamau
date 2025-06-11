import { CartItem as TCartItem } from '@/types/cart';
import { Product } from '@/types/product';
import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './CartItem';

const mockProduct: Product = {
  id: 'yen-chung-duong-phen',
  options: [],
  name: 'Yến chưng đường phèn',
  slug: 'yen-chung-duong-phen',
  price: 90000,
  thumbnail: '/images/products/yen-chung-tuoi/yen-chung-duong-phen.png',
  description: 'Mô tả yến chưng đường phèn',
  categories: ['yen-chung-tuoi'],
  ingredient: ['Yến tươi', 'Đường phèn'],
  specs: [
    { key: 'size', value: ['70ml', '100ml'] },
    { key: 'savour', value: ['nguyên bản', 'lá dứa'] }
  ],
  variants: [
    {
      id: 'yc-dp-70-nb',
      sku: 'yc-dp-70-nb',
      name: 'Yến chưng đường phèn 70ml - nguyên bản',
      thumbnail: '/images/products/yen-chung-tuoi/yen-chung-duong-phen.png',
      specs: { size: '70ml', savour: 'nguyên bản' },
      price: 90000,
      stock: 100,
      isActive: true
    },
    {
      id: 'yc-dp-100-nb',
      sku: 'yc-dp-100-nb',
      name: 'Yến chưng đường phèn 100ml - nguyên bản',
      thumbnail: '/images/products/yen-chung-tuoi/yen-chung-duong-phen.png',
      specs: { size: '100ml', savour: 'nguyên bản' },
      price: 120000,
      stock: 80,
      isActive: true
    },
    {
      id: 'yc-dp-70-ld',
      sku: 'yc-dp-70-ld',
      name: 'Yến chưng đường phèn 70ml - lá dứa',
      thumbnail: '/images/products/yen-chung-tuoi/yen-chung-la-dua.png',
      specs: { size: '70ml', savour: 'lá dứa' },
      price: 95000,
      stock: 50,
      isActive: true
    }
  ],
  isNew: true,
  createdAt: '2025-01-01T00:00:00.000Z'
};

const mockCartItem: TCartItem = {
  variantId: 'yc-dp-70-nb',
  productId: 'yen-chung-duong-phen',
  productSlug: 'yen-chung-duong-phen',
  options: [],
  variants: mockProduct.variants,
  sku: 'yc-dp-70-nb',
  name: 'Yến chưng đường phèn 70ml - nguyên bản',
  price: 90000,
  quantity: 2,
  specs: { size: '70ml', savour: 'nguyên bản' },
  thumbnail: '/images/products/yen-chung-tuoi/yen-chung-duong-phen.png'
};

const meta: Meta<typeof CartItem> = {
  title: 'Molecules/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  args: {
    item: mockCartItem,
    onIncrease: () => {},
    onDecrease: () => {},
    onRemove: () => {}
  }
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {};
