import clsx from 'clsx';
import { ColorType } from 'lib/types';

import Emoji, { EmojiSize } from '../Emoji';

import styles from './index.module.scss';

type Props = {
  title: string;
  emoji: string;
  color: Exclude<ColorType, 'black' | 'white'>;
  emojiSize?: EmojiSize;
};

function SubjectTitle({
  emoji, title, color, emojiSize = 'large',
}: Props) {
  return (
    <div className={styles.subjectTitleWrapper}>
      <Emoji
        className={clsx(styles.emoji, styles[emojiSize])}
        emoji={emoji}
        emojiSize={emojiSize}
      />
      <div className={clsx(styles.title, styles[color])}>{title}</div>
    </div>
  );
}

export default SubjectTitle;
