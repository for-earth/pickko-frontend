import { memo, ReactElement } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import styles from './index.module.scss';

type AvatarSize = 'large' | 'medium';

interface Props {
  src?: string | null;
  alt?: string;
  size?: AvatarSize;
  priority?: boolean;
  onClick?: () => void;
}

function AvatarIcon({
  src, alt = '프로필 이미지', size = 'medium', onClick, priority = false,
}: Props): ReactElement {
  const className = clsx(styles.avatarWrapper, [styles[size]], {
    [styles.hasClickEvent]: typeof onClick === 'function',
  });

  const imageSize: Record<AvatarSize, number> = {
    large: 80,
    medium: 56,
  };

  return (
    <Image
      className={className}
      priority={priority}
      src={src || '/img_avatar_default.png'}
      width={imageSize[size]}
      height={imageSize[size]}
      alt={alt}
      data-testid="avatar-icon"
      onClick={onClick}
    />
  );
}

export default memo(AvatarIcon);
