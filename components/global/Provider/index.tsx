'use client';

import { PropsWithChildren } from 'react';

import { Route } from 'next';
import { usePathname } from 'next/navigation';

import Navigation from 'components/common/Navigation';

function Provider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <>
      {children}
      <Navigation activePathname={pathname as Route} isFixed />
    </>
  );
}

export default Provider;
