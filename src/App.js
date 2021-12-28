import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
