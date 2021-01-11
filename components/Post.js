import Link from 'next/link';
import { HeadPost } from './HeadPost';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
    <>
      <Link href={'/blog' + link}>
        <article>
          <HeadPost meta={meta} />
            <a>Leer más &rarr;</a>
        </article>
      </Link>

      <style jsx>{`
        a {
          color: var(--goldDark);
          font-size: 1.14rem;
          font-weight: bold;
        }

        article {
          margin-bottom: 2rem;
          border-radius: var(--radius5);
          padding: 1rem;
          cursor: pointer;
        }

        article:hover {
          box-shadow: 5px 5px 15px #ffc700, -5px -5px 15px #17a1f6;
          transition: .2s;
        }

        @media (prefers-color-scheme: light) {
          article {
            background: #e2e2e2;
            border: 2px solid #ababab;
          }

          a {
            color: #0f527b;
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
