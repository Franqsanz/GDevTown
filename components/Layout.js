import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='Description' content={description}></meta>

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content=""></meta>
        <meta name="twitter:site" content="@Franqsanz"></meta>
        <meta name="twitter:creator" content="@Franqsanz"></meta>
        <meta name="twitter:url" content=""></meta>
        <meta name="twitter:description" content=""></meta>
        <meta name="twitter:image" content=""></meta>

        <meta property="og:title" content=""></meta>
        <meta property="og:site_name" content=""></meta>
        <meta property="og:url" content=""></meta>
        <meta property="og:locale" content="es_AR"></meta>
        <meta property="og:description" content=""></meta>
        <meta property="og:image" content=""></meta>
        <meta property="og:image:width" content=""></meta>
        <meta property="og:image:height" content=""></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
          // background: #e4e4e4;
          background: #1a1a1a;
          color: #fff;
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
          color: #fff;
          text-decoration: none;
        }

        .content {
          max-width: 700px;
          margin: 2rem auto;
          // background: #eeeeee;
          padding: 1rem;
        }

        pre {
          background: #101010;
          padding: 1rem;
          border-radius: 5px;
          overflow: auto;
        }

        code {
          color: gold;
        }
      `}</style>
      <main>
        <Header />
        <div className='content'>{children}</div>
      </main>
    </>
  )
}
