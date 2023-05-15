
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import AppReviewPageContent from '../../components/AppReviewPage/AppReviewPageContent';
import { collection, query, orderBy, limitToLast, getDocs, where, limit } from "firebase/firestore";

const AppReviewPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [appreviewData, setAppReviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const appreviewsRef = collection(db, 'appreviews');
    const q = query(appreviewsRef, where('slug', '==', slug), limit(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setAppReviewData(data);
        } else {
          setError('AppReview not found');
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
    <AppReviewPageContent
      title={appreviewData.title}
      author={appreviewData.author}
      publishedAt={appreviewData.publishedAt}
      content={appreviewData.content}
      imageURL={appreviewData.imageURL}
    />
  );
};

export default AppReviewPage;

