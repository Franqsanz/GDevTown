import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav>
        <Link href='/'>
          <a>
            <h1>FranqBlog</h1>
          </a>
        </Link>
        <div>
          <Link href='/'>
            <a>Blog</a>
          </Link>
          <Link href='/'>
            <a>About</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: gold;
          color: #000000;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }

        nav a {
          margin-right: 1rem;
          text-decoration: none;
          color: #000000;
        }

        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
