import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="TownDev" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
