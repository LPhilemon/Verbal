
import Link from "next/link";

const AppReviewPreview = ({ article }) => {
    const { title, author, publishedAt, excerpt, slug, imageURL } = article;
    return (
      


        <li>
                  <div className="c-feature c-mix-feature_shrinkwrap">
                    <div className="c-feature-preamble">
                      <span className="c-txt c-txt_catMeta1">AppReview</span>

                      
                    </div>

                    <div className="c-feature-hd">
                      <h2 className="c-hdgSerif c-hdgSerif_3">
                      <Link href={`/articles/${slug}`}>{title}</Link>
                      </h2>
                    </div>
                     
                    
                    <div>
<p className="cormorant-garamond">{excerpt.split(" ")
  .slice(0, 27)
  .join(" ") }</p>
</div>
                    <div className="c-feature-sub">
                      <span className="c-txt c-txt_attribution">
                        By {author}
                      </span>
                    </div>
                  </div>
                </li>




    );
  };
  
  export default AppReviewPreview;