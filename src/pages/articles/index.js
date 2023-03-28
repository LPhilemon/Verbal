
import { db } from "../../firebase/clientApp";

import ArticleList from "../../components/articles/ArticleList";

export async function getServerSideProps() {
  const snapshot = await db.collection("articles").get();

  const articles = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      articles,
    },
  };
}


const HomePageContent = ({ articles }) => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePageContent;

