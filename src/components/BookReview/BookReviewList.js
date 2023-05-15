
import BookReviewListItem from "./BookReviewListItem";

const BookReviewList = ({ bookreviews }) => {
  if (!bookreviews || bookreviews.length === 0) {
    return <div>No bookreviews available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {bookreviews.map((bookreview) => (
    <li key={bookreview.id}>
      <BookReviewListItem bookreview={bookreview} />
    </li>
  ))}
</ul>

  );
};

export default BookReviewList;

