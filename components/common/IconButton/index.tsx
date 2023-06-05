/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { HTMLProps, ReactElement } from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { OutlineIcon, SolidIcon } from 'lib/assets/icons';
import { ColorType } from 'lib/types';

import Spinner from '../Spinner';

import styles from './index.module.scss';

type ButtonSize = 'small' | 'medium';
export type IconType = 'solid' | 'outline';

export interface IconButtonProps<T extends IconType> extends Omit<HTMLProps<HTMLButtonElement | HTMLAnchorElement>, 'size'> {
  color?: Exclude<ColorType, 'black'> | 'ghost';
  size?: ButtonSize;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button';
  iconType: T;
  icon: T extends 'outline' ? keyof typeof OutlineIcon : keyof typeof SolidIcon
}

function IconButton<T extends IconType>({
  href,
  color = 'lemon',
  size = 'medium',
  type = 'button',
  isLoading = false,
  icon,
  iconType,
  disabled,
  ...rest
}: IconButtonProps<T>): ReactElement {
  const htmlProps = rest as any;

  const whiteColors: (ColorType | 'ghost')[] = ['forest', 'indigo', 'yam', 'brick'];

  const className = clsx(styles.buttonWrapper, {
    [styles[size]]: size,
    [styles[color]]: color,
  });

  const SvgIcon = iconType === 'solid' ? SolidIcon[icon as keyof typeof SolidIcon] : OutlineIcon[icon];

  const iconComponent = isLoading ? (
    <Spinner
      isLoading={isLoading}
      size={size}
      color={whiteColors.includes(color) ? 'white' : 'black'}
    />
  ) : <SvgIcon className={clsx(styles[`svg-${size}`], styles[color], styles[iconType])} />;

  if (href) {
    return (
      <Link
        href={href}
        color={color}
        size={size}
        className={className}
        {...htmlProps}
      >
        {iconComponent}
      </Link>
    );
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={className}
      disabled={disabled || isLoading}
      {...htmlProps}
    >
      {iconComponent}
    </button>
  );
}

export default IconButton;
