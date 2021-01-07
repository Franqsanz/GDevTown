import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
    <>
      <article>
        <HeadPost meta={meta} />
        <Link href={'/blog' + link}>
          <a>Leer más &rarr;</a>
        </Link>
      </article>

      <style jsx>{`
        a {
          color: var(--goldDark);
          font-size: 1.14rem;
        }

        article {
          margin-bottom: 2rem;
          border-radius: var(--radius5);
          padding: 1rem;
        }

        @media (prefers-color-scheme: light) {
          article {
            background: #d6d6d6;
            border: 2px solid #ababab;
          }

          a {
            color: #17a1f6;
          }
        }

        @media (prefers-color-scheme: dark) {
          article {
            background: #2a2a2a;
            border: 2px solid #4a4a4a;
          }
        }

      `}</style>
    </>
  )
}
