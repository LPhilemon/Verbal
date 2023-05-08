
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import PoemPageContent from '../../components/PoemPage/PoemPageContent';
import { collection, query, orderBy, limitToLast, getDocs, where, limit } from "firebase/firestore";

const PoemPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [poemData, setPoemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const poemsRef = collection(db, 'poems');
    const q = query(poemsRef, where('slug', '==', slug), limit(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setPoemData(data);
        } else {
          setError('Poem not found');
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
    <PoemPageContent
      title={poemData.title}
      author={poemData.author}
      publishedAt={poemData.publishedAt}
      content={poemData.content}
      imageURL={poemData.imageURL}
    />
  );
};

export default PoemPage;

