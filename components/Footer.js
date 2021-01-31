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
          font-size: 0.8rem;
          background: #0c0c0c;
        }

        @media (prefers-color-scheme: light) {
          footer {
            background: #ededed;
          }
        }
      `}</style>
    </>
  );
}