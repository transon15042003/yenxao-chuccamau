import { StoryObj } from '@storybook/react';

import { UserSVG } from './UserSVG';

export default {
  title: 'icons/UserSVG',
  component: UserSVG,
  args: {}
};

type Story = StoryObj<typeof UserSVG>;

export const Default: Story = {};
