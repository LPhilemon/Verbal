import ShortStoryListItem from "./ShortStoryListItem";

const ShortStoryList = ({shortstories}) => {
  if (!shortstories || shortstories.length === 0) {
    return <div>No short story issues available.</div>;
  }
      
  
  return(
         <div className="o-grid-col o-grid-col_6of12 o-mix-grid_col_minorOffset">
              <ul className="noPadding-noListStyle c-vList c-vList_bordered c-vList_bordered_anomaly">
              {shortstories.map((shortstory) => (
                <li key ={shortstory.id}>
                    <ShortStoryListItem shortstory={shortstory} />
                </li>
              ))}
              
              </ul>
            </div>
    );
};

export default ShortStoryList;