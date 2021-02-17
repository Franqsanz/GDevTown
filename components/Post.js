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
        <a aria-label="Leer más">
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
          margin-bottom: 0.8rem;
          border-radius: var(--radius5);
          cursor: pointer;
        }

        @media (prefers-color-scheme: light) {
          a {
            color: #1c6d9f;
          }
        }
      `}</style>
    </>
  )
}
