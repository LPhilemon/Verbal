import Link from "next/link";
import PoetryAndProseListItem from "./PoetryProseListItem";
const PoetryProseList = ({poems}) => {
if (!poems || poems.length === 0) {
    return <div>No issues available.</div>;
  }
    return(
         <div className="c-index-list">
                  <ul className="noPadding-noListStyle c-vList c-vList_bordered">
                 

                   {poems.map((poem) => (
        <li  key={poem.id}>
         {/* <PoetryAndProseListItem poems={poem} /> */}
        </li>
       
      ))}
                  </ul>
        </div>
    );
};

export default PoetryProseList;