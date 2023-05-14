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
  const imageSize: Record<AvatarSize, number> = {
    large: 80,
    medium: 56,
  };

  return (
    // TODO - 클릭 이벤트 생길 시 추가
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={clsx(styles.avatarWrapper, {
        [styles.hasClickEvent]: typeof onClick === 'function',
      })}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Image
        className={clsx([styles[size]])}
        priority={priority}
        src={src || '/img_avatar_default.png'}
        data-testid="avatar-icon"
        width={imageSize[size]}
        height={imageSize[size]}
        alt={alt}
      />
    </div>
  );
}

export default memo(AvatarIcon);
