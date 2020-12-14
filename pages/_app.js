import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="DevTown" description="Mi Blog Personal">
      <Component {...pageProps} />
    </Layout>
  );
}
