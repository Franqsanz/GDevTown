import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../components/CodeBlock';
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="GDevTown" description="My personal Blog by Franqsanz">
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}