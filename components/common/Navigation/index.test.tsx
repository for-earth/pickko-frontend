import { render, screen } from '@testing-library/react';

import Navigation from '.';

describe('Navigation', () => {
  const ACTIVE_PATHNAME = ['/hearts', '/', '/user'];

  const renderNavigation = () => render((
    <Navigation activePathname={given.activePathname} />
  ));

  context(`pathname이 ${ACTIVE_PATHNAME.join(', ')}인 경우`, () => {
    given('activePathname', () => '/');

    it('navigation이 나타나야만 한다', () => {
      renderNavigation();

      expect(screen.getByTestId('navigation')).toBeInTheDocument();
    });
  });

  context(`pathname이 ${ACTIVE_PATHNAME.join(', ')}가 아닌 경우`, () => {
    given('activePathname', () => '/test');

    it('아무것도 안보여야만 한다', () => {
      const { container } = renderNavigation();

      expect(container).toBeEmptyDOMElement();
    });
  });
});
