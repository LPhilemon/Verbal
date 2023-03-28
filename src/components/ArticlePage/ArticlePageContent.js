
import { useState, useEffect } from "react";
import { db } from "../../firebase/clientApp";

const ArticlePageContent = ({ title, author, publishedAt, content, imageURL }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    setLoading(true);
    db.collection("articles")
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
    return <div>Loading article content...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>
          by {author} on {publishedAt}
        </p>
      </header>
      {imageURL && (
        <div>
          <img src={imageURL} alt={title} />
        </div>
      )}
      <div>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default ArticlePageContent;

