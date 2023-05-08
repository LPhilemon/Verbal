
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import PoemList from "../../components/Poems/PoemList";
import styles from "../../styles/ArticleListItem.module.css";
export async function getServerSideProps() {
  const poemsRef = collection(db, "poems");
  const q = query(poemsRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const poems = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      poems,
    },
  };
}

const PoemsPageContent = ({ poems }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>Poem</span>
        </div>
      <PoemList poems={poems} />
    </div>
  );
};

export default PoemsPageContent;

