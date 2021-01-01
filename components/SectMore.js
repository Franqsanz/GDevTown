export default function MoreInfo() {
  return (
    <>
      <section>
        <h2>Todos estos artículos los podrás encontrar en <a href="https://dev.to/franqsanz">DEV Community.</a></h2>
      </section>

      <style jsx>{`
        section {
          text-align: center;
          padding: 0.6rem;
          margin-top: 2rem;
          background: var(--grayDark);
          border-radius: 50px;
        }

        h2 {
          font-size: 1rem;
        }

        @media (max-width: 425px) {
          section {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}