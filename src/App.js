import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./routes/home/home.component";
import DetailedView from "./routes/detailed-view/detailed-view.component";
import Error from "./components/error/error.component";
import Loading from "./components/loading/loading.component";

import "./App.styles.css";

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
    <main>
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
      {articles.length === 0 && (<Loading />)}
      {err === true && (<Error />)}
      <div className="footer">
        Copyright (c) 2022 The New York Times Company. All Rights Reserved.
      </div>
    </main>
  );
};

export default App;
