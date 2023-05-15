
import InterviewListItem from "./InterviewListItem";

const InterviewList = ({ interviews }) => {
  if (!interviews || interviews.length === 0) {
    return <div>No interviews available.</div>;
  }

  return (
    <ul className="contentBlock" style={{ listStyleType: 'none' }}>
  {interviews.map((interview) => (
    <li key={interview.id}>
      <InterviewListItem interview={interview} />
    </li>
  ))}
</ul>

  );
};

export default InterviewList;

