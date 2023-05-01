/* eslint-disable react/jsx-props-no-spreading */
import {
  HTMLProps, ReactElement, ReactNode,
} from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { ColorType } from 'lib/types';

import styles from './index.module.scss';

type ButtonSize = 'small' | 'medium';

interface Props extends Omit<HTMLProps<HTMLButtonElement | HTMLAnchorElement>, 'size'> {
  color?: Exclude<ColorType, 'black'>;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

function Button({
  href,
  color = 'lemon',
  size = 'medium',
  type = 'button',
  isLoading = false,
  fullWidth,
  disabled,
  children,
  ...rest
}: Props): ReactElement {
  const htmlProps = rest as any;

  const className = clsx(styles.buttonWrapper, {
    [styles[size]]: size,
    [styles[color]]: color,
    [styles.fullWidth]: fullWidth,
  });

  if (href) {
    return (
      <Link
        href={href}
        color={color}
        size={size}
        className={className}
        {...htmlProps}
      >
        {children}
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
      {children}
    </button>
  );
}

export default Button;
