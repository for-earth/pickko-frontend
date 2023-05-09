import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    maxWidth: '327px',
  },
  argTypes: {
    maxWidth: {
      control: { type: 'text' },
    },
    profile: {
      description: '`type`이 `avatar`일 경우 값을 넣어주어야 합니다.\n',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    type: 'default',
    color: 'indigo',
    icon: '🧑‍💻',
    title: 'GOAT 개발자',
    maxWidth: undefined,
  },
};

export const AvatarCard: Story = {
  args: {
    type: 'avatar',
    color: 'indigo',
    profile: {
      company: 'picko',
      createdAt: '1분 전',
      position: '디자개발',
    },
    icon: '🧑‍💻',
    title: 'GOAT 개발자',
    maxWidth: undefined,
  },
};

export const IndigoColor: Story = {
  args: {
    type: 'avatar',
    color: 'indigo',
    profile: {
      company: 'picko',
      createdAt: '1분 전',
      position: '디자개발',
    },
    icon: '🧑‍💻',
    title: 'GOAT 개발자',
  },
};

export const YamColor: Story = {
  args: {
    type: 'avatar',
    color: 'yam',
    profile: {
      company: 'picko',
      createdAt: '1분 전',
      position: '디자개발',
    },
    icon: '🧑‍💻',
    title: 'GOAT 개발자',
  },
};

export const CloudColor: Story = {
  args: {
    type: 'avatar',
    color: 'cloud',
    profile: {
      company: 'picko',
      createdAt: '1분 전',
      position: '디자개발',
    },
    icon: '🧑‍💻',
    title: 'GOAT 개발자',
  },
};

export const ForestColor: Story = {
  args: {
    type: 'avatar',
    color: 'forest',
    profile: {
      company: 'picko',
      createdAt: '1분 전',
      position: '디자개발',
    },
    icon: '🧑‍💻',
    title: 'GOAT 개발자',
  },
};
