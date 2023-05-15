
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import InterviewPageContent from '../../components/InterviewPage/InterviewPageContent';
import { collection, query, orderBy, limitToLast, getDocs, where, limit } from "firebase/firestore";

const InterviewPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [interviewData, setInterviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const interviewsRef = collection(db, 'interviews');
    const q = query(interviewsRef, where('slug', '==', slug), limit(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setInterviewData(data);
        } else {
          setError('Interview not found');
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
    <InterviewPageContent
      title={interviewData.title}
      author={interviewData.author}
      publishedAt={interviewData.publishedAt}
      content={interviewData.content}
      imageURL={interviewData.imageURL}
    />
  );
};

export default InterviewPage;

