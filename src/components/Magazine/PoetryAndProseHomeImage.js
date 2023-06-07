import Link from "next/link";

const PoetryAndProseHomeImage = ({poem}) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = poem;
    return(
<div className="o-grid-col o-grid-col_4of12">
              <div className="c-cover">
                <div className="c-cover-media">
                 

                  <Link href={`/poems/${slug}`}>
    {imageURL && (
      <img
       src={imageURL}
        sizes="(max-width: 667px) 153px, (max-width: 1170px) calc(100vw - (15px * 2) - (2.564102564vw + 65.811965812vw)), 370px"
        srcSet=""
        alt={title}
        className="c-cover-art"
      />
      )}
    </Link>
                </div>

                <div className="c-cover-ft">
                <Link legacyBehavior href={`/poems/${slug}`}>
                <a
                    className="c-txt c-txt_minimalCta"
                  >
                    View Issue
                  </a>
                </Link>
                  
                </div>
              </div>
            </div>
    );
};

export default PoetryAndProseHomeImage;