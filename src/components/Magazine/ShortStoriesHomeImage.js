import Link from "next/link";

const ShortStoriesHomeImage = ({shortstory}) => {
 const { title, author, publishedAt, excerpt, slug, imageURL } = shortstory;

   if (!shortstory || shortstory.length === 0) {
    return <div>No shortstories available.</div>;
  }
    return(
         <div className="o-grid-col o-grid-col_6of12">
              <div className="c-feature">
                <div className="c-feature-media c-mix-feature-media_aspectForce">
                  
                   <Link legacyBehavior  href={`/short-stories/${slug}`}>
                    <a className="c-vignette c-theme-vignette_poetryMagazine">
                         <span className="u-isVisuallyHidden">
                      The &lt;em&gt;Inverbally&lt;/em&gt; Magazine Short Stories
                    </span>
                    </a>
                    
                   </Link>
                </div>

                <div className="c-feature-hd c-feature-hd_distant">
                  <h3 className="c-hdgSans c-hdgSans_5 c-hdgSans_4@sm mix-c-hdg_sans_flow">
                   <Link href={`/short-stories/${slug}`}>{title}</Link>
                  </h3>
                
                </div>

                <div className="c-feature-sub">
                  <span className="c-txt c-txt_attribution c-txt_attribution_piped">
                    From The <em>Inverbally</em> Magazine
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
            </div>
    );

};

export default ShortStoriesHomeImage;