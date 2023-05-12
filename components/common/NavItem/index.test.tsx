import { render, screen } from '@testing-library/react';

import NavItem from '.';

describe('NavItem', () => {
  const renderNavItem = () => render((
    <NavItem href="/feed" iconType="Feed" isActive={given.isActive} />
  ));

  context('isActive가 true인 경우', () => {
    given('isActive', () => true);

    it('solid icon이 나타나야만 한다', () => {
      renderNavItem();

      expect(screen.getByTestId('solid-icon')).toBeInTheDocument();
    });
  });

  context('isActive가 false인 경우', () => {
    given('isActive', () => false);

    it('outline icon이 나타나야만 한다', () => {
      renderNavItem();

      expect(screen.getByTestId('outline-icon')).toBeInTheDocument();
    });
  });
});
