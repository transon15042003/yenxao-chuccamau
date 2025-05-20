import type { Meta, StoryObj } from '@storybook/react';

import { InvoiceForm } from './InvoiceForm';

const meta: Meta<typeof InvoiceForm> = {
  title: 'Organisms/InvoiceForm',
  component: InvoiceForm,
  tags: ['autodocs'],
  args: {
    readonly: false
  }
};

export default meta;

type Story = StoryObj<typeof InvoiceForm>;

export const Default: Story = {};

export const Readonly: Story = {
  args: {
    readonly: true
  }
};
