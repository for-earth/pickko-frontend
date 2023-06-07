import { render } from '@testing-library/react';

import SubjectTitle from '.';

describe('SubjectTitle', () => {
  const title = 'title';

  const renderSubjectTitle = () => render((
    <SubjectTitle title={title} emoji="😌" color="berrymilk" />
  ));

  it('subject title에 대한 내용이 나타나야만 한다', () => {
    const { container } = renderSubjectTitle();

    expect(container).toHaveTextContent(title);
  });
});
