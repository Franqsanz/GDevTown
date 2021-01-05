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
          margin-top: 4 b rem;
          background: var(--grayDark);
          border-radius: var(--radius5);
          border: 2px solid var(--goldDark);
        }

        h3 {
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}