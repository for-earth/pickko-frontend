'use client';

import clsx from 'clsx';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type Props = {
  color?: Exclude<ColorType, 'black'>;
  text: string;
};

function Label({ text, color = 'white' }: Props) {
  return (
    <div className={clsx(styles.labelWrapper, {
      [styles[color]]: color,
    })}
    >
      {text}
    </div>
  );
}

export default Label;
