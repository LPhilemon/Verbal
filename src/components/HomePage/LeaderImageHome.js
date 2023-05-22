
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const LeaderImageHome = ({ articles }) => {
  return (
    <>
      {articles.slice(2, 3).map((article, index) => {
        const { title, author, publishedAt, excerpt, slug, imageURL } = article;
        return (
          <ul className="contentBlock" key={index}>
            <li className="contentBlock-item">
              <div className="c-hero c-hero_flexy mix-hero_offsetForce">
                <div className="c-hero-mantle">
                  <div className="c-feature">
                    <div className="c-feature-preamble c-feature-preamble_proximate">
                      <span className="c-txt c-txt_catMeta c-txt_catMeta_illuminated">
                        Article from <i>Inverbally</i> Magazine
                      </span>
                    </div>

                    <div className="c-feature-hd c-feature-hd_distant">
                      <h2 className="c-hdgSans2 c-hdgSans_1 mix-c-hdg_inverted">
                        
                          <Link href={`/articles/${slug}`}>{title}</Link>
                        
                      </h2>
                    </div>

                    <div className="c-feature-sub c-feature-sub_distant">
                      <span className="c-txt c-txt_attribution c-mix-txt_inverted">
                        By {author}
                      </span>
                    </div>

                    <div className="c-feature-abstract">
                      <div className="c-txt_abstract c-mix-txt_inverted">
                        <p>9
                          A recognition of the writers and Poets contributing to Inverbally. A special team of members.(item to be given special input page)
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end .feature --> */}
                </div>
                <div className="c-hero-media c-hero-media_primary c-hero-media_secondary@small">
                  <Link href={`/articles/${slug}`}>
                    {imageURL && (
                      <img
                        className={styles["img-responsive"]}
                        className="img-responsive o-card-media_bookAspect_img"
                        src={imageURL}
                        alt={title}
                      />
                    )}
                  </Link>
                </div>
              </div>
              {/* <!-- end .hero --> */}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default LeaderImageHome;
