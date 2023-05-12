import { ReactNode } from 'react';

import Provider from 'components/global/Provider';

function Template({ children }: { children: ReactNode }) {
  return (
    <Provider>{children}</Provider>
  );
}

export default Template;
