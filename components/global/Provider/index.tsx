'use client';

import { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

import Navigation from 'components/common/Navigation';

function Provider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <>
      {children}
      <Navigation activePathname={pathname} />
    </>
  );
}

export default Provider;
