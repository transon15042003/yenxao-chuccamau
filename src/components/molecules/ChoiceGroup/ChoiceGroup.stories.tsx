import type { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup } from './ChoiceGroup';

const meta: Meta<typeof ChoiceGroup> = {
  title: 'Molecules/ChoiceGroup',
  component: ChoiceGroup,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    maxWidth: { control: 'number' }
  }
};

export default meta;

type Story = StoryObj<typeof ChoiceGroup>;

export const Default: Story = {};
