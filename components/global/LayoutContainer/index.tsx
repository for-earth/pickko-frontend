'use client';

import { PropsWithChildren } from 'react';

import clsx from 'clsx';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type Props = {
  backgroundColor: ColorType;
};

// TODO - 삭제
function LayoutContainer({ children, backgroundColor }: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(styles.layoutContainer, styles[backgroundColor])}
    >
      {children}
    </div>
  );
}

export default LayoutContainer;
