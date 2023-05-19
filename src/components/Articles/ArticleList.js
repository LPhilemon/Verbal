import ArticleListItem from "./ArticleListItem"

const ArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div>No articles available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {articles.map((article) => (
    <li key={article.id}>
      <ArticleListItem article={article} />
    </li>
  ))}
</ul>

  );
};

export default ArticleList;

