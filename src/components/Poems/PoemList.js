
import poemListItem from "./poemListItem";

const poemList = ({ poems }) => {
  if (!poems || poems.length === 0) {
    return <div>No poems available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {poems.map((poem) => (
    <li key={poem.id}>
      <poemListItem poem={poem} />
    </li>
  ))}
</ul>

  );
};

export default poemList;

