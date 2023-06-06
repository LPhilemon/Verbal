import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const BookReviewPreview = ({ article }) => {
    const { title, author, publishedAt, excerpt, slug, imageURL } = article;
    return (
      <li>
        <div className="o-card o-card_stretch">
        
          <Link href={`/articles/${slug}`}>
            {imageURL && (
              <img
               
                className="img-responsive o-card-media_bookAspect_img"
                src={imageURL}
                alt={title}
              />
            )}
          </Link>
          <div className="o-card-bd o-card-bd_constrained">
            <div className="c-feature">
              <div className="c-feature-preamble">
                <span className="c-txt c-txt_catMeta">Book Review</span>
              </div>
  
              <div className="c-feature-hd">
                <h2 className="c-hdgSans c-hdgSans_2">
                  <Link href={`/articles/${slug}`}>{title}</Link>
                </h2>
              </div>
   <div>
<p className="cormorant-garamond">{excerpt.split(" ")
  .slice(0, 27)
  .join(" ") }</p>
</div>
              <div className="c-feature-sub c-feature-sub_flat">
                <span className="c-txt c-txt_attribution">By {author}</span>
              </div>
  
              <div className="c-feature-sub">
                <span className="c-txt c-txt_attribution">Reviewed By {author}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  
  export default BookReviewPreview;