import RecentIssuesItem from "./RecentIssuesItem";
import Link from "next/link";

const RecentIssuesList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div>No issues available.</div>;
  }

  return (
    <div className="o-vr o-vr_12x">
    <div className="c-tier c-tier_tabbed c-mix-tier_offsetDistant">
      <div className="c-tier-tab">
        <span className="c-txt c-txt_labelMaker">Recent Issues</span>
      </div>
      <div className="c-tier-assets">
        <ul className=" o-blocks o-blocks_compressed o-blocks_expanded@sm o-blocks_2up o-blocks_4up@sm">
        {articles.map((article) => (
        <li  key={article.id}>
        <RecentIssuesItem article={article} />
        </li>
       
      ))}
        </ul>
      </div>
      <div className="c-tier-ft">
        <Link
          href="/articles"
          className="c-btn c-btn_inverted"
        >
          Browse More Issues
        </Link>
      </div>
    </div>
    </div>

  );
};

export default RecentIssuesList;

