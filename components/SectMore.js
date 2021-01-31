export default function MoreInfo() {
  return (
    <>
      <section>
        <h3>Todos estos artículos están disponibles en <a href="https://dev.to/franqsanz">DEV Community.</a></h3>
      </section>

      <style jsx>{`
        section {
          text-align: center;
          padding: 0.9rem;
          margin-top: 5rem;
          border-radius: var(--radius5);
          box-shadow: 0 0 15px var(--goldDark);
          border: 2px solid var(--goldDark);
        }

        @media (prefers-color-scheme: light) {
          section {
            background: #ededed;
            box-shadow: none;
          }
        }

        @media (prefers-color-scheme: dark) {
          section {
            background: var(--grayDark);
          }
        }

        h3 {
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}