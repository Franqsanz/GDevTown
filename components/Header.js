import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav>
        <Link href='/'>
          <a><h1>DevTown</h1></a>
        </Link>
        <ul>
          <li><a href="https://twitter.com/franqsanz">Twitter</a></li>
          <li><a href="https://linkedin.com/in/franqsanzdev">LinkedIn</a></li>
          <li><a href="https://dev.to/franqsanz">Dev</a></li>
        </ul>
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

        ul {
          display: flex;
        }

        li {
          list-style: none;
        }
      `}</style>
    </>
  )
}
