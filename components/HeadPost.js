
export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost? 'great-title' :null} >{meta.title}</h1>
    <div className='details'>
      {isBlogPost? null: <p>{meta.description}</p>}
      <span>{meta.date}</span> •
      <span role='img' aria-label='Un Cafe'>
        ☕ {`${meta.readTime} min de lectura.`}
      </span> •
      <span>✍🏼 <a href={meta.postBy}>@Franqsanz</a></span>
    </div>

    <style jsx>{`
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .great-title {
        font-size: 2rem;
      }

      .details {
        color: #bdbdbd;
        margin-right: 1rem;
      }

      span {
        margin: 0.4rem;
      }

      .details {
        margin-bottom: 1rem;
      }

      @media (max-width: 425px) {
        .great-title {
          font-size: 1.7rem;
        }
      }
    `}</style>
  </>
)
