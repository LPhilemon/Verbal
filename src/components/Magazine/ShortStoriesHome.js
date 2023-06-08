import ShortStoryList from "../ShortStory/ShortStoryList";
import ShortStoriesHomeImage from "./ShortStoriesHomeImage"


const ShortStoriesHome = ({shortstories}) => {
 if (!shortstories || shortstories.length === 0) {
    return <div>No shortstories at all available.</div>;
  }
    return(
        <div className="c-tier c-tier_weighted c-mix-tier_offsetDistant">
          <div className="c-tier-label">
            <span className="c-txt c-txt_herald">
              <p>Short Stories</p>
            </span>
          </div>

          <div className="o-grid o-grid_borderSplit">
         {shortstories.length > 0 &&  <ShortStoriesHomeImage shortstory = {shortstories[0]} /> }
 <ShortStoryList shortstories={shortstories} />
           
          </div>
        </div>
 
    );
};

export default ShortStoriesHome;