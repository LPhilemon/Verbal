
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import ArticleList from "../../components/Articles/ArticleList";
import styles from "../../styles/ArticleListItem.module.css";

export async function getServerSideProps() {
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const articles = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      articles,
    },
  };
}

const ArticlesPageContent = ({ articles }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>Article</span>
        </div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticlesPageContent;

