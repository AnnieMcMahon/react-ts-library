import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    label: 'I am blue',
    color: 'aqua'
  }
};

export const Orange: Story = {
  args: {
    label: 'I am orange',
    color: 'orange'
  }
};