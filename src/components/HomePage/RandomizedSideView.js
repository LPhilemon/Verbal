import Link from "next/link";
import EssayPreview from "../EssayPage/EssayPreview";
import BookReviewPreviewNoImage from "../BookReviewPage/BookReviewPreviewNoImage";
import PoemPreview from "../PoemPage/PoemPreview";
import ShortStoryPreview from "../ShortStoryPage/ShortStoryPreview";

const RandomizedSideView = ({ articles }) => {
    return (
      <ul className="c-vList-noPadding c-vList c-vList_bordered">
        {articles.slice(0, 4).map((article, index) => {
          switch (index) {
            case 0:
              return <EssayPreview key={index} article={article} />;
            case 1:
              return <BookReviewPreviewNoImage key={index} article={article} />;
            case 2:
              return <PoemPreview key={index} article={article} />;
            case 3:
              return <ShortStoryPreview key={index} article={article} />;
            default:
              return null;
          }
        })}
      </ul>
    );
  };
  
  
  export default RandomizedSideView;