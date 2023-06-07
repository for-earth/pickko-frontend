import clsx from 'clsx';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type EmojiSize = 'large' | 'medium' | 'small' | 'xSmall';

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
      <div className={clsx(styles.emoji, styles[emojiSize])}>{emoji}</div>
      <div className={clsx(styles.title, styles[color])}>{title}</div>
    </div>
  );
}

export default SubjectTitle;
