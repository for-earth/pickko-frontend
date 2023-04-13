import { ReactNode } from 'react';

import Layout from 'components/global/Layout';

import 'styles/normalize.css';
import 'styles/global.scss';

export const metadata = {
  title: 'picko',
  description: 'picko app',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css" />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;
