import type { Meta, StoryObj } from '@storybook/react';

import Label from '.';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    text: 'Label',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const WhiteLabel: Story = {
  args: {
    color: 'white',
  },
};

export const LemonLabel: Story = {
  args: {
    color: 'lemon',
  },
};

export const SalmonLabel: Story = {
  args: {
    color: 'salmon',
  },
};

export const BerrymilkLabel: Story = {
  args: {
    color: 'berrymilk',
  },
};

export const CloudLabel: Story = {
  args: {
    color: 'cloud',
  },
};

export const MossLabel: Story = {
  args: {
    color: 'moss',
  },
};

export const MustardLabel: Story = {
  args: {
    color: 'mustard',
  },
};

export const ForestLabel: Story = {
  args: {
    color: 'forest',
  },
};

export const IndigoLabel: Story = {
  args: {
    color: 'indigo',
  },
};

export const YamLabel: Story = {
  args: {
    color: 'yam',
  },
};

export const BrickLabel: Story = {
  args: {
    color: 'brick',
  },
};
