
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import InterviewList from "../../components/Interviews/InterviewList";
import styles from "../../styles/ArticleListItem.module.css";
export async function getServerSideProps() {
  const interviewsRef = collection(db, "interviews");
  const q = query(interviewsRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const interviews = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      interviews,
    },
  };
}

const InterviewsPageContent = ({ interviews }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>Interview</span>
        </div>
      <InterviewList interviews={interviews} />
    </div>
  );
};

export default InterviewsPageContent;

