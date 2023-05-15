
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import ShortStoryList from "../../components/ShortStory/ShortStoryList";
import styles from "../../styles/ArticleListItem.module.css";
export async function getServerSideProps() {
  const shortstoriesRef = collection(db, "shortstories");
  const q = query(shortstoriesRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const shortstories = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      shortstories,
    },
  };
}

const ShortStoriesPageContent = ({ shortstories }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>ShortStory</span>
        </div>
      <ShortStoryList shortstories={shortstories} />
    </div>
  );
};

export default ShortStoriesPageContent;

