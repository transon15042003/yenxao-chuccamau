import type { Meta, StoryObj } from '@storybook/react';

import { ChoiceButton } from './ChoiceButton';

const meta: Meta<typeof ChoiceButton> = {
  title: 'Atoms/ChoiceButton',
  component: ChoiceButton,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    selected: { control: 'boolean' },
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof ChoiceButton>;

// Story mẫu: Trạng thái mặc định của ChoiceButton
export const Default: Story = {
  args: {
    title: 'Lựa chọn mặc định',
    selected: false
  }
};

// Story mẫu: Trạng thái được chọn của ChoiceButton
export const Selected: Story = {
  args: {
    title: 'Lựa chọn đã chọn',
    selected: true
  }
};

// Story mẫu: Trạng thái với custom class
export const WithCustomClass: Story = {
  args: {
    title: 'Với class tùy chỉnh',
    className: 'bg-blue-500 text-white',
    selected: false
  }
};
