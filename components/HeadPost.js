import Link from 'next/link';

export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    {isBlogPost?
      <Link href='/'>
        <a className="abackList">← Volver a la Lista</a>
      </Link>
    :null}
    {isBlogPost?
      <a className="viewImg" href={meta.img}>
        <img src={meta.img} alt={meta.alt} />
      </a>
    :null}
    <div className={isBlogPost? 'contentDetailsNone' :'contentDetails'}>
      <h1 className={isBlogPost? 'great-title' :null}>{meta.title}</h1>
      <div className='details'>
        {isBlogPost? null: <p className="pDescription">{meta.description}</p>}
        <span>{meta.date}</span> •
        <span role='img' aria-label='Un Cafe'>
          ☕ {`${meta.readTime} min de lectura.`}
        </span>
      </div>
    </div>

    <style jsx>{`
      .contentDetails {
        padding: 1rem;
      }

      .contentDetailsNone {
        padding: 0.9rem 0 0.2rem 0;
      }

      h1 {
        font-size: 1.7rem;
        font-weight: 700;
        margin-top: 0;
        color: var(--colorWhite);
        line-height: 1.45;
      }

      .great-title {
        font-size: 2.5rem;
        line-height: 1.45;
      }

      .details {
        font-size: 0.9rem;
      }

      .aMore,
      .abackList {
        color: var(--goldDark);
        font-size: 1.14rem;
        font-weight: bold;
        border-bottom: none;
      }

      .pDescription {
        font-size: 1rem;
      }

      @media (prefers-color-scheme: light) {
        h1 {
          color: var(--colorGray);
        }

        .details {
          color: #464646;
        }

        h1 {
          color: var(--colorGray);
        }

        .aMore,
        .abackList {
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

      @media (max-width: 425px) {
        .great-title {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </>
)
