import ArticleListItem from "../articles/ArticleListItem";

import Link from "next/link";

const EssayPreview = ({ article }) => {
    const { title, author, publishedAt, excerpt, slug, imageURL } = article;
    return (
      


        <li>
                  <div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-preamble">
                      <span class="c-txt c-txt_catMeta1">Essay</span>

                      
                    </div>

                    <div class="c-feature-hd">
                      <h2 class="c-hdgSerif c-hdgSerif_3">
                      <Link href={`/articles/${slug}`}>{title}</Link>
                      </h2>
                    </div>
                     
                    
                    <div>
<p className="cormorant-garamond">{excerpt.split(" ")
  .slice(0, 27)
  .join(" ") }</p>
</div>
                    <div class="c-feature-sub">
                      <span class="c-txt c-txt_attribution">
                        By {author}
                      </span>
                    </div>
                  </div>
                </li>




    );
  };
  
  export default EssayPreview;