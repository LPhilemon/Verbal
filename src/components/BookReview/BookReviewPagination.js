
import Link from "next/link";

const BookReviewPagination = ({ currentPage, numPages }) => {
  return (
    <div>
      {Array.from({ length: numPages }).map((_, i) => (
        <Link key={i} href={`/book-reviews?page=${i + 1}`}>
          <a style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}>
            {i + 1}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BookReviewPagination;

