import type { Meta, StoryObj } from '@storybook/react';

import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    activePathname: {
      description: 'pathname type: `/`, `/hearts`, `/user`',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const InFeedPage: Story = {
  args: {
    activePathname: '/',
  },
};

export const InHeartsPage: Story = {
  args: {
    activePathname: '/hearts',
  },
};

export const InUserPage: Story = {
  args: {
    activePathname: '/user',
  },
};
