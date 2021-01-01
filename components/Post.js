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
          background: #2a2a2a;
          border-radius: 5px;
          padding: 1rem;
          border: 2px solid #4a4a4a;
        }
      `}</style>
    </>
  )
}
