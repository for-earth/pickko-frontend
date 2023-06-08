import { ComponentProps } from 'react';

import Button from '../Button';
import Emoji, { EmojiSize } from '../Emoji';

import styles from './index.module.scss';

type Props = {
  emoji: string;
  emojiSize?: EmojiSize;
  emptyText: string;
  buttonLabel: string;
} & Omit<ComponentProps<typeof Button>, 'children'>;

function EmptyState({
  emoji, emojiSize = 'large', emptyText, buttonLabel, color = 'white', ...rest
}: Props) {
  return (
    <div className={styles.emptyState}>
      <Emoji
        emoji={emoji}
        emojiSize={emojiSize}
      />
      <div className={styles.emptyText}>{emptyText}</div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Button color={color} {...rest}>
        {buttonLabel}
      </Button>
    </div>
  );
}

export default EmptyState;
