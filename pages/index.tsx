import { ReactElement, PropsWithChildren } from 'react';
import Layout from '@/components/Layout';

import styles from './index.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home(props: PropsWithChildren<{}>) {
  return <div className={styles.intro}>Let Us Begin</div>;
}

Home.getLayout = function (page: ReactElement) {
  const meta = 'Let Us Begin, Next JS, Typescript, ESlint + Prettier';
  return (
    <Layout title="Let Us Begin!" metaDescription={meta}>
      <Home>{page}</Home>
    </Layout>
  );
};
