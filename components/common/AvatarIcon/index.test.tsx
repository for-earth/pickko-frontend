import { fireEvent, render, screen } from '@testing-library/react';

import AvatarIcon from '.';

describe('AvatarIcon', () => {
  const handleClick = jest.fn();
  const generateNextImageUrl = (url: string) => `/_next/image?url=%2F${url}&w=128&q=75`;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderAvatarIcon = () => render((
    <AvatarIcon
      src={given.avatarUrl}
      onClick={given.onClick}
    />
  ));

  context('클릭이벤트가 존재하는 경우', () => {
    given('avatarUrl', () => '');
    given('onClick', () => handleClick);

    it('클릭 이벤트가 발생해야만 한다', () => {
      renderAvatarIcon();

      fireEvent.click(screen.getByTestId('avatar-icon'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  context('프로필 이미지가 존재하지 않는 경우', () => {
    given('avatarUrl', () => '');

    it('기본 프로필 이미지가 나타나야 한다', () => {
      renderAvatarIcon();

      expect(screen.getByTestId('avatar-icon')).toHaveAttribute('src', generateNextImageUrl('img_avatar_default.png'));
    });
  });

  context('프로필 이미지가 존재하는 경우', () => {
    given('avatarUrl', () => '/test.com');

    it('작성자의 이미지가 나타나야 한다', () => {
      renderAvatarIcon();

      expect(screen.getByTestId('avatar-icon')).toHaveAttribute('src', generateNextImageUrl('test.com'));
    });
  });
});
