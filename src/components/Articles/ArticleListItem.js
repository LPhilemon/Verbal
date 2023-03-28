
import Link from "next/link";

const ArticleListItem = ({ article }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = article;

  return (
    <article>
      <header>
        <h2>
          <Link href={`/articles/${slug}`}>
            {title}
          </Link>
        </h2>
        <p>
          by {author} on {publishedAt}
        </p>
        {imageURL && <img src={imageURL} alt={title} />}
      </header>
      <div>
        <p>{excerpt}</p>
      </div>
    </article>
  );
};

export default ArticleListItem;

