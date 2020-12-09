import Link from 'next/link'
import { HeadPost } from './HeadPost'

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
            <HeadPost meta={meta} />
            {/* <a>Read more &rarr;</a> */}
          </article>
        </a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 2rem;
            padding: 1rem;
            background: #2a2a2a;
            border-radius: 5px;
            // box-shadow: 0 5px 10px gray;
            border: 2px solid #4a4a4a;
          }

          article:hover {
            background: gold;
          }
        `}
      </style>
    </>
  )
}
