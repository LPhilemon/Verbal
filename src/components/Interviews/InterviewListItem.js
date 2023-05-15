// components/ArticleListItem.js
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";
import { Container, Box, Typography } from "@material-ui/core";

const InterviewListItem = ({ interview }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = interview;

  return (
    
    <article >
    


<div className={styles["c-tier-label"]}>
<span class="c-txt c-txt_herald">Inverbally</span>
</div>
<div className={styles["c-feature"]}>
<div className={styles["c-feature-media"]}>
<Link href={`/interviews/${slug}`}>
{imageURL && (
  <img
    className={styles["responsive-image"]}
    src={imageURL}
    alt={title}
  />
)}
<div class="o-mediaEnclosure">
                  {imageURL && (
                    <img
                      className="article-responsive-img"
                      src={imageURL}
                      alt={title}
                      style={{
                        display: "block",
                        marginBottom: "24px"
                      }}
                    />
                  )}
                </div>
</Link>
</div>

<div className={styles["c-feature-preamble"]}>
<span className={`${styles["c-txt"]} ${styles["c-txt_catMeta"]}`}>
  Interview
</span>
</div>

<div className={styles["c-feature-hd"]}>
<h2
  className={`${styles["c-hdgSans"]} ${styles["c-hdgSans_5"]} ${styles["c-hdgSans_4@sm"]}`}
>
  <Link href={`/interviews/${slug}`}>{title}</Link>
</h2>
</div>

<div className={styles["c-feature-sub"]}>
<span className={`${styles["c-txt"]} ${styles["c-txt_attribution"]}`}>
  By {author}
</span>
</div>

<div>
<p className="cormorant-garamond">{excerpt}</p>
</div>
</div>

</article>
      
  );
};

export default InterviewListItem;
