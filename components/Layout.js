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
        <meta name='Description' content={description} />
        <meta name="application-name" content={pageTitle} />
        <meta name="theme-color" content="#101010" />
        <meta name="robots" content="follow, index" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:site" content="@Franqsanz" />
        <meta name="twitter:creator" content="@Franqsanz" />
        <meta name="twitter:url" content="https://gdevtown.netlify.app/" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="GDevTown" />
        <meta property="og:url" content="https://gdevtown.netlify.app/" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />

        <link rel="canonical" href="https://gdevtown.netlify.app/" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
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
          background: #101010;
          border-radius: 0 5px 5px 0;
        }

        blockquote p {
          padding: 0.7rem;
        }

        pre {
          background: #101010;
          padding: 1rem;
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

        .language-html {
          color: gold;
        }

        .language-CSS {
          color: #17a1f6;
        }

        .language-JS,
        .language-html,
        .language-CSS {
          padding: none
          background: transparent;
          border-radius: 0;
        }
      `}</style>
      <main>
        <Header />
        <div className='content'>{children}</div>
        {/* <My /> */}
        <Footer />
      </main>
    </>
  )
}
