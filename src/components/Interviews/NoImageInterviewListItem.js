// components/InterviewListItem.js
import Link from "next/link";
import styles from "../../styles/InterviewListItem.module.css";
 

const NoImageInterviewListItem = ({ interview }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = interview;

  return (
    
        <article>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap" rel="stylesheet"/>

<div className={styles["c-tier-label"]}>
<span className="c-txt c-txt_herald"></span>
</div>
<div className={styles["c-feature"]}>
{/* <div className={styles["c-feature-media"]}>
<Box ><Link href={`/interviews/${slug}`}>
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

export default NoImageInterviewListItem;
