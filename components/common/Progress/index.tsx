'use client';

import { CSSProperties } from 'react';

import styles from './index.module.scss';

type Props = {
  value: number;
};

const markers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Progress({ value }: Props) {
  const dividerStyle = {
    position: 'absolute',
    height: '10px',
    borderRight: '1px solid black',
    pointerEvents: 'none',
    zIndex: 10,
    top: '4px',
  } as CSSProperties;

  const rangeDividers = [];

  for (let i = 1 + 1; i < 10; i += 1) {
    const leftPosition = `${((i - 1) / (10 - 1)) * 100}%`;
    const divider = <div key={i} style={{ ...dividerStyle, left: leftPosition }} />;
    rangeDividers.push(divider);
  }

  return (
    <div className={styles.progressWrapper}>
      {rangeDividers}
      <input className={styles.progress} type="range" min={1} max={10} list="markers" defaultValue={value} />
    </div>
  );
}

export default Progress;
