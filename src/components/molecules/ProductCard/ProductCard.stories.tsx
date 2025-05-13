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
      images: [],
      description: 'Bánh tổ yến',
      categories: [],
      isNew: true,
      createdAt: '2021-01-01'
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
