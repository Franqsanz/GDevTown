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
        <a>
          <article>
            <HeadPost meta={meta} key={meta} />
          </article>
        </a>
      </Link>

      <style jsx>{`
        a {
          text-decoration: none;
        }

        article {
          margin-bottom: 2rem;
          border-radius: var(--radius5);
          cursor: pointer;
        }

        article:hover {
          box-shadow: 5px 5px 15px #ffc700, -5px -5px 15px #17a1f6;
          transition: .2s;
        }

        @media (prefers-color-scheme: light) {
          article {
            background: #f6f6f6;
            border: 2px solid #cecece;
          }

          a {
            color: #1c6d9f;
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
