import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  args: {
    className: 'w-[400px]',
    product: {
      id: 'p1',
      slug: 'banh-to-yen',
      thumbnail: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/placeholder.png`,
      name: 'Bánh tổ yến',
      price: 10000000,
      description: 'Bánh tổ yến',
      categories: [],
      options: [],
      isNew: true,
      createdAt: '2021-01-01',
      ingredient: ['Yến mạch', 'Bột mì', 'Trứng', 'Sữa tươi', 'Đường', 'Bơ', 'Bột nở'],
      specs: [{ key: 'size', value: ['100g', '200g', '300g'] }],
      variants: [
        {
          id: 'v1',
          sku: 'v1',
          name: 'Bánh tổ yến',
          price: 10000000,
          thumbnail: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/placeholder.png`,
          specs: { size: '100g' },
          stock: 100,
          isActive: true
        },
        {
          id: 'v2',
          sku: 'v2',
          name: 'Bánh tổ yến',
          price: 10000000,
          specs: { size: '200g' },
          thumbnail: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/placeholder.png`,
          stock: 100,
          isActive: true
        }
      ]
    },
    badge: 'New',
    button: {
      label: 'Add to Cart',
      onClick: () => {}
    },
    onAddToCart: () => {}
  }
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};
