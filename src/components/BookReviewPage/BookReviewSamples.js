import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";
import BookReviewPreview from "./BookReviewPreview";

const BookReviewSamples = ({ articles }) => {
  

    return (
        <div className="c-tier c-tier_weighted c-mix-tier_offsetDistant">
          <div className="c-tier-label">
            <span className="c-txt c-txt_herald">
              <p>Latest Book Reviews</p>
            </span>
          </div>
    
          <div className="c-tier-content">
            <ul className="noPadding-noListStyle o-sectionList">
              <li>
                <ul className="noPadding-noListStyle o-graphBlocks o-graphBlocks_2up@xsmall o-graphBlocks_3up@medium">
                  {articles.slice(1,4).map((article, index) => (
                    <BookReviewPreview key={index} article={article} />
                  ))}
                </ul>
              </li>
            </ul>
            {/* <!-- end .sectionList --> */}
          </div>
        </div>
      );
    };
    
    export default BookReviewSamples;
    