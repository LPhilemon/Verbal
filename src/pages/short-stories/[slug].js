
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import ShortStoryPageContent from '../../components/ShortStoryPage/ShortStoryPageContent';
import { collection, query, orderBy, limitToLast, getDocs, where, limit } from "firebase/firestore";

const ShortStoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [shortstoryData, setShortStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const shortstoriesRef = collection(db, 'shortstories');
    const q = query(shortstoriesRef, where('slug', '==', slug), limit(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setShortStoryData(data);
        } else {
          setError('ShortStory not found');
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
    <ShortStoryPageContent
      title={shortstoryData.title}
      author={shortstoryData.author}
      publishedAt={shortstoryData.publishedAt}
      content={shortstoryData.content}
      imageURL={shortstoryData.imageURL}
    />
  );
};

export default ShortStoryPage;

