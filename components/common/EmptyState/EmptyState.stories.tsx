import type { Meta, StoryObj } from '@storybook/react';

import EmptyState from '.';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    href: {
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'radio' },
    },
    fullWidth: {
      table: {
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
  },
  args: {
    buttonLabel: 'label',
    emptyText: 'description.text',
    emoji: '🚫',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {},
};
