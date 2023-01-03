import React from "react";
import Article from "../article/article.component";
import "./articles-container.styles.css";

const ArticlesContainer = ({ articles }) => {
  const displayCards = articles.map((article) => {
    return (
      <Article
        image={article.multimedia[0].url}
        title={article.title}
        byline={article.byline}
        date={article.published_date}
        key={article.uri}
      />
    );
  });

  return <div className="articles-container">{displayCards}</div>;
};

export default ArticlesContainer;