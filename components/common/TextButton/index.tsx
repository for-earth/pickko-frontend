import clsx from 'clsx';

import IconButton, { IconButtonProps, IconType } from '../IconButton';

import styles from './index.module.scss';

interface Props<T extends IconType> extends Omit<IconButtonProps<T>, 'href'> {
  label: string;
  id: string;
  textColor?: 'black' | 'white';
}

function TextButton<T extends IconType>({
  label, textColor = 'black', id, ...rest
}: Props<T>) {
  return (
    <label htmlFor={id} className={styles.textButtonWrapper}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <IconButton id={id} {...rest} />
      <span className={clsx(styles.text, styles[textColor])}>{label}</span>
    </label>
  );
}

export default TextButton;
