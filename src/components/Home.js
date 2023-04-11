
import React from "react";
import ArticleList from "./articles/ArticleList";
// import "../AppBar/myjscrip1";
// import "../AppBar/myjscrip2";

const Home = ({ articles }) => {
  return (
    <div>
     
      <h1>Home Page</h1>
      <h2>Articles</h2>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

