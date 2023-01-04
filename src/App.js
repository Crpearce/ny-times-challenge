import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./routes/home/home.component";
import DetailedView from "./routes/detailed-view/detailed-view.component";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [err, setError] = useState(false);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VGbjJxvHBhAtxDW1L6udQrT2acMxQXlG`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.results))
      .catch((error) => {
        setError(err);
      });
  }, [err]);

  useEffect(() => {
    const newFilteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchField)
    );
    setFilteredArticles(newFilteredArticles);
  }, [articles, searchField]);

  return (
    <Routes className="app-container">
      <Route
        path="/"
        element={
          <Home
            onChangeHandler={onSearchChange}
            placeholder="Search by Keyword"
            articles={filteredArticles}
          />
        }
      />
      <Route
        path="/:published_date"
        element={<DetailedView articles={filteredArticles} />}
      />
    </Routes>
  );
};

export default App;
