import { ReactElement } from 'react';
import HtmlHead from '@/components/HtmlHead';

interface ILayoutBasicProps {
  children?: ReactElement;
  title: string;
  metaDescription: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Layout(props: ILayoutBasicProps) {
  const { children, metaDescription, title } = props;
  return (
    <>
      <HtmlHead title={title} metaDescription={metaDescription} />
      <main>{children}</main>;
    </>
  );
}
