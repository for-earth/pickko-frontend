import type { Meta, StoryObj } from '@storybook/react';

import Emoji from '.';

const meta: Meta<typeof Emoji> = {
  title: 'Components/Emoji',
  component: Emoji,
  tags: ['autodocs'],
  args: {
    emoji: '😌',
  },
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const Large: Story = {
  args: {
    emojiSize: 'large',
  },
};

export const Medium: Story = {
  args: {
    emojiSize: 'medium',
  },
};

export const Small: Story = {
  args: {
    emojiSize: 'small',
  },
};

export const XSmall: Story = {
  args: {
    emojiSize: 'xSmall',
  },
};
