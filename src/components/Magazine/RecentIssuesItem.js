import Link from "next/link";

const RecentIssuesItem = ({ article }) => {
  const { title, author, publishedAt, excerpt, slug, imageURL } = article;

  return (
    
    <li>
    <Link href={`/articles/${slug}`}>
    {imageURL && (
      <img
       src={imageURL}
        sizes="(max-width: 667px) calc((100vw - (15px * 2) - (17px * 2) - 17px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - (30px * 2) - 90px) / 4), 255px"
        srcSet=""
        alt={title}
        className="c-cover-art"
      />
      )}
    </Link>
    </li>
      
  );
};

export default RecentIssuesItem;
