import { useState, useEffect } from "react";
import { db } from "../../firebase/clientApp";
import HomeDisplay from "./HomeDisplay";

const HomePageContent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    setLoading(true);
    db.collection("articles")
      .orderBy("publishedAt", "desc")
      .limit(4)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const id = doc.id;
          const { title, author, publishedAt, excerpt, content, imageURL } =
            doc.data();
          return { id, title, author, publishedAt, excerpt, content, imageURL };
        });
        setArticleData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ArticleList articles={articleData} />
     
    </div>
  );
};

export default HomePageContent;
