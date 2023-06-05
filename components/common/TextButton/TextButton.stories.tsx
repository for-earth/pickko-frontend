import type { Meta, StoryObj } from '@storybook/react';

import TextButton from '.';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'radio' },
    },
  },
  args: {
    icon: 'ArrowRight',
    iconType: 'outline',
  },
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    label: 'label',
    id: 'id',
  },
};
