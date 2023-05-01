import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'label',
    },
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
};

export default meta;

type Story = StoryObj<typeof Button>;

export const MediumSize: Story = {
  args: {
    size: 'medium',
    children: 'Label',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    children: 'Label',
  },
};

export const WithFullWidthSize: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    fullWidth: true,
  },
};

export const WithLink: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    href: '/test',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    disabled: true,
  },
};

export const WhiteColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'white',
  },
};

export const LemonColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'lemon',
  },
};

export const SalmonColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'salmon',
  },
};

export const MustardColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'mustard',
  },
};

export const MossColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'moss',
  },
};

export const BerrymilkColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'berrymilk',
  },
};

export const CloudColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'cloud',
  },
};

export const IndigoColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'indigo',
  },
};

export const BrickColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'brick',
  },
};

export const ForestColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'forest',
  },
};

export const YamColor: Story = {
  args: {
    size: 'medium',
    children: 'Label',
    color: 'yam',
  },
};
