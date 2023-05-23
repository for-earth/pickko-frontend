import type { Meta, StoryObj } from '@storybook/react';

import IconButton from '.';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
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
  },
  args: {
    icon: 'ArrowRight',
    iconType: 'outline',
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};

export const WithLink: Story = {
  args: {
    size: 'medium',
    href: '/test',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    size: 'medium',
    isLoading: true,
  },
};

export const WhiteColor: Story = {
  args: {
    size: 'medium',
    color: 'white',
  },
};

export const LemonColor: Story = {
  args: {
    size: 'medium',
    color: 'lemon',
  },
};

export const SalmonColor: Story = {
  args: {
    size: 'medium',
    color: 'salmon',
  },
};

export const MustardColor: Story = {
  args: {
    size: 'medium',
    color: 'mustard',
  },
};

export const MossColor: Story = {
  args: {
    size: 'medium',
    color: 'moss',
  },
};

export const BerrymilkColor: Story = {
  args: {
    size: 'medium',
    color: 'berrymilk',
  },
};

export const CloudColor: Story = {
  args: {
    size: 'medium',
    color: 'cloud',
  },
};

export const IndigoColor: Story = {
  args: {
    size: 'medium',
    color: 'indigo',
  },
};

export const BrickColor: Story = {
  args: {
    size: 'medium',
    color: 'brick',
  },
};

export const ForestColor: Story = {
  args: {
    size: 'medium',
    color: 'forest',
  },
};

export const YamColor: Story = {
  args: {
    size: 'medium',
    color: 'yam',
  },
};

export const GhostColor: Story = {
  args: {
    size: 'medium',
    color: 'ghost',
  },
};
