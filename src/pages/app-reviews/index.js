
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import AppReviewList from "../../components/AppReview/AppReviewList";
import styles from "../../styles/ArticleListItem.module.css";
export async function getServerSideProps() {
  const appreviewsRef = collection(db, "appreviews");
  const q = query(appreviewsRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const appreviews = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      appreviews,
    },
  };
}

const AppReviewsPageContent = ({ appreviews }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>AppReview</span>
        </div>
      <AppReviewList appreviews={appreviews} />
    </div>
  );
};

export default AppReviewsPageContent;

