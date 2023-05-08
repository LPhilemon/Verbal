
import PoemListItem from "./PoemListItem";

const PoemList = ({ poems }) => {
  if (!poems || poems.length === 0) {
    return <div>No poems available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {poems.map((poem) => (
    <li key={poem.id}>
      <PoemListItem poem={poem} />
    </li>
  ))}
</ul>

  );
};

export default PoemList;

