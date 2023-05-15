
import ShortStoryListItem from "./ShortStoryListItem";

const ShortStoryList = ({ shortstories }) => {
  if (!shortstories || shortstories.length === 0) {
    return <div>No shortstories available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {shortstories.map((shortstory) => (
    <li key={shortstory.id}>
      <ShortStoryListItem shortstory={shortstory} />
    </li>
  ))}
</ul>

  );
};

export default ShortStoryList;

