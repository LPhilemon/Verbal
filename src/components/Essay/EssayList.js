
import EssayListItem from "./EssayListItem";

const EssayList = ({ essays }) => {
  if (!essays || essays.length === 0) {
    return <div>No essays available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {essays.map((essay) => (
    <li key={essay.id}>
      <EssayListItem essay={essay} />
    </li>
  ))}
</ul>

  );
};

export default EssayList;

