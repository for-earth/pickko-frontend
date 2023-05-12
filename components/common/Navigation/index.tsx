'use client';

import NavItem from '../NavItem';

import styles from './index.module.scss';

type Props = {
  activePathname: string;
};

const ACTIVE_PATHNAME = ['/hearts', '/', '/user'];

function Navigation({ activePathname }: Props) {
  if (!ACTIVE_PATHNAME.includes(activePathname)) {
    return null;
  }

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationItems}>
        <NavItem href="/" iconType="Feed" isActive={activePathname === '/'} />
        <NavItem href="/hearts" iconType="Heart" isActive={activePathname === '/hearts'} />
        <NavItem href="/user" iconType="User" isActive={activePathname === '/user'} />
      </div>
    </div>
  );
}

export default Navigation;
