import type { Meta, StoryObj } from '@storybook/react';

import { SelectInput } from './SelectInput';

const meta: Meta<typeof SelectInput> = {
  title: 'Molecules/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  args: {
    label: 'Danh mục sản phẩm',
    placeholder: 'Chọn danh mục sản phẩm',
    options: [
      { label: 'Tất cả', value: 'all' },
      { label: 'Yến Chưng Tươi', value: 'yen-chung-tuoi' },
      { label: 'Yến Sợi Non Chưng Tươi', value: 'yen-soi-non-chung-tuoi' }
    ],
    required: true,
    disabled: false,
    errorMessage: 'Danh mục sản phẩm không được để trống',
    value: ''
  }
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'yen-chung-tuoi',
    errorMessage: ''
  }
};
