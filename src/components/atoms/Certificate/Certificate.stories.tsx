import { NaturalSVG } from '@/svg/CertificateSVG/NaturalSVG';
import type { Meta, StoryObj } from '@storybook/react';

import { Certificate } from './Certificate';

const meta: Meta<typeof Certificate> = {
  title: 'Atoms/Certificate',
  component: Certificate,
  tags: ['autodocs'],
  args: {
    title: 'Vệ Sinh',
    subTitle: 'Sản xuất đạt tiêu chuẩn',
    className: '',
    SvgIconComponent: <NaturalSVG />
  }
};

export default meta;

type Story = StoryObj<typeof Certificate>;

export const Default: Story = {};
