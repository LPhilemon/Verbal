import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";
import BookReviewPreview from "./BookReviewPreview";

const BookReviewSamples = ({ articles }) => {
  

    return (
        <div class="c-tier c-tier_weighted c-mix-tier_offsetDistant">
          <div class="c-tier-label">
            <span class="c-txt c-txt_herald">
              <p>Latest Book Reviews</p>
            </span>
          </div>
    
          <div class="c-tier-content">
            <ul class="noPadding-noListStyle o-sectionList">
              <li>
                <ul class="noPadding-noListStyle o-graphBlocks o-graphBlocks_2up@xsmall o-graphBlocks_3up@medium">
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
    