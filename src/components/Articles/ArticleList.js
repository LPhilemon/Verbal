
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div>No articles available.</div>;
  }

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleListItem article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;

