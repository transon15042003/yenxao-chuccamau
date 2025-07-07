import type { Meta, StoryObj } from '@storybook/react';

import IntroductionSection from './IntroductionSection';

const meta: Meta<typeof IntroductionSection> = {
  title: 'Organisms/IntroductionSection',
  component: IntroductionSection,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof IntroductionSection>;

export const Default: Story = {};
