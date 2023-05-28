'use client';

import clsx from 'clsx';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type Props = {
  step: number;
  color?: Exclude<ColorType, 'black' | 'white'>;
  maxStep?: number;
};

function Progress({ step, maxStep = 10, color = 'lemon' }: Props) {
  return (
    <div className={styles.progressWrapper}>
      {Array.from({ length: maxStep }, (_, i) => (i)).map((progressStep, index) => (
        <div
          key={progressStep}
          className={clsx(styles.step, styles[color], {
            [styles.doneStep]: index < step,
          })}
        />
      ))}
    </div>
  );
}

export default Progress;
