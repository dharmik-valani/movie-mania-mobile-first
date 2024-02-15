import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.component";
import Movies from "./components/Movies/Movies.component";
import MovieDetails from "./components/Movies-details/MovieDetails.component";
import { useState } from "react";

function App() {

  const [isMovieDetails, setIsMovieDetails] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header isMovieDetails ={isMovieDetails} setIsMovieDetails={setIsMovieDetails}/>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails  setIsMovieDetails={setIsMovieDetails}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
