import type { Meta, StoryObj } from '@storybook/react';

import AvatarIcon from '.';

const meta: Meta<typeof AvatarIcon> = {
  title: 'Components/Avatar',
  component: AvatarIcon,
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'image url',
    },
    priority: {
      description: 'next image `priority` property',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarIcon>;

export const DefaultAvatar: Story = {};

export const HasAvatarImageUrl: Story = {
  args: {
    src: './img_avatar_default.png',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
};
