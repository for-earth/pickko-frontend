import { render } from '@testing-library/react';

import StartAccount from '.';

describe('StartAccount', () => {
  const renderStartAccount = () => render((
    <StartAccount />
  ));

  it('"카카오계정으로 시작하기" 버튼이 나타나야만 한다', () => {
    const { container } = renderStartAccount();

    expect(container).toHaveTextContent('카카오계정으로 시작하기');
  });
});
