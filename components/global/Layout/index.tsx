'use client';

import { PropsWithChildren } from 'react';

import { Route } from 'next';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import useResizeViewportHeight from 'hooks/useResizeViewportHeight';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useResizeViewportHeight();

  const hasNavigation: Route[] = ['/', '/hearts', '/user'];

  const layoutBackgroundColor: Record<Route, ColorType> = {
    '/': 'berrymilk',
    '/hearts': 'forest',
    '/sign-up': 'indigo',
    '/user': 'mustard',
    '/progress': 'moss',
  };

  return (
    <div className={clsx(styles.layoutWrapper, hasNavigation && styles.hasNavigation)}>
      <div
        className={clsx(styles.layoutContainer, styles[layoutBackgroundColor[pathname as Route]])}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
