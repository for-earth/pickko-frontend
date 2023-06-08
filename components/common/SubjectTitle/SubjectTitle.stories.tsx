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

export const Default: Story = {
  args: {
    color: 'lemon',
    emojiSize: 'large',
  },
};
