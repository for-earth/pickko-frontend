import { ReactNode } from 'react';

import 'styles/normalize.css';
import 'styles/global.scss';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
