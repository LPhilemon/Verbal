
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../firebase/clientApp';
import ArticlePageContent from '../components/ArticlePage/ArticlePageContent';

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    db.collection('articles')
      .where('slug', '==', slug)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = { id: doc.id, ...doc.data() };
          setArticleData(data);
        } else {
          setError('Article not found');
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
    <ArticlePageContent
      title={articleData.title}
      author={articleData.author}
      publishedAt={articleData.publishedAt}
      content={articleData.content}
      imageURL={articleData.imageURL}
    />
  );
};

export default ArticlePage;

