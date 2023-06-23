import NextHead from 'next/head';

interface IHtmlHeadProps {
  title: string;
  metaDescription: string;
}

const slug = 'NextJS Typescript Base';
const seperator = ' - ';

export default function Head(props: IHtmlHeadProps) {
  const { title, metaDescription } = props;

  return (
    <NextHead>
      <title>
        {slug}
        {seperator}
        {title}
      </title>
      <meta key="description" name="description" content={metaDescription} />
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  );
}
