import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";
import BookReviewSamples from "../BookReviewPage/BookReviewSamples";
import RandomizedSideView from "./RandomizedSideView";
import LeaderImageHome from "./LeaderImageHome";
import RecentIssuesList from "../Magazine/RecentIssuesList";
import PoetryAndProseHome from "../Magazine/PoetryAndProseHome";
import ShortStoriesHome from "../Magazine/ShortStoriesHome";

const HomeDisplay = ({ articles, poems, shortstories }) => {
  // if (!articles || articles.length === 0) {
  //  return <div>No articles available.</div>;
  // }

  return (
    //       <ul style={{ listStyleType: 'none' }}>
    //     {articles.map((article) => (
    //       <li key={article.id}>
    //         <ArticleListItem article={article} />
    //       </li>
    //     ))}
    //   </ul>
    <div role="main" id="mainContent" className="o-site-bd  o-site-bd_flush">
      <div className="o-wrapper">
        <div className="c-tier c-mix-tier_distant">
          <div className="o-grid o-grid_flexy o-grid_flexy_nonsequential">
            <div className="o-grid-col o-grid-col_4of12">
              <RandomizedSideView articles={articles}/>
            </div>
            <div className="o-grid-col o-grid-col_aspectMatch o-mix-grid_col_primary@small o-grid-col_8of12">
              <LeaderImageHome articles={articles} />
            

            </div>
          </div>
        </div>

       <BookReviewSamples articles={articles}/>

     <PoetryAndProseHome poems={poems} /> 

    <RecentIssuesList articles={articles} />

       <ShortStoriesHome shortstories={shortstories} />

       
        <div className="c-tier c-mix-tier_offset c-mix-tier_noOffsetTop">
          <div className="o-grid o-grid_flexy">
            <div className="o-grid-col o-grid-col_4of12">
              {/* <a href="https://w1.buysub.com/pubs/P3/PET/sub_digital.jsp?cds_page_id=268200&amp;cds_mag_code=PET&amp;id=1679428564828&amp;lsid=30801455448010397&amp;vid=2&amp;cds_response_key=L23NPMHP"> */}
              {/* <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc(100vw - (15px * 2)), (max-width: 1170px) calc(100vw - (15px * 2) - (64.102564102vw + 2.478632478vw)), 370px"
            srcSet="https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_370xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?370 370w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_466xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?466 466w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_628xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?628 628w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_740xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?740 740w"
            alt=""
            className="u-blockCtr"
            
        /> */}
              {/* </a> */}
            </div>
            <div className="o-grid-col o-grid-col_8of12">
              <div className="o-grid o-grid_borderSplit o-grid_curatedFlex">
                <div className="o-grid-col o-grid-col_6of12">
                  <div className="c-cta">
                    <div className="c-cta-bd">
                      <div className="c-txt c-txt_ctaCopy">
                        <p>
                          Submit poetry and letters to the editors of{" "}
                          <em>Poetry </em>magazine. <br />
                        </p>
                      </div>
                    </div>
                    <div className="c-cta-ft">
                      <a
                        href="https://www.inverbreplae.org/poetrymagazine/submit"
                        className="c-btn c-btn_inverted c-mix-btn_sm"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="o-grid-col o-grid-col_6of12 o-mix-grid_col_minorOffset"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
