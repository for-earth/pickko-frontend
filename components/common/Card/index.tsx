'use client';

import { ReactNode } from 'react';

import clsx from 'clsx';
import { OutlineIcon } from 'lib/assets/icons';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type CardType = 'default' | 'avatar';

type Props<T = CardType> = {
  type: T;
  title: string;
  icon: ReactNode;
  maxWidth?: `${number}px`,
  color: Exclude<ColorType, 'black'>;
  profile: T extends 'default' ? null : {
    company: string;
    position: string;
    createdAt: string;
  };
};

function Card<T extends CardType>({
  icon, title, type, profile, color, maxWidth,
}: Props<T>) {
  const withAvatar = type === 'avatar';

  return (
    <div
      className={clsx(styles.cardWrapper, {
        [styles[type]]: type,
        [styles[color]]: color,
      })}
      style={{
        maxWidth,
      }}
    >
      <div className={styles.avatarWrapper}>
        <div className={styles.icon}>
          {icon}
        </div>
        {withAvatar && (
          <div className={styles.profileWrapper}>
            <div>
              <span>{profile?.company}</span>
              <div className={styles.divider} />
              <span>{profile?.position}</span>
            </div>
            <div>
              {profile?.createdAt}
            </div>
          </div>
        )}
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          {title}
        </div>
        {withAvatar && (
          <OutlineIcon.Share className={styles.shareIcon} data-testid="share-icon" />
        )}
      </div>
    </div>
  );
}

export default Card;
