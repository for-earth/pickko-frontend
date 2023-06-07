import { CSSProperties } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SubjectTitle from '.';

const styles: CSSProperties = {
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const meta: Meta<typeof SubjectTitle> = {
  title: 'Components/SubjectTitle',
  component: SubjectTitle,
  tags: ['autodocs'],
  args: {
    title: '{{title}}',
    emoji: '😌',
  },
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

type Story = StoryObj<typeof SubjectTitle>;

export const LargeEmoji: Story = {
  args: {
    color: 'lemon',
    emojiSize: 'large',
  },
};

export const MediumEmoji: Story = {
  args: {
    color: 'lemon',
    emojiSize: 'medium',
  },
};

export const SmallEmoji: Story = {
  args: {
    color: 'lemon',
    emojiSize: 'small',
  },
};

export const XSmallEmoji: Story = {
  args: {
    color: 'lemon',
    emojiSize: 'xSmall',
  },
};
