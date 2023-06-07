import PoetryAndProseHomeImage from "./PoetryAndProseHomeImage";
import PoetryAndProseListItem from "./PoetryProseListItem";


const PoetryAndProseHome = ({poems}) => {

    return(

                <div className="c-tier c-mix-tier_offset">
          <div className="c-tier-mantle">
            <div className="c-banner c-banner_split">
              <div className="c-banner-hd">
                <h2 className="c-hdgSans c-hdgSans_3 mix-c-hdg_inverted">
                  <span className="c-txt c-txt_origin c-mix-txt_inverted">
                    From the current issue of
                  </span>
                  <i className="c-txt c-txt_emphatic c-mix-txt_inverted">Poetry</i>
                </h2>
              </div>
              <div className="c-banner-mark">
                <svg
                  className="icon icon_p1 mix-icon_bannerOffset"
                  role="img"
                  aria-label="Current Issue"
                >
                  {/* <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_p1"></use> */}
                </svg>
              </div>
            </div>
          </div>
          <div className="o-grid">
           <PoetryAndProseHomeImage poems={poems} />  {/* to be replaced with poem[0] */}
            <div className="o-grid-col o-grid-col_8of12">
              <div className="c-index">
                <div className="c-index-label">
                  <span className="c-txt c-txt_serialMeta">
                    <strong>From This Issue</strong> 2023
                  </span>
                </div>
                <div className="c-index-list">
                  <ul className="noPadding-noListStyle c-vList c-vList_bordered">
                  <PoetryAndProseListItem poems={poems} />

                  
                  </ul>
                </div>
              </div>
              {/* <!-- end .index --> */}
            </div>
          </div>
          {/* <!-- end .grid --> */}
        </div>
    );
};

export default PoetryAndProseHome;