'use client';

import { ComponentProps } from 'react';

import { Route } from 'next';

import clsx from 'clsx';

import NavItem from '../NavItem';

import styles from './index.module.scss';

type Props = {
  activePathname: Route;
  isFixed: boolean;
};

const ACTIVE_PATHNAME = ['/hearts', '/', '/user'];

const navItems: Omit<ComponentProps<typeof NavItem>, 'isActive'>[] = [
  { href: '/', iconType: 'Feed' },
  { href: '/hearts', iconType: 'Heart' },
  { href: '/user', iconType: 'User' },
];

function Navigation({ activePathname, isFixed = false }: Props) {
  if (!ACTIVE_PATHNAME.includes(activePathname)) {
    return null;
  }

  return (
    <div data-testid="navigation" className={clsx(styles.navigationContainer, { [styles.fixed]: isFixed })}>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationItems}>
          {navItems.map(({ href, iconType }) => (
            <NavItem
              key={href}
              href={href}
              iconType={iconType}
              isActive={activePathname === href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
