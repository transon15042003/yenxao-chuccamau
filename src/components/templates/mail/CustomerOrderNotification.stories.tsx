import { Meta, StoryObj } from '@storybook/react';

import { CustomerOrderNotification } from './CustomerOrderNotification';

const meta: Meta<typeof CustomerOrderNotification> = {
  title: 'Templates/CustomerOrderNotification',
  tags: ['autodocs'],
  component: CustomerOrderNotification
};

export default meta;

type Story = StoryObj<typeof CustomerOrderNotification>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
    province: 'California',
    district: 'Los Angeles'
  }
};
