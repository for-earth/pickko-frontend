'use client';

import { PropsWithChildren } from 'react';

import { Route } from 'next';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import useResizeViewportHeight from 'hooks/useResizeViewportHeight';
import { HEARTS_BACKGROUND_COLORS } from 'lib/constants/color';
import { ColorType } from 'lib/types';
import useHeartsStore from 'stores/hearts';

import styles from './index.module.scss';

function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { currentStep } = useHeartsStore((state) => ({
    currentStep: state.currentStep,
  }));

  useResizeViewportHeight();

  const hasNavigation: Route[] = ['/', '/hearts', '/user'];

  const layoutBackgroundColor: Record<Route, ColorType> = {
    '/': 'white',
    '/hearts': HEARTS_BACKGROUND_COLORS[currentStep],
    '/sign-up': 'indigo',
    '/user': 'mustard',
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
