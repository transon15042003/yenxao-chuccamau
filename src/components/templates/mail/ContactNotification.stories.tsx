import { Meta, StoryObj } from '@storybook/react';

import { ContactNotification } from './ContactNotification';

const meta: Meta<typeof ContactNotification> = {
  title: 'Templates/ContactNotification',
  tags: ['autodocs'],
  component: ContactNotification
};

export default meta;

type Story = StoryObj<typeof ContactNotification>;

export const Default: Story = {
  args: {
    name: 'Vo Nguyen Nhat Khuong'
  }
};
