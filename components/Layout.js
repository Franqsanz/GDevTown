import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name="application-name" content={pageTitle} />
        <meta name='image' content="/icons/favicon32.png" />
        <meta name="apple-mobile-web-app-title" content={pageTitle} />
        <meta name="theme-color" content="#101010" />
        <meta name="robots" content="follow, index" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:site" content="@Franqsanz" />
        <meta name="twitter:creator" content="@Franqsanz" />
        <meta name="twitter:url" content="https://gdevtown.netlify.app/" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://gdevtown.netlify.app/icons/og.jpg" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:url" content="https://gdevtown.netlify.app/" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://gdevtown.netlify.app/icons/og.jpg" />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="650" />

        <link rel="canonical" href="https://gdevtown.netlify.app/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon180.png" />
        <link rel="icon" type="image/png" href="/icons/favicon32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/icons/favicon16.png" sizes="16x16" />
        <title>{pageTitle}</title>
      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');

        ::-webkit-scrollbar {
          width: 7px;
          background: none;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: #ffc700;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
          background: #1a1a1a;
          color: #f3f3f3;
          font-size: 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
        }

        a {
          color: #17a1f6;
        }

        .content {
          max-width: 700px;
          margin: 1rem auto;
          padding: 0.7rem;
        }

        p {
          line-height: 1.77;
        }

        blockquote {
          border-left: 6px solid gold;
          margin-inline-start: 0;
          margin-inline-end: 0;
          background: #101010;
          border-radius: 0 5px 5px 0;
        }

        blockquote p {
          padding: 0.7rem;
        }

        pre {
          background: #101010;
          padding: 1rem 0.7rem 1rem 0.7rem;
          border-radius: 5px;
          overflow: auto;
        }

        code {
          font-family: 'Inconsolata', monospace;
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.66;
          color: gold;
          padding: 0.3rem;
          background: #101010;
          border-radius: 5px;
        }

        .language-JS {
          color: tomato;
        }

        .language-JSON {
          color: orange;
        }

        .language-SH {
          color: lime;
        }

        .language-html {
          color: gold;
        }

        .language-CSS {
          color: #17a1f6;
        }

        .language-GraphQL {
          color: #ff87e1;
        }

        .language-TOML {
          color: #63c9c1;
        }

        .language-JS,
        .language-html,
        .language-CSS {
          padding: none
          background: transparent;
          border-radius: 0;
        }

        img {
          max-width: 100%;
          border-radius: 5px;
        }

        hr {
          background: #17a1f6;
          width: 100px;
          height: 1px;
          border: 1px solid #0188db;
          border-radius: 5px;
          margin-block-start: 1.5em;
          margin-block-end: 1.5em;
        }
      `}</style>
      <main>
        <Header />
        <div className='content'>{children}</div>
        <Footer />
      </main>
    </>
  )
}
