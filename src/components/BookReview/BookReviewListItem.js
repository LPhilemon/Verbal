// components/ArticleListItem.js
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";
import { Container, Box, Typography } from "@material-ui/core";

const BookReviewListItem = ({ bookreview }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = bookreview;

  return (
    
    <article >
    


<div className={styles["c-tier-label"]}>
<span class="c-txt c-txt_herald">Inverbally</span>
</div>
<div className={styles["c-feature"]}>
<div className={styles["c-feature-media"]}>
<Link href={`/book-reviews/${slug}`}>
{imageURL && (
  <img
    className={styles["responsive-image"]}
    src={imageURL}
    alt={title}
  />
)}
</Link>
</div>

<div className={styles["c-feature-preamble"]}>
<span className={`${styles["c-txt"]} ${styles["c-txt_catMeta"]}`}>
  BookReview
</span>
</div>

<div className={styles["c-feature-hd"]}>
<h2
  className={`${styles["c-hdgSans"]} ${styles["c-hdgSans_5"]} ${styles["c-hdgSans_4@sm"]}`}
>
  <Link href={`/book-reviews/${slug}`}>{title}</Link>
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

export default BookReviewListItem;
