import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./article-detail.styles.css";

const ArticleDetail = ({ articles }) => {
  const [allStories, setStories] = useState([]);
  const { published_date } = useParams();

  useEffect(() => {
    window.localStorage.setItem("allNews", JSON.stringify(articles));
    const allStories = window.localStorage.getItem("allNews");
    if (allStories !== null) {
      setStories(JSON.parse(allStories));
    }
  }, [articles]);

  //   const allArticlesData = localStorage.getItem("allNews")
  //   const allArticles = JSON.parse(allArticlesData)
  //   useEffect(() => {
  //     const data = window.localStorage.getItem('allNews');
  //     // console.log(data)
  //     if ( data !== null ) {
  //     setStories(JSON.parse(data));
  //   }
  // }, []);

  const clicked = articles?.find(
    (article) => article.published_date === published_date
  );

  return (
    <div className="detailed-container">
      <h3>{clicked.title}</h3>
      <h4>{clicked.abstract}</h4>
      <div className="wrapper">
        <img
          className="card-image"
          src={clicked.multimedia[0].url}
          alt={clicked.title}
        />
      </div>
      <a href={clicked.url}>
        <u>View Full Article</u>
      </a>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ArticleDetail;
