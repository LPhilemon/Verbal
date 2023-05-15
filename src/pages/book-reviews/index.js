
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import BookReviewList from "../../components/BookReview/BookReviewList";
import styles from "../../styles/ArticleListItem.module.css";
export async function getServerSideProps() {
  const bookreviewsRef = collection(db, "bookreviews");
  const q = query(bookreviewsRef, orderBy("publishedAt", "desc"));
  const querySnapshot = await getDocs(q);

  const bookreviews = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      bookreviews,
    },
  };
}

const BookReviewsPageContent = ({ bookreviews }) => {
  return (
    <div>
       <div className={styles.cFeaturePreamble}>
          <span className={`${styles.cTxt} ${styles.cTxtCatMeta}`}>BookReview</span>
        </div>
      <BookReviewList bookreviews={bookreviews} />
    </div>
  );
};

export default BookReviewsPageContent;

