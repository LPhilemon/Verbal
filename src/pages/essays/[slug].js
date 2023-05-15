
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import EssayPageContent from '../../components/EssayPage/EssayPageContent';
import { collection, query, orderBy, limitToLast, getDocs, where, limit } from "firebase/firestore";

const EssayPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [essayData, setEssayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const essaysRef = collection(db, 'essays');
    const q = query(essaysRef, where('slug', '==', slug), limit(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setEssayData(data);
        } else {
          setError('Essay not found');
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
    <EssayPageContent
      title={essayData.title}
      author={essayData.author}
      publishedAt={essayData.publishedAt}
      content={essayData.content}
      imageURL={essayData.imageURL}
    />
  );
};

export default EssayPage;

