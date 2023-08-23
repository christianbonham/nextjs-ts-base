import { ReactNode } from 'react';

import '@/styles/global.css';

interface ILayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: ILayoutProps) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
