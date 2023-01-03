import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/home/home.component";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [err, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VGbjJxvHBhAtxDW1L6udQrT2acMxQXlG`)
      .then((response) => response.json())
      .then((data) => setArticles(data.results))
      .catch((error) => {
        setError(err);
      });
      console.log('running')
  },[ err ]);

  return (
    <Routes className="app-container">
      <Route path="/" element={<Home articles={articles}/>}/>
    </Routes>
  );
}

export default App;
