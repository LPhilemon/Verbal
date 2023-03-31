// components/ArticleListItem.js
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const ArticleListItem = ({ article }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = article;

  return (
    <article>
      <div className={styles["c-tier-label"]}>
        <span class="c-txt c-txt_herald"></span>
      </div>
      <div className={styles["c-feature"]}>
        <div className={styles["c-feature-media"]}>
          <Link href={`/articles/${slug}`}>
            {imageURL && (
              <img
                src={imageURL}
                alt={title}
                sizes="(max-width: 667px) calc(100vw - (15px * 2)), (max-width: 1170px) calc(100vw - (15px * 2) - (44.957264957vw) - (2.478632478vw * 2)), 570px"
              />
            )}
          </Link>
        </div>

        <div className={styles["c-feature-preamble"]}>
          <span className={`${styles["c-txt"]} ${styles["c-txt_catMeta"]}`}>
            Article
          </span>
        </div>

        <div className={styles["c-feature-hd"]}>
          <h2
            className={`${styles["c-hdgSans"]} ${styles["c-hdgSans_5"]} ${styles["c-hdgSans_4@sm"]}`}
          >
            <Link href={`/articles/${slug}`}>{title}</Link>
          </h2>
        </div>

        <div className={styles["c-feature-sub"]}>
          <span className={`${styles["c-txt"]} ${styles["c-txt_attribution"]}`}>
            By {author}
          </span>
        </div>

        <div>
          <p className={styles["c-feature-bd"]}>{excerpt}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleListItem;
