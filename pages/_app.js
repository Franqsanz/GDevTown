import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="GDevTown" description="Mi Blog Personal por Franqsanz">
      <Component {...pageProps} />
    </Layout>
  );
}
