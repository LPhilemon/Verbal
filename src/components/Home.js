
import React from "react";
import ArticleList from "./articles/ArticleList";
import HomeDisplay from "./HomePage/HomeDisplay";
// import "../AppBar/myjscrip1";
// import "../AppBar/myjscrip2";

const Home = ({ articles }) => {
  return (
    <div>
     
      <HomeDisplay articles={articles} />
      <ArticleList articles={articles} />
     
    </div>
  );
};

export default Home;

