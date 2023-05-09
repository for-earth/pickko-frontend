import { render, screen } from '@testing-library/react';

import Card from '.';

describe('Card', () => {
  const renderCard = () => render((
    <Card
      icon="🙇‍♂️"
      type={given.type}
      profile={given.profile}
      title="title"
      color="indigo"
    />
  ));

  context('type이 default인 경우', () => {
    given('type', () => 'default');
    given('profile', () => null);

    it('share icon은 나타나지 않야만한다', () => {
      renderCard();

      expect(screen.queryByTestId('share-icon')).not.toBeInTheDocument();
    });
  });

  context('type이 avatar인 경우', () => {
    const profile = {
      company: 'company',
      position: 'position',
      createdAt: '1분 전',
    };

    given('type', () => 'avatar');
    given('profile', () => profile);

    it('프로필 정보가 나타나야만 한다', () => {
      const { container } = renderCard();

      expect(container).toHaveTextContent(profile.company);
    });
  });
});
