
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import EssayList from "../../components/Essay/EssayList";
import styles from "../../styles/ArticleListItem.module.css";
export async function getServerSideProps() {
  const essaysRef = collection(db, "essays");
  const q = query(essaysRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const essays = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      essays,
    },
  };
}

const EssaysPageContent = ({ essays }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>Essay</span>
        </div>
      <EssayList essays={essays} />
    </div>
  );
};

export default EssaysPageContent;

