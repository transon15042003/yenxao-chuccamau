import type { Meta, StoryObj } from '@storybook/react';

import { Inbox } from './ContactForm';

const meta: Meta<typeof Inbox> = {
  title: 'Organisms/Inbox',
  component: Inbox,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof Inbox>;

export const Default: Story = {};
