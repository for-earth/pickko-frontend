'use client';

import Link from 'next/link';

import { OutlineIcon, SolidIcon } from 'lib/assets/icons';

import styles from './index.module.scss';

type Props = {
  href: __next_route_internal_types__.RouteImpl<unknown>;
  iconType: 'Feed' | 'Heart' | 'User';
  isActive: boolean;
};

function NavItem({ href, iconType, isActive }: Props) {
  const DynamicOutlineIcon = OutlineIcon[iconType];
  const DynamicSolidIcon = SolidIcon[iconType];

  return (
    <>
      {isActive ? (
        <Link href={href} className={styles.iconWrapper}>
          <DynamicSolidIcon className={styles.selected} data-testid="solid-icon" />
        </Link>
      ) : (
        <Link href={href} className={styles.iconWrapper}>
          <DynamicOutlineIcon className={styles.unselected} data-testid="outline-icon" />
        </Link>
      )}
    </>
  );
}

export default NavItem;
