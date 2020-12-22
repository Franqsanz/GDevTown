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
          color: #ffc700;
        }

        article {
          margin-bottom: 2rem;
          padding: 1rem;
          background: #2a2a2a;
          border-radius: 5px;
          border: 2px solid #4a4a4a;
        }
      `}</style>
    </>
  )
}
