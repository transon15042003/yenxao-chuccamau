import type { Meta, StoryObj } from '@storybook/react';

import { Certificate } from './Certificate';

const meta: Meta<typeof Certificate> = {
  title: 'Atoms/Certificate',
  component: Certificate,
  tags: ['autodocs'],
  args: {
    certificateSrc: '/certificates/Group 8245.svg',
    backgroundSrc: '',
    title: 'Vệ Sinh',
    subTitle: 'Sản xuất đạt tiêu chuẩn',
    boxWidth: 384,
    boxHeight: 386,
    certificateWidth: 130,
    certificateHeight: 122,
    className: ''
  }
};

export default meta;

type Story = StoryObj<typeof Certificate>;

export const Default: Story = {};
