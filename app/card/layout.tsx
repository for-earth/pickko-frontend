import React from 'react';

import LayoutContainer from 'components/common/LayoutContainer';

function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutContainer backgroundColor="#EFC3BC">{children}</LayoutContainer>;
}

export default Layout;
