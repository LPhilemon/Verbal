
import Link from "next/link";

const Interview = ({ title, author, publishedAt, excerpt, slug, imageURL }) => {
  return (
    <article>
      <header>
        <h2>
          <Link href={`/interviews/${slug}`}>
            <a>{title}</a>
          </Link>
        </h2>
        <p>
          by {author} on {publishedAt}
        </p>
        <div className="article-responsive-img">
        {imageURL && <img src={imageURL} alt={title} />}
        </div>
       
       

      </header>
      <div >
        <p>{excerpt}</p>
      </div>
    </article>
  );
};

export default Interview;

