export default function MoreInfo() {
  return (
    <>
      <section>
        <h3>Todos estos artículos los podrás encontrar en <a href="https://dev.to/franqsanz">DEV Community.</a></h3>
      </section>

      <style jsx>{`
        section {
          text-align: center;
          padding: 0.9rem;
          margin-top: 2rem;
          background: linear-gradient(0deg, var(--grayDark), 45%, var(--goldDark));
          border-radius: 5px;
          color: var(--black);
        }

        h3 {
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}