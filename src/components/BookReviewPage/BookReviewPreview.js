import ArticleListItem from "../articles/ArticleListItem";
import NoImageArticleListItem from "../Articles/NoImageArticleListItem";
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const BookReviewPreview = ({ article }) => {
    const { title, author, publishedAt, excerpt, slug, imageURL } = article;
    return (
      <li>
        <div class="o-card o-card_stretch">
        
          <Link href={`/articles/${slug}`}>
            {imageURL && (
              <img
                className={styles["img-responsive"]}
                class="img-responsive o-card-media_bookAspect_img"
                src={imageURL}
                alt={title}
              />
            )}
          </Link>
          <div class="o-card-bd o-card-bd_constrained">
            <div class="c-feature">
              <div class="c-feature-preamble">
                <span class="c-txt c-txt_catMeta">Book Review</span>
              </div>
  
              <div class="c-feature-hd">
                <h2 class="c-hdgSans c-hdgSans_2">
                  <Link href={`/articles/${slug}`}>{title}</Link>
                </h2>
              </div>
  
              <div class="c-feature-sub c-feature-sub_flat">
                <span class="c-txt c-txt_attribution">By {author}</span>
              </div>
  
              <div class="c-feature-sub">
                <span class="c-txt c-txt_attribution">Reviewed By {author}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  
  export default BookReviewPreview;