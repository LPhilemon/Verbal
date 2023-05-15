
import AppReviewListItem from "./AppReviewListItem";

const AppReviewList = ({ appreviews }) => {
  if (!appreviews || appreviews.length === 0) {
    return <div>No appreviews available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {appreviews.map((appreview) => (
    <li key={appreview.id}>
      <AppReviewListItem appreview={appreview} />
    </li>
  ))}
</ul>

  );
};

export default AppReviewList;

