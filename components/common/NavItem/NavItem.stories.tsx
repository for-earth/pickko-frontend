import type { Meta, StoryObj } from '@storybook/react';

import NavItem from '.';

const meta: Meta<typeof NavItem> = {
  title: 'Components/Navigation/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'pathname type: `/`, `/hearts`, `/user`',
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    href: '/',
    iconType: 'Feed',
  },
};

export const IsActive: Story = {
  args: {
    href: '/',
    iconType: 'Feed',
    isActive: true,
  },
};
