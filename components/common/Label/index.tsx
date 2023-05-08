'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type Props = {
  color?: Exclude<ColorType, 'black'>;
  children: ReactNode;
};

function Label({ children, color = 'white' }: Props) {
  return (
    <div className={clsx(styles.labelWrapper, {
      [styles[color]]: color,
    })}
    >
      {children}
    </div>
  );
}

export default Label;
