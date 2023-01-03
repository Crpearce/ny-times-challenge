import React from "react";
import { Link } from "react-router-dom";
import "./article.styles.css";

const Article = ({ title, image, date, byline }) => {
  const mm = `${date[5]}${date[6]}`;
  const dd = `${date[8]}${date[9]}`;
  const yyyy = date.slice(0, 4);

  return (
    <Link to={`/${date}`}>
      <div className="article-card">
        <div className="wrapper">
          <img className="card-image" src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <h4>{byline}</h4>
        <p className="card-date">{`${mm}/${dd}/${yyyy}`}</p>
      </div>
    </Link>
  );
};

export default Article;