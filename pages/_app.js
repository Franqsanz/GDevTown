import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="DevTown" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
