'use client';

import { PropsWithChildren } from 'react';

import styles from './index.module.scss';

type Props = {
  backgroundColor: string;
};

function LayoutContainer({ children, backgroundColor }: PropsWithChildren<Props>) {
  return (
    <div className={styles.layoutContainer} style={{ backgroundColor }}>
      {children}
    </div>
  );
}

export default LayoutContainer;
