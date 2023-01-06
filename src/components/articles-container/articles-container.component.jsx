import React from "react";
import Article from "../article/article.component";
import "./articles-container.styles.css";
import noImage from "../../assets/placeholder.png"

const ArticlesContainer = ({ articles }) => {
  const displayCards = articles.map((article) => {
    return (
      <Article
        image={!article.multimedia ? noImage : article.multimedia[0].url}
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
