
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import BookReviewPageContent from '../../components/BookReviewPage/BookReviewPageContent';
import { collection, query, orderBy, limitToLast, getDocs, where, limit } from "firebase/firestore";

const BookReviewPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [bookreviewData, setBookReviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const bookreviewsRef = collection(db, 'bookreviews');
    const q = query(bookreviewsRef, where('slug', '==', slug), limit(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setBookReviewData(data);
        } else {
          setError('Book Review not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || error}</div>;
  }

  return (
    <BookReviewPageContent
      title={bookreviewData.title}
      author={bookreviewData.author}
      publishedAt={bookreviewData.publishedAt}
      content={bookreviewData.content}
      imageURL={bookreviewData.imageURL}
    />
  );
};

export default BookReviewPage;

