import { CSSProperties } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Progress from '.';

const styles: CSSProperties = {
  maxWidth: '400px',
};

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    step: 4,
  },
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const LemonColor: Story = {
  args: {
    color: 'lemon',
  },
};

export const SalmonColor: Story = {
  args: {
    color: 'salmon',
  },
};

export const MustardColor: Story = {
  args: {
    color: 'mustard',
  },
};

export const MossColor: Story = {
  args: {
    color: 'moss',
  },
};

export const BerrymilkColor: Story = {
  args: {
    color: 'berrymilk',
  },
};

export const CloudColor: Story = {
  args: {
    color: 'cloud',
  },
};

export const IndigoColor: Story = {
  args: {
    color: 'indigo',
  },
};

export const BrickColor: Story = {
  args: {
    color: 'brick',
  },
};

export const ForestColor: Story = {
  args: {
    color: 'forest',
  },
};

export const YamColor: Story = {
  args: {
    color: 'yam',
  },
};
