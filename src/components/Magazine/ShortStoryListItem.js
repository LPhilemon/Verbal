import Link from "next/link";

const ShortStoryListItem = ({shortstory}) => {
    const { title, author, publishedAt, excerpt, slug, imageURL } = shortstory;

    return(
         <li>
                  <div className="c-feature c-mix-feature_shrinkwrap">
                    <div className="c-feature-hd">
                      <h2 className="c-hdgSans c-hdgSans_5">
                         <Link href={`/short-stories/${slug}`}>{title}</Link>
                      </h2>
                    </div>

                    <div className="c-feature-sub">
                      <span className="c-txt c-txt_attribution c-txt_attribution_piped">
                        From Stories Off the Shelf
                      </span>
                      <span className="c-txt c-txt_attribution c-txt_attribution_normal">
                        {publishedAt}
                      </span>
                    </div>

                    <div className="c-feature-bd">
                      <p>
                       {excerpt}
                      </p>
                    </div>
                  </div>
                </li>

               

                
                
    );
};

export default ShortStoryListItem;