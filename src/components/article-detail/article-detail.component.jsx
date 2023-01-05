import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./article-detail.styles.css";

const ArticleDetail = ({ articles }) => {
  const [allStories, setStories] = useState([]);
  const { published_date } = useParams();

  useEffect(() => {
    window.localStorage.setItem("allNews", JSON.stringify(articles));
    const stories = window.localStorage.getItem("allNews");
    if (stories !== null) {
      setStories(JSON.parse(stories));
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
      <div className="detail-wrapper">
          <h3 className="detailed-title">{clicked.title}</h3>
        <div className="wrapper">
          <img
            className="card-image"
            src={clicked.multimedia[0].url}
            alt={clicked.title}
          />
        </div>
        <h4 className="detailed-author">{clicked.byline}</h4>
        <h5>{clicked.abstract}</h5>
        <a href={clicked.url} target="_blank">
          <u style={{ textDecoration: "none" }}>Click here to view article</u>
        </a>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
