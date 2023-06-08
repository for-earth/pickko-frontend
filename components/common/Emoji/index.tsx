import clsx from 'clsx';

import styles from './index.module.scss';

export type EmojiSize = 'large' | 'medium' | 'small' | 'xSmall';

type Props = {
  emoji: string;
  emojiSize?: EmojiSize;
  className?: string;
};

function Emoji({ className, emoji, emojiSize = 'large' }: Props) {
  return (
    <div className={clsx(className, styles[emojiSize])}>{emoji}</div>
  );
}

export default Emoji;
