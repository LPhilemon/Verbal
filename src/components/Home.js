
import React from "react";
import HomeDisplay from "./HomePage/HomeDisplay";
import ArticleList from "./Articles/ArticleList"
// import "../AppBar/myjscrip1";
// import "../AppBar/myjscrip2";

const Home = ({ articles, poems }) => {
  return (
    <div>
     
      <HomeDisplay articles={articles} poems={poems}/>
     
    </div>
  );
};

export default Home;

