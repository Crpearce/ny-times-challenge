import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import Home from "./routes/home/home.component";
import "./App.css";

function App() {

  return (
    <Routes className="app-container">
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
