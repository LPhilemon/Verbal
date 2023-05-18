
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const LeaderImageHome = ({ articles }) => {
  return (
    <>
      {articles.slice(2, 3).map((article, index) => {
        const { title, author, publishedAt, excerpt, slug, imageURL } = article;
        return (
          <ul class="contentBlock" key={index}>
            <li class="contentBlock-item">
              <div class="c-hero c-hero_flexy mix-hero_offsetForce">
                <div class="c-hero-mantle">
                  <div class="c-feature">
                    <div class="c-feature-preamble c-feature-preamble_proximate">
                      <span class="c-txt c-txt_catMeta c-txt_catMeta_illuminated">
                        Article from <i>Inverbally</i> Magazine
                      </span>
                    </div>

                    <div class="c-feature-hd c-feature-hd_distant">
                      <h2 class="c-hdgSans2 c-hdgSans_1 mix-c-hdg_inverted">
                        
                          <Link href={`/articles/${slug}`}>{title}</Link>
                        
                      </h2>
                    </div>

                    <div class="c-feature-sub c-feature-sub_distant">
                      <span class="c-txt c-txt_attribution c-mix-txt_inverted">
                        By {author}
                      </span>
                    </div>

                    <div class="c-feature-abstract">
                      <div class="c-txt_abstract c-mix-txt_inverted">
                        <p>9
                          A recognition of the writers and Poets contributing to Inverbally. A special team of members.(item to be given special input page)
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end .feature --> */}
                </div>
                <div class="c-hero-media c-hero-media_primary c-hero-media_secondary@small">
                  <Link href={`/articles/${slug}`}>
                    {imageURL && (
                      <img
                        className={styles["img-responsive"]}
                        class="img-responsive o-card-media_bookAspect_img"
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
