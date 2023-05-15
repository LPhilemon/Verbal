
import Link from "next/link";

const AppReview = ({ title, author, publishedAt, excerpt, slug, imageURL }) => {
  return (
    <article>
      <header>
        <h2>
          <Link href={`/app-reviews/${slug}`}>
            <a>{title}</a>
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

export default AppReview;

