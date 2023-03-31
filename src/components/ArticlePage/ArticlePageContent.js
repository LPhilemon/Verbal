
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../../firebase/clientApp";
import { collection, query, orderBy, limitToLast, getDocs, where } from "firebase/firestore";
import styles from "../../styles/ArticleListItem.module.css";

const ArticlePageContent = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, where("slug", "==", slug), orderBy("publishedAt", "desc"), limitToLast(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setError("Article not found");
        } else {
          const data = querySnapshot.docs[0].data();
          setArticleData(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div>Loading article content...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!articleData) {
    return <div>Article not found</div>;
  }

  const { title, author, publishedAt, content, imageURL } = articleData;

  return (
    <article>
      <div className={styles["c-feature"]}>
        <div className={styles["c-feature-media"]}>
          
            {imageURL && (
              <img
                src={imageURL}
                alt={title}
                sizes="(max-width: 667px) calc(100vw - (15px * 2)), (max-width: 1170px) calc(100vw - (15px * 2) - (44.957264957vw) - (2.478632478vw * 2)), 570px"
              />
            )}
         
        </div>

        <div className={styles["c-feature-preamble"]}>
          <span className={`${styles["c-txt"]} ${styles["c-txt_catMeta"]}`}>Article</span>
        </div>

        <div className={styles["c-feature-hd"]}>
          <h2 className={`${styles["c-hdgSans"]} ${styles["c-hdgSans_5"]} ${styles["c-hdgSans_4_sm"]}`}>
        {title}
          </h2>
        </div>

        <div className={styles["c-featureSub"]}>
          <span className={`${styles["c-txt"]} ${styles["c-txt_attribution"]}`}>
            By {author}   
          </span>
          <br></br>
          <span className={`${styles["c-txt"]} ${styles["c-txt_attribution"]}`}>  
             Written On: {publishedAt}
          </span>
        </div>

        <div className={styles["c-feature-bd"]}>
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticlePageContent;

