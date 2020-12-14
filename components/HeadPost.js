
export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost? 'great-title' :null} >{meta.title}</h1>
    <div className='details'>
      {isBlogPost? null: <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role='img' aria-label='one coffee'>
        ☕ {`${meta.readTime} min de lectura.`}
      </span>
      <span>
        ✍🏼 <a href={meta.postBy}>@Franqsanz</a>
      </span>
    </div>
    {/* <div className='Tags'>
      <span className='cssTags'>{meta.tags.css}</span>
      <span className='jsTags'>{meta.tags.js}</span>
    </div> */}
    <style jsx>{`
      // .cssTags,
      // .jsTags {
      //   background: #1a73e8;
      //   color: #ffffff;
      //   padding: 0.3rem;
      //   border-radius: 5px;
      // }

      // .jsTags {
      //   background: #ffc700;
      //   color: #ffffff;
      // }

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .great-title {
        font-size: 2rem;
      }

      .details span {
        color: #bdbdbd;
        margin-right: 1rem;
      }

      .details {
        margin-bottom: 1rem;
      }
    `}</style>
  </>
)
