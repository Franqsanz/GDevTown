import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div>
        <span>¡UPS! error 404 😕</span>
        <Link href="/">Volver al inicio</Link>
      </div>

      <style jsx>{`
        div {
          text-align: center;
          font-size: 1.125rem;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        span {
          font-size: 3rem;
          padding: 0.7rem;
        }

        @media (prefers-color-scheme: light) {
          div {
            background: #ededed;
          }
        }
      `}</style>
    </>
  );
}