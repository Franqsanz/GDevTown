
export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <img src={meta.img} alt={meta.alt} />
    <div className={isBlogPost ? 'contentDetailsNone' :'contentDetails'}>
      <h1 className={isBlogPost? 'great-title' :null} >{meta.title}</h1>
      <div className='details'>
        {isBlogPost? null: <p>{meta.description}</p>}
        <span>{meta.date}</span> •
        <span role='img' aria-label='Un Cafe'>
          ☕ {`${meta.readTime} min de lectura.`}
        </span> •
        <span>✍🏼 <a href={meta.postBy}>@Franqsanz</a></span>
      </div>
      {isBlogPost ? null : <a className='aMore'>Leer más &rarr;</a>}
    </div>

    <style jsx>{`
      .contentDetails {
        padding: 1rem;
      }

      .contentDetailsNone {
        padding: 0.9rem 0 1rem 0;
      }

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 0;
      }

      .great-title {
        font-size: 2rem;
      }

      .details {
        margin-right: 1rem;
      }

      .aMore {
        color: var(--goldDark);
        font-size: 1.14rem;
        font-weight: bold;
      }

      @media (prefers-color-scheme: light) {
        .details {
          color: #464646;
        }

        .aMore {
          color: #1c6d9f;
        }
      }

      @media (prefers-color-scheme: dark) {
        .details {
          color: #bdbdbd;
        }
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
