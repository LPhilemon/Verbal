// components/BookReviewListItem.js
import Link from "next/link";
import styles from "../../styles/BookReviewListItem.module.css";
 

const NoImageBookReviewListItem = ({ bookreview }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = bookreview;

  return (
    
        <article>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap" rel="stylesheet"/>

<div className={styles["c-tier-label"]}>
<span class="c-txt c-txt_herald"></span>
</div>
<div className={styles["c-feature"]}>
{/* <div className={styles["c-feature-media"]}>
<Box ><Link href={`/book-reviews/${slug}`}>
{imageURL && (
  <img
    className={styles["responsive-image"]}
    src={imageURL}
    alt={title}
  />
)}
</Link></Box>
</div> */}

<div className={styles["c-feature-preamble"]}>
<span className={`${styles["c-txt"]} ${styles["c-txt_catMeta"]}`}>
  BookReview
</span>
</div>

<div className={styles["c-feature-hd"]}>
<h2
  className={`${styles["c-hdgSans"]} ${styles["c-hdgSans_5"]} ${styles["c-hdgSans_4@sm"]}`}
>
  <Link href={`/bookreviews/${slug}`}>{title}</Link>
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

export default NoImageBookReviewListItem;
