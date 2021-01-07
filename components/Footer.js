export default function Footer() {
  return (
    <>
      <footer>
        Personal blog by <a href="https://franqsanz.netlify.app/">Franco Andrés Sánchez</a>
      </footer>

      <style jsx>{`
        footer {
          padding: 1.7rem;
          text-align: center;
          font-size: 0.9rem;
          background: #0c0c0c;
        }

        @media (prefers-color-scheme: light) {
          footer {
            color: var(--colorWhite);
          }
        }
      `}</style>
    </>
  );
}