import { render } from '@testing-library/react';

import Label from '.';

describe('Label', () => {
  const labelText = 'labelText';

  const renderLabel = () => render((
    <Label>
      {labelText}
    </Label>
  ));

  it('label이 나타나야만한다', () => {
    const { container } = renderLabel();

    expect(container).toHaveTextContent(labelText);
  });
});
