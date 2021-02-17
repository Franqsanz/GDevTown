import Layout from "../components/Layout";

export default function App({ Component, pageProps, title }) {
  return (
    <Layout pageTitle="GDevTown" description="My personal Blog by Franqsanz">
      <Component {...pageProps} />
    </Layout>
  );
}