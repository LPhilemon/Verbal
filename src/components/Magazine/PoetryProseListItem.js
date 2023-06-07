import Link from "next/link";

const PoetryAndProseListItem = ({poem}) => {
const { title, author, publishedAt, excerpt, slug, imageURL } = poem;

    return(
<li>
                      <div className="c-feature c-mix-feature_shrinkwrap">
                        <div className="c-feature-preamble">
                          <span className="c-txt c-txt_catMeta ">
                            Prose from <i>Poetry</i> Magazine
                          </span>
                        </div>
                        <div className="c-feature-hd">
                          <h2 className="c-hdgSans c-hdgSans_2">
                          <Link href={`/poems/${slug}`}>{title}</Link>
                            
                          </h2>
                        </div>

                        <div className="c-feature-sub">
                          <span className="c-txt c-txt_attribution">
                            By {author}
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

export default PoetryAndProseListItem;